import express from "express";
import "dotenv/config";
import { cotizacionRoutes} from "./cotizacion/infraestructure/routes/cotizacionRoutes";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/cotizacion', cotizacionRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});