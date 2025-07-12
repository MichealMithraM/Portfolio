import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { FaLaptopCode, FaUserTie, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const About = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#fff8e7] to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-16 bg-gradient-to-br from-white to-yellow-50">
          {/* Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 drop-shadow-md tracking-wide">
              About Me
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-2 font-light italic">
              A quick snapshot of who I am and what I do
            </p>
            <div className="mt-3 w-20 h-1 mx-auto bg-yellow-500 rounded-full animate-glow" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-yellow-700 flex items-center gap-2">
                <FaUserTie /> Micheal Mithra
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                I'm a passionate Full Stack Developer with a strong foundation in the MERN stack.
                I specialize in building responsive, scalable web applications with a focus on clean UI/UX.
                I’ve completed my B.E. in Computer Science with 82% and have developed multiple real-world projects
                like a Restaurant Management System and a Newspaper Billing System — all built completely on my own,
                without following any tutorials or external guidance.
                These self-built projects reflect my ability to plan, design, and implement full-stack solutions independently.
              </p>
              <p className="text-gray-700">
                My development journey began with HTML/CSS, later diving into React and Node.js, and I love blending logic with design.
              </p>
            </motion.div>

            {/* Right Column Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-yellow-200 transition duration-300 hover:shadow-yellow-400"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center gap-2">
                <FaLaptopCode /> Technologies I Use
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><strong>Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3, JavaScript</li>
                <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
                <li><strong>Tools:</strong> GitHub, VS Code, Postman</li>
                <li><strong>Others:</strong> PHP, MySQL, XAMPP, Firebase (basic)</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/MichealMithra.pdf"
                  download
                  className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 shadow-md transition"
                >
                  📄 Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Line */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-16 text-center text-gray-600 text-sm"
          >
            <FaLightbulb className="mx-auto text-yellow-400 mb-1 animate-pulse" />
            "I believe in learning by building — every project helps me grow better!"
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default About;
