import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        correo: {
            type: String,
            required: true,
            max: 100,
            unique: true,
        },
        contrasena: {
            type: String,
            required: true,
            min: 8,
        },
        ciudad: String,
        region: String,
        cargo: String,
        telefono:  String,
        rol: {
            type: String,
            enum: ["usuario", "admin", "superadmin"],
            default: "admin"
        },
        empresa: String,
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;