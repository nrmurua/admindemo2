import Movimiento from "../models/Movimiento.js";
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";
import Bodega from "../models/Bodega.js";
import Producto from "../models/Producto.js";

export const getMovimientos = async (req, res) => {
    try {

        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1)
            };

            return sortFormatted;
        }

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const movimientos = await Movimiento.find({
            $or: [
                { bodega_destino: { $regex: new RegExp(search, "i") } },
                { bodega_procedencia: { $regex: new RegExp(search, "i") } },
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize)

        const total = await Movimiento.countDocuments({
            bodega_procedencia: { $regex: search, $options: "i" },
        });

        res.status(200).json({
            movimientos,
            total,
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getClientes = async (req, res) => {
    try {

        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1)
            };

            return sortFormatted;
        }

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const clientes = await Cliente.find({
            $or: [
                { rut: { $regex: new RegExp(search, "i") } },
                { nombre: { $regex: new RegExp(search, "i") } },
                { correo: { $regex: new RegExp(search, "i") } },
                { telefono: { $regex: new RegExp(search, "i") } },
                { direccion: { $regex: new RegExp(search, "i") } },
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize);

        const total = await Cliente.countDocuments({
            rut: { $regex: search, $options: "i" },
        });

        res.status(200).json({
            clientes,
            total,
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getOrdenes = async (req, res) => {
    try {

        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1)
            };

            return sortFormatted;
        }

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const ordenes = await Pedido.find({
            $or: [
                { rut_cliente: { $regex: new RegExp(search, "i") } },
                { estado: { $regex: new RegExp(search, "i") } },
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize);

        const total = await Pedido.countDocuments({
            rut_cliente: { $regex: search, $options: "i" },
        });

        res.status(200).json({
            ordenes,
            total,
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

async function assignProductosToBodega(productos, bodegaId) {
    const bodega = await Bodega.findById(bodegaId);
  
    let espacioDisponible = bodega.capacidad - bodega.ocupado;
  
    for (const { producto: productoId, cantidad } of productos) {
      const producto = await Producto.findById(productoId);
      let espacioNecesario = 0;
  
      if (producto.nombre === "Troza") {
        if (producto.diametro > 0) {
          espacioNecesario = producto.diametro * cantidad;
        }
      } else {
        if (producto.espesor > 0 && producto.ancho > 0) {
          espacioNecesario = producto.espesor * producto.ancho * producto.largo * cantidad;
        }
      }
  
      if (espacioDisponible < espacioNecesario) {
        throw new Error("No hay suficiente espacio disponible en la bodega");
      }
  
      bodega.productos.push({
        producto: productoId,
        cantidad,
        espacio: espacioNecesario,
      });
  
      bodega.ocupado += espacioNecesario;
      espacioDisponible -= espacioNecesario;
    }
  
    await bodega.save();
  }

async function subtractProductsFromBodega(bodegaId, productId, quantity) {
  // Find the bodega and the product
  const bodega = await Bodega.findById(bodegaId);
  const productIndex = bodega.productos.findIndex(p => p.producto.equals(productId));
  if (productIndex < 0) {
    throw new Error('Product not found in bodega');
  }
  
  // Subtract the quantity
  const product = bodega.productos[productIndex];
  if (product.cantidad > quantity) {
    product.cantidad -= quantity;
  } else if (product.cantidad === quantity) {
    bodega.productos.splice(productIndex, 1);
  } else {
    throw new Error('Not enough products in bodega');
  }

  // Update the bodega's occupied space and save changes
  const spaceFreed = product.espacio * quantity;
  bodega.ocupado -= spaceFreed;
  await bodega.save();
}

export const getBodegasByEmpresa = async (req, res) => {
    const  { empresaId }  = req.query;

    try {
        const bodegas = await Bodega.find({empresa: empresaId});
        res.status(200).json({ bodegas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

