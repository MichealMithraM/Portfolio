import React, { useState, memo } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  FaCode, FaUserGraduate, FaProjectDiagram, FaNewspaper, FaLaptopCode
} from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';

const cardData = [
  {
    title: 'Skills',
    icon: <FaCode className="text-3xl text-yellow-600 mb-4" />,
    content: 'React, Node.js, Express, MongoDB, Tailwind CSS, PHP, HTML, CSS, JavaScript, Java, c'
  },
  {
    title: 'Projects',
    icon: <FaProjectDiagram className="text-3xl text-yellow-600 mb-4" />,
    content: (
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
        <li>Restaurant Management (MERN)</li>
        <li>Admin Panel (PHP/XAMPP)</li>
        <li>IKS Project (HTML/CSS/JS)</li>
        <li>Clock App, Herbal Dyes Webpage</li>
        <li className="font-semibold text-yellow-700">📰 Newspaper Billing System</li>
      </ul>
    )
  },
  {
    title: 'Education',
    icon: <FaUserGraduate className="text-3xl text-yellow-600 mb-4" />,
    content: (
      <>
        B.E. Computer Science <br />
        St. Mother Theresa Engineering College <br />
        Anna University <br />
        CGPA: 82%
      </>
    )
  },
  {
    title: 'Internships',
    icon: <FaLaptopCode className="text-3xl text-yellow-600 mb-4" />,
    content: (
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Doozy Info – Admin Panel</li>
        <li>Life Changes – Restaurant System</li>
        <li>IKS – Frontend Web + Research</li>
      </ul>
    )
  },
  {
    title: 'Contact',
    icon: <FaNewspaper className="text-3xl text-yellow-600 mb-4" />,
    content: (
      <div className="text-sm text-gray-600 space-y-1">
        <p>📞 +91 8610096458</p>
        <p>📧 mmichealmithra@gmail.com</p>
        <p>
          🔗 <a href="https://github.com/MichealMithraM" target="_blank" className="text-yellow-600 hover:underline">GitHub</a> | 
          <a href="https://www.linkedin.com/in/micheal-mithra-m-360552254/" target="_blank" className="ml-1 text-yellow-600 hover:underline">LinkedIn</a>
        </p>
      </div>
    )
  },
  {
  title: 'Languages',
  icon: <FaLanguage className="text-3xl text-yellow-600 mb-4" />,
  content: (
    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
      <li><strong>Tamil:</strong> Native</li>
      <li><strong>English:</strong> Fluent</li>
    </ul>
  )
},

];

const Card = memo(({ title, icon, content }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-yellow-400 transition hover:scale-105 border border-yellow-200">
    {icon}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <div>{content}</div>
  </div>
));

const Home = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-white">
      <Sidebar isSidebarVisible={isSidebarVisible} closeSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6 pt-8 md:pt-10 bg-gradient-to-br from-white to-yellow-50">
          {/* Hero */}
          <section className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow">
              Hello, I'm <span className="text-yellow-500">Micheal Mithra</span>
            </h1>
            <p className="mt-2 text-lg md:text-xl text-gray-700 font-light">
              A <span className="text-yellow-600 font-semibold">Full Stack Developer</span>
            </p>
            <div className="mt-4 w-20 h-1 bg-yellow-500 mx-auto rounded-full shadow-md" />
          </section>

          {/* Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
