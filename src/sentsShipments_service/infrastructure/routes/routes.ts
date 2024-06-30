import { Router } from "express";
import { crearEnvioController } from "../controllers/crearEnvioController";
import { reglasValidacionEnvio } from "../../domain/validations/envioValidators";
import { actualizarEnvioController } from "../controllers/actualizarEnvioController";

const router = Router();

router.post("/envios", reglasValidacionEnvio, crearEnvioController);
router.put("/envios/:id", reglasValidacionEnvio, actualizarEnvioController);

export default router;
