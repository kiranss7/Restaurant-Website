// App.jsx
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/Pagenotfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer /> {/* Footer inside BrowserRouter */}
      </BrowserRouter>
    </>
  );
}

export default App;
