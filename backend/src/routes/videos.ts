import { Router, RequestHandler } from 'express';
import { 
  getVideos, 
  createVideo, 
  updateVideo, 
  deleteVideo 
} from '../controllers/videos.controller';
import { verifyToken } from '../middlewares/auth';

const router = Router();

router.get('/', getVideos as RequestHandler);
router.post('/', verifyToken, createVideo as RequestHandler);
router.put('/:id', verifyToken, updateVideo as RequestHandler);
router.delete('/:id', verifyToken, deleteVideo as RequestHandler);

export default router; 