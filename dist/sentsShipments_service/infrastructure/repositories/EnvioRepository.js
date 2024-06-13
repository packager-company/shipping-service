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
exports.EnvioRepository = void 0;
const envio_1 = require("../../domain/entities/envio");
class EnvioRepository {
    crear(envio) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield envio_1.Envio.create({
                uuid: envio.uuid,
                user_uuid: envio.user_uuid,
                origin: envio.origin,
                destination: envio.destination,
                weight: envio.weight,
                base_price: envio.base_price,
                additional_charge: envio.additional_charge,
                total_price: envio.total_price,
                status_uuid: envio.status_uuid,
            });
        });
    }
}
exports.EnvioRepository = EnvioRepository;
