import React from 'react';

export default function Navbar({ scrollToSection, name }) {
  return (
    <header>
      <nav>
        <div className="left">
          {/* Abinash's Portfolio */}
          {name}
        </div>
        <button className="navbar-toggler" >
          <i className="fas fa-bars"></i>
        </button>
        <div className="right">
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
