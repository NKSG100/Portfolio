import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [
    { id: 'about', label: 'About Me', path: '/' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'education', label: 'Education', path: '/education' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-blue-600">My Portfolio</span>
          </motion.div>
          {/* Navigation links */}
          <nav className="hidden md:flex space-x-8 mt-2">
            {sections.map(section => (
              <a key={section.id} href={section.path} className="font-medium text-xl hover:text-blue-600">
                {section.label}
              </a>
            ))}
            <button onClick={toggleTheme} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </nav>
          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mb-1.5 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-4">
                {sections.map(section => (
                  <li key={section.id}>
                    <a href={section.path} className="font-medium hover:text-blue-600">
                      {section.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    {darkMode ? '🌞' : '🌙'}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;