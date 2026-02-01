import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
  'MongoDB Atlas', 'Tailwind CSS', 'MySQL', 'XAMPP',
  'API', 'GitHub', '.NET', 'ASP.NET', 'SQL', "SQL Server Management", 'responsive UI',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
    scale: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Skills = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 text-center drop-shadow-sm">
              ✨ My Skills
          </h2>
            <div className="mt-3 w-20 h-1 mx-auto bg-yellow-500 rounded-full animate-glow" />
         

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.div
  key={index}
  variants={itemVariants}
  whileHover={{
    rotateX: 10,
    rotateY: -10,
    scale: 1.05,
    transition: { type: 'spring', stiffness: 200, damping: 10 }
  }}
  className="group w-60 h-20 bg-white border border-yellow-300 shadow-md hover:shadow-yellow-500 hover:border-yellow-500 
             transition-all duration-30 ease-in-out transform hover:scale-105 
             rounded-[30%] flex items-center justify-center text-center cursor-pointer relative overflow-hidden"
>
  <div>
    <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
    <div className="w-16 mx-auto mt-2 h-1 bg-gradient-to-r from-yellow-400 to-gray-300 rounded"></div>
  </div>
</motion.div>

            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Skills;
