// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE || 'db_sents',
//   process.env.DB_USER || 'root',
//   process.env.DB_PASSWORD || '',
//   {
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT) || 3306,
//     dialect: 'mysql',
//     logging: false,
//   }
// );

// export { sequelize };

import { Sequelize } from 'sequelize';

  const sequelize = new Sequelize('db_sents', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
