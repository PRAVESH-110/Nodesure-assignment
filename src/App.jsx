import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Resume from './Resume';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Loader from './Loader';
import ResumeDownload from './ResumeDownload';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ once: true });
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ResumeDownload />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/resume-download" element={<ResumeDownload />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
