import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'https://ecnu-app.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Usar el archivo de barril para las rutas
app.use('/api', routes);

// Conexión MongoDB
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 