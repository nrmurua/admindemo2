import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import generalRoutes from "./routes/general.js";
import clientRoutes from "./routes/client.js";

import User from './models/User.js';
import Bodega from './models/Bodega.js';
import Cliente from './models/Cliente.js';
import Empresa from './models/Empresa.js';
import Movimiento from './models/Movimiento.js';
import Pedido from "./models/Pedido.js"
import Producto from './models/Producto.js';


import { dataBodegas, dataCliente, dataEmpresa, dataProducto, dataUser, dataPedidos, dataMovimientos } from "./data/index.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/general", generalRoutes);
app.use("/client", clientRoutes);

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    //User.insertMany(dataUser);
    //Bodega.insertMany(dataBodegas);
    //Cliente.insertMany(dataCliente);
    //Empresa.insertMany(dataEmpresa);
    //Producto.insertMany(dataProducto);
    //Pedido.insertMany(dataPedidos);
    //Movimiento.insertMany(dataMovimientos);

    


}).catch((error) => console.log(`${error} did not connect`));