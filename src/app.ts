import express from 'express';
import bodyParser from 'body-parser';
import router from './historial-envios/infraestructure/routes/routes';
import { errorHandler } from './historial-envios/infraestructure/middleware/errorHandler';
// import router from './shipment_service/routes/routes';
// import { errorHandler } from './shipment_service/infrastructure/middleware/errorHandler';
// import sequelize from './database/database';
import sequelize from './databese/database';

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});
