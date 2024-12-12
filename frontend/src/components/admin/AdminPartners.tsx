import { useState } from 'react';
import { Plus, Edit, Trash, X } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
}

const AdminPartners = () => {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "Sponsor 1",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      website: "https://sponsor1.com"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPartner, setCurrentPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: ''
  });

  const handleEdit = (partner: Partner) => {
    setCurrentPartner(partner);
    setFormData({
      name: partner.name,
      logo: partner.logo,
      website: partner.website
    });
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentPartner) {
      // Editar partner existente
      setPartners(partners.map(partner => 
        partner.id === currentPartner.id 
          ? { ...partner, ...formData }
          : partner
      ));
    } else {
      // Crear nuevo partner
      const newPartner = {
        id: partners.length + 1,
        ...formData
      };
      setPartners([...partners, newPartner]);
    }

    setIsEditing(false);
    setCurrentPartner(null);
    setFormData({ name: '', logo: '', website: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Administrar Partners</h2>
        <button
          onClick={() => {
            setCurrentPartner(null);
            setFormData({ name: '', logo: '', website: '' });
            setIsEditing(true);
          }}
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4" />
          Agregar Partner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white p-6 rounded-xl shadow">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => handleEdit(partner)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(partner.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                {currentPartner ? 'Editar Partner' : 'Agregar Partner'}
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
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL del Logo
                </label>
                <input
                  type="url"
                  value={formData.logo}
                  onChange={(e) => setFormData({...formData, logo: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sitio Web
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
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
                  {currentPartner ? 'Guardar Cambios' : 'Crear Partner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPartners; 