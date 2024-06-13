import { EnvioRepository } from "./infrastructure/repositories/EnvioRepository";
import { CrearEnvio } from "./application/use_cases/crearEnvio";

const envioRepository = new EnvioRepository();
const crearEnvio = new CrearEnvio(envioRepository);

export { envioRepository, crearEnvio };
