import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VideoGallery from './components/VideoGallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import AdminPanel from './components/admin/AdminPanel';
import Footer from './components/Footer';

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
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;