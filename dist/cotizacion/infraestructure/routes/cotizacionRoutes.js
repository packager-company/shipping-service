"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.cotizacionRoutes = express_1.default.Router();
exports.cotizacionRoutes.post("/create-cotizacion", dependencies_1.createCotizacionController.run.bind(dependencies_1.createCotizacionController));
