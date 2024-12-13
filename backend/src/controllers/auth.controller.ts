import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

if (!process.env.JWT_SECRET) {
  console.error('Error: JWT_SECRET no está definido en las variables de entorno');
  process.exit(1);
}

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (_req: Request, res: Response) => {
  try {
    const { username, password } = _req.body;
    
    // Buscar usuario en la base de datos
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar contraseña hasheada
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar token
    const token = jwt.sign(
      { username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

/*
export const setupAdmin = async (req: Request, res: Response) => {
  try {
    const adminExists = await User.findOne({ username: 'admin' });
    
    if (adminExists) {
      return res.status(400).json({ message: 'El admin ya existe' });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = await User.create({
      username: 'admin',
      password: hashedPassword,
      role: 'admin'
    });

    res.json({ message: 'Admin creado', admin });
  } catch (error) {
    res.status(500).json({ message: 'Error creando admin' });
  }
};
*/