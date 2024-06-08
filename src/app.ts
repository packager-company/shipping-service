import express, {Application} from "express";
import morgan from "morgan";

import dotenv from 'dotenv';
import {Signale} from "signale";

const app:Application = express();
const signale = new Signale();

dotenv.config();

app.use(morgan('dev'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});