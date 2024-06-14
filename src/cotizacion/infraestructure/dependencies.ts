import { CotizacionRepositoryImpl } from "../infraestructure/cotizacionRepositoryImpl";
import { CreateCotizacionUseCase } from "../application/createCotizacionUseCase";
import { CreateCotizacionController } from "./controllers/createCotizacionController";


export const cotizacionRepositoryImpl = new CotizacionRepositoryImpl();


export const createCotizacionUseCase = new CreateCotizacionUseCase(cotizacionRepositoryImpl);
export const createCotizacionController = new CreateCotizacionController(createCotizacionUseCase);