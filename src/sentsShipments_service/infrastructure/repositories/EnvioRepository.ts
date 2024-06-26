import { Envio } from '../../domain/entities/envio';

export class EnvioRepository {
  async createEnvio(data: Partial<Envio>): Promise<Envio> {
    const envio = await Envio.create(data);
    return envio;
  }
}
