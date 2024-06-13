"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearEnvio = exports.envioRepository = void 0;
const EnvioRepository_1 = require("./infrastructure/repositories/EnvioRepository");
const crearEnvio_1 = require("./application/use_cases/crearEnvio");
const envioRepository = new EnvioRepository_1.EnvioRepository();
exports.envioRepository = envioRepository;
const crearEnvio = new crearEnvio_1.CrearEnvio(envioRepository);
exports.crearEnvio = crearEnvio;
