import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg'; // ✅ Replace with actual path to your image

const contactDetails = {
  name: 'Micheal Mithra M',
  phone: '+91 8610096458',
  email: 'mmichealmithra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/micheal-mithra-m-360552254/',
  github: 'https://github.com/MichealMithraM',
  portfolio: 'https://michealmithram.github.io/CV-Portfolio/',
};

const Contact = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-16">
          <h2  className="text-4xl md:text-5xl font-extrabold  text-yellow-600 text-center drop-shadow-sm">
             📞 Contact Me
          </h2>
  <div className="mt-3 w-20 h-1 mx-auto bg-yellow-500 mb-8 rounded-full animate-glow" />
         
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-lg border border-yellow-300 p-8 max-w-3xl mx-auto"
          >
            {/* ✅ Photo with magical animated border */}
            <div className="flex justify-center mb-6 z-10">
  <div className="relative w-40 h-40 rounded-full overflow-hidden group ">
    
    {/* 🔥 Magical Glow Border */}
    <div className="absolute -inset-[6px]  bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-full blur-xl opacity-70 group-hover:opacity-90 animate-glow-spin z-0"></div>
    
    {/* 🖼️ Actual Profile Image */}
    <img
      src={profileImg}
      alt="Profile"
      className="relative w-full h-full object-cover rounded-full border-4 border-white "
    />
  </div>
</div>


            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">{contactDetails.name}</h3>

              <div className="flex items-center justify-center gap-3 text-gray-700">
                <FaPhone className="text-yellow-500" />
                <span>{contactDetails.phone}</span>
              </div>

              <div className="flex items-center justify-center gap-3 text-gray-700">
                <FaEnvelope className="text-yellow-500" />
                <span>{contactDetails.email}</span>
              </div>

              <div className="flex justify-center mt-6 gap-6 text-white">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full shadow-md"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full shadow-md"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={contactDetails.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full shadow-md"
                >
                  <FaGlobe size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
