import express from "express";
import dotenv from "dotenv";
import routes from "./sentsShipments_service/infrastructure/routes/routes";
import { errorHandler } from "./sentsShipments_service/infrastructure/middleware/errorHandler";
import { sequelize } from "./database/database";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    await sequelize.sync({ force: false });
    console.log('Database synchronized');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
