import express from "express";
import dotenv from "dotenv";
import routes from "./sentsShipments_service/infrastructure/routes/routes";
import { errorHandler } from "./sentsShipments_service/infrastructure/middleware/errorHandler";
import { pool } from "./database/database";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

pool.getConnection().then((connection) => {
  connection.release();
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
