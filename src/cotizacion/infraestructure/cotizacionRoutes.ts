import express from 'express';
import { createCotizacionController } from './dependencies';

const cotizacionRouter = express.Router();

cotizacionRouter.post("/create", createCotizacionController.run.bind(createCotizacionController));