import { Router } from 'express';
import videoRoutes from './videos';
import authRoutes from './auth';

const router = Router();

// Aquí puedes agregar más rutas en el futuro
router.use('/videos', videoRoutes);
router.use('/auth', authRoutes);

export default router; 