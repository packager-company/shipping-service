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
exports.CrearEnvio = void 0;
const envio_1 = require("../../domain/entities/envio");
const uuid_1 = require("uuid");
class CrearEnvio {
    constructor(envioRepository) {
        this.envioRepository = envioRepository;
    }
    ejecutar(user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const envio = new envio_1.Envio({
                uuid: (0, uuid_1.v4)(),
                user_uuid,
                origin,
                destination,
                weight,
                base_price,
                additional_charge,
                total_price,
                status_uuid
            });
            return this.envioRepository.crear(envio);
        });
    }
}
exports.CrearEnvio = CrearEnvio;
