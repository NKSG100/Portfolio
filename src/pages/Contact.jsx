import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`p-6 rounded-lg shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>nksnamannks@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedin className="text-blue-600" />
                <a href="https://www.linkedin.com/in/naman-kumar-singh-36121a1b5/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter className="text-blue-600" />
                <a href="https://x.com/NKSG100" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-blue-600" />
                <a href="https://github.com/NKSG100" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`p-6 rounded-lg shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-2 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
                }`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-2 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
                }`}
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className={`w-full p-2 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
                }`}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;