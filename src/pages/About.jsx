import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';


const About = ({ darkMode }) => {
    const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[75vh] flex flex-col justify-center"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center ml-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Hello, I'm</span>
            <span className="text-blue-600">Naman Kumar Singh</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            <span className={`${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} px-2 py-1 rounded`}>
              Software Development Engineer
            </span>
          </h2>
          <p className="text-lg mb-8 leading-relaxed max-w-xl">
           I'm a tech enthusiast specializing in creating futuristic web applications that are not just functional but also immersive and engaging. My mission is to blend technology and creativity to deliver extraordinary digital experiences
          </p>
          <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Naman_Kumar_Singh_Resume.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg">
                <FaDownload /> Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 border-2 ${
                darkMode ? 'border-gray-600 hover:border-white' : 'border-gray-300 hover:border-gray-600'
              }`}
            >
              Contact Me <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                darkMode ? 'border-blue-600/50' : 'border-blue-600/30'
            } mx-auto`}>
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover"/>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;