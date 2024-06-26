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
const express_validator_1 = require("express-validator");
const envio_1 = require("../../domain/entities/envio");
const crearEnvioController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid } = req.body;
        const originZip = origin.substring(0, 5);
        const destinationZip = destination.substring(0, 5);
        const envio = yield envio_1.Envio.create({
            user_uuid,
            origin: originZip,
            destination: destinationZip,
            weight,
            base_price,
            additional_charge,
            total_price,
            status_uuid
        });
        // Enviar respuesta exitosa
        res.status(201).json(envio);
    }
    catch (error) {
        console.error('Error in crearEnvioController:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.crearEnvioController = crearEnvioController;
