import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'home-section', label: 'Home' },
  { id: 'about-section', label: 'About' },
  { id: 'resume-section', label: 'Resume' },
  { id: 'services-section', label: 'Services' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'projects-section', label: 'Projects' },
  { id: 'contact-section', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home-section');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let found = 'home-section';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = section.id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">PRAVESH</a>
        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {sections.map(section => (
              <li className="nav-item" key={section.id}>
                <a
                  href={`/#${section.id}`}
                  className={`nav-link${active === section.id ? ' active' : ''}`}
                  onClick={e => handleNavClick(e, section.id)}
                >
                  <span>{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 