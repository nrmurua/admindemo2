import mongoose from "mongoose";

const MovimientoSchema = new mongoose.Schema(
    {
        bodega_procedencia: { type: mongoose.Schema.Types.ObjectId, ref: 'Bodega' },
        bodega_destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Bodega' },
        fecha: Date,
        productos: [{
            producto_inicial: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
            producto_final: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
            cantidad: Number,
        }],
    },
    { timestamps: true }
);

const Movimiento = mongoose.model("Movimiento", MovimientoSchema);
export default Movimiento;