import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://github.com/NKSG100" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`} />
          </a>
          <a href="https://www.linkedin.com/in/naman-kumar-singh-36121a1b5/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`} />
          </a>
          <a href="https://x.com/NKSG100" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`} />
          </a>
          <a href="mailto:nksnamannks@gmail.com">
            <FaEnvelope className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`} />
          </a>
        </div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Naman Kumar Singh.  All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;