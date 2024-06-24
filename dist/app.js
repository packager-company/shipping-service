"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cotizacionRoutes_1 = require("./cotizacion/infraestructure/routes/cotizacionRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/cotizacion', cotizacionRoutes_1.cotizacionRoutes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});
