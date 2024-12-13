import { Plus, Edit, Trash, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Video {
  _id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  youtubeUrl: string;
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const AdminVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    views: '',
    duration: '',
    youtubeUrl: ''
  });

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/videos`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleEdit = (video: Video) => {
    setCurrentVideo(video);
    setFormData({
      title: video.title,
      thumbnail: video.thumbnail,
      views: video.views,
      duration: video.duration,
      youtubeUrl: video.youtubeUrl
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar este video?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          await fetchVideos();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        currentVideo 
          ? `${import.meta.env.VITE_API_URL}/videos/${currentVideo._id}`
          : `${import.meta.env.VITE_API_URL}/videos`,
        {
          method: currentVideo ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        await fetchVideos();
        setIsEditing(false);
        setCurrentVideo(null);
        setFormData({
          title: '',
          thumbnail: '',
          views: '',
          duration: '',
          youtubeUrl: ''
        });
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar el video');
    }
  };

  const handleYouTubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const videoId = getYouTubeVideoId(url);
    
    setFormData({
      ...formData,
      youtubeUrl: url,
      thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : formData.thumbnail
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Administrar Videos</h2>
        <button
          onClick={() => {
            setCurrentVideo(null);
            setFormData({
              title: '',
              thumbnail: '',
              views: '',
              duration: '',
              youtubeUrl: ''
            });
            setIsEditing(true);
          }}
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4" />
          Agregar Video
        </button>
      </div>

      <div className="bg-white rounded-xl shadow">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Thumbnail</th>
              <th className="text-left p-4">Título</th>
              <th className="text-left p-4">Vistas</th>
              <th className="text-left p-4">Duración</th>
              <th className="text-left p-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video._id} className="border-b">
                <td className="p-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{video.title}</td>
                <td className="p-4">{video.views}</td>
                <td className="p-4">{video.duration}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(video)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                {currentVideo ? 'Editar Video' : 'Agregar Video'}
              </h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de YouTube
                </label>
                <input
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={handleYouTubeUrlChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                />
              </div>

              {formData.thumbnail && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vista previa
                  </label>
                  <img 
                    src={formData.thumbnail} 
                    alt="Vista previa" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vistas
                  </label>
                  <input
                    type="text"
                    value={formData.views}
                    onChange={(e) => setFormData({...formData, views: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="ej: 124K"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duración
                  </label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="ej: 12:45"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  {currentVideo ? 'Guardar Cambios' : 'Crear Video'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVideos; 