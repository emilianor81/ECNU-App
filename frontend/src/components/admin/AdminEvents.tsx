import { useState } from 'react';
import { Plus, Edit, Trash, Calendar } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const AdminEvents = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Mountain Bike Competition 2024",
      date: "2024-06-15",
      location: "Alps Mountains",
      description: "Annual mountain bike competition in the Alps"
    },
    // ... otros eventos
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  const handleEdit = (event: Event) => {
    setCurrentEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Administrar Eventos</h2>
        <button
          onClick={() => {
            setCurrentEvent(null);
            setIsEditing(true);
          }}
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4" />
          Agregar Evento
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-600">{event.location}</p>
                <p className="mt-2">{event.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de edición/creación aquí */}
    </div>
  );
};

export default AdminEvents; 