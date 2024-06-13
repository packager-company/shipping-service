import express from "express";


const router = express.Router();

router.get("/historial-envios", listarHistorialEnviosController);

export default router;
