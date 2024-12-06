import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Housings from './pages/housings';
import Error404 from './pages/error404';
import Header from './components/header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housings" element={<Housings />} />
        <Route path="*" element={<Error404 />} /> {/* Page 404 */}
      </Routes>
    </Router>
  );
}

export default App;
