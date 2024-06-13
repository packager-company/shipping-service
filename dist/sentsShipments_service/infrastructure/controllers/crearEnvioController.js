"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearEnvioController = void 0;
const crearEnvio_1 = require("../../application/use_cases/crearEnvio");
const EnvioRepository_1 = require("../repositories/EnvioRepository");
const express_validator_1 = require("express-validator");
const envioRepository = new EnvioRepository_1.EnvioRepository();
const crearEnvio = new crearEnvio_1.CrearEnvio(envioRepository);
const crearEnvioController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid } = req.body;
        const envio = yield crearEnvio.ejecutar(user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid);
        res.status(201).json(envio);
    }
    catch (error) {
        next(error);
    }
});
exports.crearEnvioController = crearEnvioController;
