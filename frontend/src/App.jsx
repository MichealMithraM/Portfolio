import { Routes, Route } from 'react-router-dom';
import RoleCards from './components/RoleCards';
import Home from './components/chef/Home';
import About from './components/chef/About';
import Project from './components/chef/Projects';
import Skills from './components/chef/Skills';
import Certificate from './components/chef/Certificates';
import Contact from './components/chef/Contact';
import Resume from './components/chef/Resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleCards />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Project />} />
  <Route path="/skills" element={<Skills />} />
   <Route path="/certificates" element={<Certificate />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
