import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const skills = [
    { category: 'Languages', items: ['C++', 'HTML/CSS', 'Java', 'Python'] },
    { category: 'Frameworks', items: ['React.JS', 'Express.JS', 'MongoDB', 'Tensorflow', 'OpenCV'] },
    { category: 'Competitive Programming', items: ['Leetcode (400+ Questions Solved)', 'Codechef'] },
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
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Here is a Collection of my Technical Skills and Competencies.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className={`p-6 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span>{skill} </span>
                  {skillGroup.category === 'Competitive Programming' ? 
                  skill === 'Leetcode (400+ Questions Solved)' ? 
                    <p className='ml-2'>
                        -&gt; <a className={`${darkMode ? 'text-blue-200' : 'text-blue-800'} font-bold`} href="https://leetcode.com/u/NKSG100/" target="_blank">Visit profile</a>
                    </p>
                    :
                    <p className='ml-2'>
                        -&gt; <a className={`${darkMode ? 'text-blue-200' : 'text-blue-800'} font-bold`} href="https://www.codechef.com/users/nksg101" target="_blank">Visit profile</a>
                    </p>
                   :
                    <></>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;