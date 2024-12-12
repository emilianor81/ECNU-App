# ECNU App

## 📋 Descripción
Aplicación web para gestionar y mostrar videos de YouTube con un panel de administración.

## 🛠 Tecnologías

### Frontend
- React + TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

### Backend
- Node.js + TypeScript
- Express
- MongoDB + Mongoose
- CORS

## 🏗 Infraestructura
- Frontend: Vercel
- Backend: Railway
- Base de datos: MongoDB Atlas

## 🚀 Instalación Local

### Requisitos Previos
- Node.js
- MongoDB local
- Git

### Frontend
```bash
cd frontend
npm install
# Crear .env
VITE_API_URL=http://localhost:3000/api
npm run dev
```

### Backend
```bash
cd backend
npm install
# Crear .env
MONGODB_URI=mongodb://localhost:27017/ecnu_db
PORT=3000
npm run dev
```

## 🌐 Despliegue

### Frontend (Vercel)
1. Conectar con repositorio GitHub
2. Variables de entorno:
   ```env
   VITE_API_URL=https://tu-app.railway.app/api
   ```

### Backend (Railway)
1. Conectar con repositorio GitHub
2. Configurar:
   - Root Directory: `/backend`
   - Build Command: `npm run build`
   - Start Command: `npm start`
3. Variables de entorno:
   ```env
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/ecnu_db
   PORT=3000
   ```

### MongoDB Atlas
1. Crear cluster
2. Crear usuario con permisos `readWrite`
3. Configurar Network Access para permitir conexiones

## 📁 Estructura del Proyecto
```
/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   └── VideoGallery.tsx
│   │   └── App.tsx
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── routes/
    │   ├── models/
    │   └── index.ts
    └── package.json
```

## 🔑 Características
- Galería de videos
- Panel de administración
- CRUD de videos
- Integración con YouTube

## 👥 Contribuir
1. Fork el proyecto
2. Crear rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request 