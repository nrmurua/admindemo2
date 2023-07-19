import mongoose from "mongoose";

const BodegaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        capacidad: Number,
        ocupado: Number,
        empresa: String,
        productos: [{
            producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
            cantidad: Number,
            espacio: Number,
        }],
    },
    { timestamps: true }
);

const Bodega = mongoose.model("Bodega", BodegaSchema);
export default Bodega;