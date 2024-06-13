
import { EnvioRepository } from "./infrastructure/repositories/EnvioRepository";
import { CrearEnvio } from "./application/use_cases/CrearEnvio";
import { ListarHistorialEnvio } from "./application/use_cases/ListarHistorialEnvio";
import { HistorialEnvioRepository } from "./infraestructure/repositories/HistorialEnvioRepository";

// Repositorios
const envioRepository = new EnvioRepository();
const historialEnvioRepository = new HistorialEnvioRepository();

// Casos de uso
const crearEnvio = new CrearEnvio(envioRepository);
const listarHistorialEnvio = new ListarHistorialEnvio(historialEnvioRepository);

export { 
    envioRepository, 
    historialEnvioRepository, 
    crearEnvio, 
    listarHistorialEnvio 
};
