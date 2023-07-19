import express from "express";
import { getMovimientos, getClientes, getOrdenes, getBodegasByEmpresa } from "../controllers/client.js";

const router = express.Router();

router.get("/movimientos", getMovimientos);
router.get("/clientes", getClientes);
router.get("/ordenes", getOrdenes);
router.get("/bodegas", getBodegasByEmpresa);

export default router;