import express from 'express';
import { createCotizacionController } from '../dependencies'

export const cotizacionRoutes = express.Router();

cotizacionRoutes.post("/create-cotizacion", createCotizacionController.run.bind(createCotizacionController));