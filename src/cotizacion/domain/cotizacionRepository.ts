import { Cotizacion } from "./cotizacion";

export interface CotizacionRepository {
    createCotizacion(id_cotizacion: number, origin: string, destination: string, weight: number): Promise<Cotizacion>;
    getAllCotizaciones(): Promise<Cotizacion[]>;
    getCotizacionById(id_cotizacion: number): Promise<Cotizacion>;

}