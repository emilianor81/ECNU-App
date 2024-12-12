import { Request, Response } from 'express';
import Video from '../models/Video';

export const getVideos = async (_req: Request, res: Response) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener videos' });
  }
};

export const createVideo = async (req: Request, res: Response) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear video' });
  }
};

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    );
    if (!video) {
      return res.status(404).json({ message: 'Video no encontrado' });
    }
    res.json(video);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar video' });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video no encontrado' });
    }
    res.json({ message: 'Video eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar video' });
  }
}; 