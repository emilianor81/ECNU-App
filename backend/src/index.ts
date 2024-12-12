import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
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