import { Router } from 'express';
import videoRoutes from './videos';

const router = Router();

// Aquí puedes agregar más rutas en el futuro
router.use('/videos', videoRoutes);

export default router; 