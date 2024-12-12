import { Router, RequestHandler } from 'express';
import { 
  getVideos, 
  createVideo, 
  updateVideo, 
  deleteVideo 
} from '../controllers/videos.controller';

const router = Router();

router.get('/', getVideos as RequestHandler);
router.post('/', createVideo as RequestHandler);
router.put('/:id', updateVideo as RequestHandler);
router.delete('/:id', deleteVideo as RequestHandler);

export default router; 