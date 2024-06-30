import { EnvioRepository } from "./infrastructure/repositories/EnvioRepository";
import { CrearEnvio } from "./application/use_cases/crearEnvio";
import { ActualizarEnvio } from "./application/use_cases/actualizarEnvio";

const envioRepository = new EnvioRepository();
const crearEnvio = new CrearEnvio(envioRepository);
const actualizarEnvio = new ActualizarEnvio(envioRepository);

export { envioRepository, crearEnvio, actualizarEnvio };
