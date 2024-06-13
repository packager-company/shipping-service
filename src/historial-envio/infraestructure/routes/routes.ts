// src/infrastructure/routes/routes.ts
import { Router } from "express";
import { crearEnvioController } from "../controllers/crearEnvioController";
import { listarHistorialEnvioController } from "../controllers/listarHistorialEnvioController";
import { reglasValidacionEnvio } from "../../domain/validations/envioValidators";

const router = Router();

router.post("/envios", reglasValidacionEnvio, crearEnvioController);
router.get("/historial-envios", listarHistorialEnvioController);

export default router;
