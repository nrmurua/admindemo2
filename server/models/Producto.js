import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        medidas: [],
        tipo: String,
        valor: Number,
    },
    { timestamps: true }
);

const Producto = mongoose.model("Producto", ProductoSchema);
export default Producto;