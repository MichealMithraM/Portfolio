import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Restaurant Management System',
    description: 'MERN-based app with order, staff, kitchen, grocery, and invoice management.',
    path: '/projects/restaurant',
    url: 'https://youtu.be/your-restaurant-video-link',
  },
  {
    title: 'Newspaper Billing System',
    description: 'Billing, invoice, and customer tracking built using React and Node.js.',
    path: '/projects/newspaper',
    url: 'https://youtu.be/your-newspaper-demo-link',
  },
  {
    title: 'Admin Panel (PHP)',
    description: 'Admin panel built using PHP, MySQL and XAMPP with dashboard and records.',
    path: '/projects/admin-panel',
    url: '/images/php.mp4',
  },
  {
    title: 'Clock App',
    description: 'Stylish digital clock using HTML, CSS, and vanilla JavaScript.',
    path: '/projects/clock',
    url: 'https://michealmithram.github.io/Clock/',
  },
  {
    title: 'Herbal Dyes Webpage',
    description: 'Static responsive web page to explain herbal dye preparation.',
    path: '/projects/herbal',
    url: 'https://michealmithram.github.io/Herbal-Dyes-pigments/',
  },
  {
    title: 'IKS Research & Web',
    description: 'Research + website UI for cultural project using HTML/CSS/JS.',
    path: '/projects/iks',
    url: 'https://michealmithram.github.io/Iks-project/',
  },
  {
    title: 'Read More App',
    description: 'Interactive blog-style UI with collapsible "read more" content.',
    path: '/projects/readmore',
    url: 'https://michealmithram.github.io/ReadMore/',
  },
  {
    title: 'CV Portfolio',
    description: 'Responsive portfolio site built using a modified HTML/CSS template to showcase resume and projects.',
    path: '/projects/portfolio',
    url: 'https://michealmithram.github.io/CV-Portfolio/',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Classic 2-player game made with HTML, CSS, and JavaScript.',
    path: '/projects/tic-tac-toe',
    url: 'https://michealmithram.github.io/Tic-tac-toe/',
  },
];


const Projects = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-yellow-50">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-16">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 drop-shadow-sm">
              My Projects
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-2">Click "View Project" to explore</p>
            <div className="mt-3 w-20 h-1 mx-auto bg-yellow-500 rounded-full animate-glow" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-yellow-300 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-yellow-500 hover:border-yellow-500 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-yellow-50 opacity-20 group-hover:opacity-40 transition duration-500 pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-yellow-700 mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* View Project Button */}
                <div className="relative z-10 mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 mt-2 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600 transition font-medium shadow-md"
                  >
                    🎥 View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
