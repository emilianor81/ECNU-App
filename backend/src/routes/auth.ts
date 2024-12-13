import { Router, RequestHandler } from 'express';
import { login } from '../controllers/auth.controller';

const router = Router();

// Login
router.post('/login', login as RequestHandler);
// RUTA TEMPORAL - ELIMINAR EN PRODUCCIÓN
//router.post('/setup',setupAdmin as RequestHandler);

export default router; 