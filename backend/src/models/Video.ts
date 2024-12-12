import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  youtubeUrl: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Video', videoSchema); 