import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CTARedirect from './pages/CTARedirect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/infos" element={<CTARedirect />} />
            <Route path="/:page" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky CTA for mobile */}
        <div className="fixed bottom-4 left-4 right-4 lg:hidden z-40">
          <a
            href="tel:0778708112"
            className="w-full bg-primary text-white text-center py-3 rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors duration-200 block"
          >
            📞 Appeler maintenant
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;