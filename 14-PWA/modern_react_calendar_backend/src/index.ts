import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/config';

import authRoutes from './routes/auth';
import eventsRoutes from './routes/events';


dotenv.config();

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors({ origin: true }))

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/events', eventsRoutes);


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
