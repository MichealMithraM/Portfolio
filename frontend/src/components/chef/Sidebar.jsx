import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaCertificate,
  FaPhoneAlt,
  FaFileDownload
} from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { BiSolidDashboard } from 'react-icons/bi';
import SidebarBackground from './SidebarBackground';
const Sidebar = ({ isSidebarVisible, closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    if (window.innerWidth < 768) closeSidebar();
  };

  return (
    <div
      className={`
        fixed md:static top-0 left-0 h-full z-50 transition-all duration-300
        ${isSidebarVisible ? 'translate-x-0 w-64' : '-translate-x-full w-16'} 
        md:translate-x-0 md:${isSidebarVisible ? 'w-64' : 'w-16'}
        bg-gradient-to-b from-gray-200 to-gray-100 shadow-2xl
      `}
    >
      <div className="h-full flex flex-col items-start relative overflow-hidden">
  <SidebarBackground />

      {/* <div className="h-full flex flex-col items-start"> */}
        {/* Top Icon */}
        <div className="w-full h-28 flex flex-col mt-10  items-center justify-center">
          <BiSolidDashboard className="text-5xl text-yellow-500 drop-shadow-lg" />
          {isSidebarVisible && (
            <p className="mt-2 text-gray-700 font-semibold text-sm uppercase tracking-widest">
              Portfolio
            </p>
          )}
        </div>

        {/* Navigation Menu */}
        <ul className="flex-1 font-medium tracking-wide pt-6 w-full flex flex-col space-y-2 text-[16px] px-2">
          {[
            { path: '/home', icon: <FaHome />, label: 'Home' },
            { path: '/about', icon: <FaUserAlt />, label: 'About' },
            { path: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
            { path: '/skills', icon: <GiSkills />, label: 'Skills' },
            { path: '/certificates', icon: <FaCertificate />, label: 'Certificates' },
            { path: '/contact', icon: <FaPhoneAlt />, label: 'Contact' },
          ].map(({ path, icon, label }) => (
            <li key={path} className="w-full">
              <button
                onClick={() => handleNav(path)}
                className={`flex items-center w-full py-2 px-4 rounded-md transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-yellow-400 text-white shadow-lg'
                    : 'hover:bg-yellow-300/80 hover:text-white text-gray-800'
                }`}
              >
                <span className="text-lg">{icon}</span>
                {isSidebarVisible && <span className="ml-4">{label}</span>}
              </button>
            </li>
          ))}

          {/* Divider */}
          <div className="w-4/5 mx-auto border-t border-gray-400 my-4" />

          {/* Resume Download */}
          {/* <li className="w-full">
            <a
              href="/resume.pdf"
              download
              className="flex items-center w-full py-2 px-4 rounded-md hover:bg-yellow-300/80 hover:text-white text-gray-800 transition"
            >
              <FaFileDownload className="text-lg" />
              {isSidebarVisible && <span className="ml-4">Download Resume</span>}
            </a>
          </li> */}
          <button
  onClick={() => handleNav('/resume')}
  className="flex items-center w-full py-2 px-4 rounded-md hover:bg-yellow-300/80 hover:text-white text-gray-800 transition"
>
  <FaFileDownload className="text-lg" />
  {isSidebarVisible && <span className="ml-4">Download Resume</span>}
</button>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
