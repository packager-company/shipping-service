import express from 'express';
import bodyParser from 'body-parser';
import router from './historial-envios/infraestructure/routes/routes';
import { errorHandler } from './historial-envios/infraestructure/middleware/errorHandler';
import sequelize from './databese/database';

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});
