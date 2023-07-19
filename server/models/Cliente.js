import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        rut: {
            type: String,
            required: true,
            min: 10,
            max: 10
        },
        correo: {
            type: String,
            required: true,
            max: 100,
            unique: true,
        },
        direccion: String,
        ciudad: String,
        region: String,
        telefono:  String,
        pedidos: [{
            pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
        }],
    },
    { timestamps: true }
);

const Cliente = mongoose.model("Cliente", ClienteSchema);
export default Cliente;