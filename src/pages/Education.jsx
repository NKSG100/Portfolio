import { motion } from 'framer-motion';

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "National Institute of Technology, Kurukshetra",
      period: "2019 - 2023",
      description: "Specialized in Computer Science & Engineering with a strong foundation in algorithms, software development, and system design. Completed a thesis on optimization techniques in computing.",
    },
    {
      degree: "Senior Secondary",
      institution: "S.R D.A.V Public School",
      period: "2015 - 2017",
      description: "Completed 10th and 12th with a focus on Physics, Chemistry, and Mathematics, building a strong analytical and problem-solving foundation.",
    }
  ];

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
          My <span className="text-blue-600">Education</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          My academic journey and continuous learning path.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative pl-8 border-l-2 border-blue-600">
          {education.map((item, index) => (
            <div key={item.degree} className="mb-12 relative">
              <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
              <div className={`p-6 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex flex-wrap justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-blue-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">{item.degree}</h3>

                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.period}
                  </span>
                </div>
                <div className="text-xl font-medium mb-4 drop-shadow-[0_0_8px_rgba(0,0,255,0.7)]">{item.institution}</div>
                <p className="mb-4">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute -bottom-6 -left-3 w-6 h-6 rounded-full bg-blue-700 border-4 border-white dark:border-gray-900"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;