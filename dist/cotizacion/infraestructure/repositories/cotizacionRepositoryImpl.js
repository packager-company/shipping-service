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
exports.CotizacionRepositoryImpl = void 0;
const database_1 = require("../../../database/database");
class CotizacionRepositoryImpl {
    createCotizacion(id_cotizacion, origin, destination, weight) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.sequelize.query('INSERT INTO cotizacion (id_cotizacion, origin, destination, weight) VALUES (?, ?, ?, ?)', { replacements: [id_cotizacion, origin, destination, weight] });
            return result;
        });
    }
    getAllCotizaciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.sequelize.query('SELECT * FROM cotizacion');
            return result[0];
        });
    }
    getCotizacionById(id_cotizacion) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.sequelize.query('SELECT * FROM cotizacion WHERE id_cotizacion = ?', { replacements: [id_cotizacion] });
            return result[0];
        });
    }
}
exports.CotizacionRepositoryImpl = CotizacionRepositoryImpl;
