import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import project1Screenshot from "../assets/project1.jpg";
import project2Screenshot from "../assets/project2.jpg";
import project3Screenshot from "../assets/project3.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Face Mask Detection',
      description: 'A real-time face mask detection system using CNN and OpenCV to identify masked and unmasked faces, ensuring compliance in public spaces.',
      tech: ['Python', 'Tensorflow', 'OpenCV', 'CNN','MobileNetV2'],
      link: 'https://github.com/NKSG100/Face_mask_detector'
    },
    {
      title: 'JOB Portal',
      description: 'A full-stack job portal enabling users to search and apply for jobs, while employers can post and manage job listings, with secure authentication and real-time updates',
      tech: ['React.JS', 'TailwindCSS', 'ExpressJS', 'MongoDB'],
      link: 'https://github.com/NKSG100/Job-Portal'
    },
    {
      title: 'Secure Pay',
      description: 'A secure payment authentication system with user registration, login, and password recovery using JWT, MongoDB, Express, and React for seamless and safe transactions.',
      tech: ['React.JS', 'TailwindCSS', 'ExpressJS', 'MongoDB'],
      link: 'https://github.com/NKSG100/Secure-Pay'
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          A showcase of my recent work and personal projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`rounded-xl overflow-hidden shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="h-65 overflow-hidden relative">
            <img src={index===0 ? project1Screenshot: index===1 ? project2Screenshot:project3Screenshot} alt="Project Screenshot" className="h-full w-full mx-auto rounded-xl shadow-lg"/>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className={`text-xs px-2 py-1 rounded ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
              >
                Learn more <FaArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="mb-6">Interested in seeing more of my work?</p>
        <a 
          href="https://github.com/NKSG100" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
        >
          <FaGithub /> View All Projects on GitHub
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;