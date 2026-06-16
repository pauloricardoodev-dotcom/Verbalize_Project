import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import Benefits from './components/Benefits';
import Differential from './components/Differential';
import ForAll from './components/ForAll';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        <img 
          src={darkMode ? `${process.env.PUBLIC_URL}/assets/icons/sol.png` : `${process.env.PUBLIC_URL}/assets/icons/lua.png`} 
          alt={darkMode ? 'Modo claro' : 'Modo escuro'}
        />
      </button>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <InteractiveDemo />
      <Benefits />
      <Differential />
      <ForAll />
      <Technologies />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
