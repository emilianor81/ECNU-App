import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VideoGallery from './components/VideoGallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import AdminPanel from './components/admin/AdminPanel';
import Footer from './components/Footer';
import Login from './components/admin/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Navigation />
                <Hero />
                <About />
                <VideoGallery />
                <Sponsors />
                <Contact />
              </>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;