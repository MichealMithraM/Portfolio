import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaSmile } from 'react-icons/fa';

const Welcome = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fefce8] via-white to-[#fef3c7] p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-yellow-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Welcome to My Portfolio
      </motion.h1>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2}>
          <div
            className="bg-white text-gray-900 rounded-2xl p-6 w-80 h-80 shadow-lg flex flex-col justify-between items-center border border-yellow-300 hover:shadow-yellow-400 hover:scale-105 transform transition duration-300"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg bg-yellow-500">
              <FaSmile />
            </div>

            <h2 className="text-xl font-bold mt-4 text-center">Hi, I'm Micheal Mithra</h2>
            {/* <span className="text-xs text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mt-1">💼 Fresher - 2025 Pass-out</span> */}

            <p className="text-sm text-gray-700 text-center px-2">
             BE CSE graduate (2025) with real-time web development experience. Skilled in MERN stack and frontend development, and currently gaining hands-on experience in .NET and ASP.NET. Eager to start my professional journey. Thank you for visiting my portfolio!
            </p>


            <button
              onClick={goToHome}
              className="mt-4 bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              🚀 Let's Visit
            </button>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Welcome;
