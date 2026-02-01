import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Resume = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-10 md:px-16 bg-white text-gray-800">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold text-yellow-600">My Resume</h1>
            <a
              href="/MichealMithra.pdf"
              download
              className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="space-y-10">
            {[
              {
                title: 'About Me',
                content: (
                  <p>
                    I'm a Computer Science graduate with hands-on experience in PHP and the MERN Stack. I enjoy building real-world web applications and learning new technologies. I'm a quick learner, a good team player, and excited to start my career by contributing to innovative projects.
                  </p>
                )
              },
              {
                title: 'Education',
                content: (
                  <ul className="list-disc list-inside">
                    <li><strong>BE - CSE</strong>, St.Mother Theresa Engineering College, CGPA: 82% (2021–2025)</li>
                    <li><strong>HSC</strong>, St. Aloysius Girls Higher Secondary School (2020–2021)</li>
                  </ul>
                )
              },
              {
                title: 'Internships',
                content: (
                  <ul className="list-disc list-inside">
                    <li><strong>Life Changers IND</strong> – MERN stack project (Jan–May 2025)</li>
                    <li><strong>Doozy Info Software Solutions</strong> – PHP admin panel (Jul–Aug 2024)</li>
                    <li><strong>IKS, Ministry of Education</strong> – Frontend Research (Jan–Mar 2022)</li>
                  </ul>
                )
              },
              {
                title: 'Projects',
                content: (
                  <ul className="list-disc list-inside">
                    <li>Restaurant Management System – MERN stack</li>
                    <li>Admin Panel Web App – HTML, CSS, PHP, MySQL</li>
                    <li>Clock Web App</li>
                    <li>IKS Project Page</li>
                    <li>Herbal Dyes Website</li>
                  </ul>
                )
              },
              {
                title: 'Skills',
                content: (
                  <p>
                    HTML, CSS, JavaScript, PHP, Java, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, GitHub
                  </p>
                )
              },
              {
                title: 'Contact',
                content: (
                  <ul className="list-disc list-inside">
                    <li>📧 mmichealmithra@gmail.com</li>
                    <li>📞 +91 8610096458</li>
                    <li>🌐 <a href="https://michealmithram.github.io/CV-Portfolio/" className="text-blue-600 underline">Portfolio</a></li>
                    <li>🔗 <a href="https://www.linkedin.com/in/micheal-mithra-m-360552254/" className="text-blue-600 underline">LinkedIn</a></li>
                    <li>💻 <a href="https://github.com/MichealMithraM" className="text-blue-600 underline">GitHub</a></li>
                  </ul>
                )
              }
            ].map((section, index) => (
              <motion.section
                key={index}
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-yellow-700 mb-2 border-b pb-1">
                  {section.title}
                </h2>
                <div className="text-gray-700 text-[15px]">{section.content}</div>
              </motion.section>
            ))}
          </div>

          <motion.div
            className="text-center text-sm text-gray-600 mt-12 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            “Great developers are not born — they are self-built.”
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
