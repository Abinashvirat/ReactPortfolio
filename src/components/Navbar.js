import React, { useState } from 'react';

export default function Navbar({ scrollToSection, name }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav>
        <div className="left">
          {name}
        </div>
        <button className="navbar-toggler" onClick={handleToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={`right ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => { scrollToSection('home'); handleToggle(); }}>Home</a></li>
            <li><a href="#about" onClick={() => { scrollToSection('about'); handleToggle(); }}>About</a></li>
            <li><a href="#skills" onClick={() => { scrollToSection('skills'); handleToggle(); }}>Skills</a></li>
            <li><a href="#projects" onClick={() => { scrollToSection('projects'); handleToggle(); }}>Projects</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

