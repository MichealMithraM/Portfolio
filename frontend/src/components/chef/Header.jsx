import React from 'react';
import { FaBars } from 'react-icons/fa';
import defaultProfile from '../../assets/th.jpeg';

const Header = ({ isSidebarVisible, toggleSidebar }) => {
  const username = 'Micheal Mithra';
  const role = 'Full Stack Developer';
  const profilePic = localStorage.getItem('profilePic') || defaultProfile;

  return (
    <header className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFB700] shadow-xl text-white relative z-10">
      <div
        className="flex flex-col md:flex-row justify-between items-center px-6 py-5 space-y-4 md:space-y-0 font-sans animate-fade-in"
      >
        {/* Left: Sidebar toggle + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-white hover:text-white/90 transition-transform duration-300 transform hover:scale-110"
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>

          <div className="leading-tight">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.5)]">
              Welcome to my portfolio
            </h1>
            <p className="text-sm md:text-base text-white/90 italic animate-pulse">
              Thank you for your time to see my portfolio
            </p>
          </div>
        </div>

        {/* Right: Profile Info */}
        <div className="flex items-center gap-4 text-sm text-right">
          <div className="leading-tight">
            <h2 className="font-semibold text-lg text-white drop-shadow-md">{username}</h2>
            <p className="capitalize text-white/90">{role}</p>
          </div>
          <img 
            src={profilePic}
            alt={username}
            className="w-14 h-14 rounded-full object-cover border-[2.5px] border-white shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:scale-105 transform transition duration-300"
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
        </div>
      </div>

      {/* Light glow animation overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 pointer-events-none animate-glow" />
    </header>
  );
};

export default Header;
