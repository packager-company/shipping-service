"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crearEnvioController_1 = require("../controllers/crearEnvioController");
const envioValidators_1 = require("../../domain/validations/envioValidators");
const router = (0, express_1.Router)();
router.post("/envios", envioValidators_1.reglasValidacionEnvio, crearEnvioController_1.crearEnvioController);
exports.default = router;
