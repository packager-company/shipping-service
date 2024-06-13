export class HistorialEnvio {
    constructor(
      public numeroEnvio: string,
      public fechaEnvio: Date,
      public direccionOrigen: string,
      public direccionDestino: string,
      public pesoPaquete: number,
      public tipoEnvio: string,
      public estadoEnvio: string,
      public costoTotal: number
    ) {}
  }
  