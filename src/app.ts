import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './database/database';
import routes from './sentsShipments_service/infrastructure/routes/routes';
import { errorHandler } from './sentsShipments_service/infrastructure/middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
