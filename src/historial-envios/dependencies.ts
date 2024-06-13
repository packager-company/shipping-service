import { ListarHistorialEnvios } from "./application/use_cases/listarHistorialEnvio";
import { HistorialEnvioRepository } from "./infraestructure/controllers/listarHistorialEnviosController";


const historialEnvioRepository = new HistorialEnvioRepository();
const listarHistorialEnvios = new ListarHistorialEnvios(historialEnvioRepository);

export { historialEnvioRepository, listarHistorialEnvios };
