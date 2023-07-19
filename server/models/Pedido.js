import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema(
    {
        id_empresa: String,
        fecha_ingreso: Date,
        fecha_entrega: Date,
        productos: [{
            producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
            cantidad: Number
        }],
        estado: String,
        valor: Number
    },
    { timestamps: true }
);

const Pedido = mongoose.model("Pedido", PedidoSchema);
export default Pedido;