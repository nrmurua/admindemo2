import mongoose from "mongoose";

const EmpresaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        rut: String,
        direccion: String,
        ciudad: String,
        region: String,
    },
    { timestamps: true }
);

const Empresa = mongoose.model("Empresa", EmpresaSchema);
export default Empresa;