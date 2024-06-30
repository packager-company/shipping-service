// src/config.ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  dbUser: process.env.DBUSER || '',
  dbPass: process.env.DBPASS || '',
  dbUrl: process.env.DBURL || '',
  dbName: process.env.DBNAME || '',
  jwtSecret: process.env.SECRET || 'E8r$F!9kZm6qW@3N{arBITRARY#58z}'
};
