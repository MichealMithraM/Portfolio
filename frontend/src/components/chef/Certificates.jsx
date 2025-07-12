import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';

// Certificates info
const certificates = [
  {
    title: 'MERN Stack Internship',
    org: 'Life Changes',
    date: 'Jan 2025 – May 2025',
    img: '/images/mern-certificate.jpg', // ✅ your image path
  },
  {
    title: 'PHP Development Internship',
    org: 'Doozy Info Software Solutions',
    date: 'Jul 2024 – Aug 2024',
    img: '/images/php-certificate.jpg',
  },
  {
    title: 'Research & Frontend (IKS)',
    org: 'Ministry of Education',
    date: 'Jan 2022 – Mar 2022',
    img: '/images/research-certificate.jpg',
  },
  {
    title: 'Java Fundamentals',
    org: 'Scaler Topics',
    date: '05 December 2024',
    img: '/images/java-scaler.jpg',
  },
  {
    title: 'Introduction to HTML',
    org: 'SoloLearn',
    date: '12 June 2025',
    img: '/images/html-solo.jpg',
  },
  {
    title: 'C Programming Specialization',
    org: 'St. Mother Theresa Engineering College',
    date: '10 Jan 2022 – 6 Apr 2022',
    img: '/images/c-smtec.jpg',
  },
  {
    title: 'Front End Development - HTML',
    org: 'Great Learning Academy',
    date: 'August 2023',
    img: '/images/greatlearing.jpg',
  },
   {
    title: 'Introduction to Java',
    org: 'SoloLearn',
    date: '11 November 2024',
    img: '/images/html-solo.jpg',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 80 },
  },
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
  exit: {
    opacity: 0, scale: 0.8,
    transition: { duration: 0.3 },
  },
};

const Certificates = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState(null); // 🆕

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-extrabold  text-yellow-600 text-center drop-shadow-sm">
            🏆 My Certificates
          </h2>
  <div className="mt-3 w-20 h-1 mx-auto bg-yellow-500 mb-8 rounded-full animate-glow" />
         
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 200, damping: 12 },
                }}
                className="group bg-white rounded-2xl p-6 border border-yellow-300 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-yellow-500 hover:border-yellow-500 relative overflow-hidden"
              >
                <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 mt-1">{cert.org}</p>
                <p className="text-sm text-gray-500 mt-2 italic">{cert.date}</p>

                <button
                  onClick={() => setSelectedCertificate(cert)} // 🆕
                  className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl shadow-md transition-all"
                >
                  View Certificate
                </button>

                <div className="w-full h-1 mt-4 bg-gradient-to-r from-yellow-400 to-gray-300 rounded"></div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>

      {/* 🆕 Certificate Popup */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
           className="fixed inset-0 z-50 bg-transparent flex items-center justify-center backdrop-blur-sm"
 variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden p-4 relative max-w-[90%] max-h-[90%]"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
            >
              <img
                src={selectedCertificate.img}
                alt={selectedCertificate.title}
                className="max-w-full max-h-[75vh] object-contain rounded-md"
              />
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full text-sm"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
