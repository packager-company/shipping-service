"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCotizacionController = exports.createCotizacionUseCase = exports.cotizacionRepositoryImpl = void 0;
const cotizacionRepositoryImpl_1 = require("./repositories/cotizacionRepositoryImpl");
const createCotizacionUseCase_1 = require("../application/usecase/createCotizacionUseCase");
const createCotizacionController_1 = require("./controllers/createCotizacionController");
exports.cotizacionRepositoryImpl = new cotizacionRepositoryImpl_1.CotizacionRepositoryImpl();
exports.createCotizacionUseCase = new createCotizacionUseCase_1.CreateCotizacionUseCase(exports.cotizacionRepositoryImpl);
exports.createCotizacionController = new createCotizacionController_1.CreateCotizacionController(exports.createCotizacionUseCase);
