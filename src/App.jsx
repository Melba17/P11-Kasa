import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Housings from './pages/housings';
import Error404 from './pages/error404';
import Header from './components/header';
import Footer from './components/footer';

// <Header /> et <Footer /> sont hors du scope des routes, ils seront affichés de manière constante, quelle que soit la route active
function App() {
  return (
    <Router>
      <Header />
      {/* Ajout d'un conteneur <main> autour des routes pour bénéficier de la flexibilité scss */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housings" element={<Housings />} />
          <Route path="*" element={<Error404 />} /> {/* Page 404 */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
