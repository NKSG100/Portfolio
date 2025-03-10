import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <main className="container mx-auto px-4 py-8 md:py-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<About darkMode={darkMode} />} />
                <Route path="/skills" element={<Skills darkMode={darkMode} />} />
                <Route path="/projects" element={<Projects darkMode={darkMode} />} />
                <Route path="/education" element={<Education darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer darkMode={darkMode} />
        </Router>
      )}
    </div>
  );
}

export default App;