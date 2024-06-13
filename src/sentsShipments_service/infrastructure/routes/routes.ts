import { Router } from "express";
import { crearEnvioController } from "../controllers/crearEnvioController";
import { reglasValidacionEnvio } from "../../domain/validations/envioValidators";

const router = Router();

router.post("/envios", reglasValidacionEnvio, crearEnvioController);

export default router;
