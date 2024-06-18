
import React, { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Navbar scrollToSection={scrollToSection} name="Abinash's Portfolio" />

      <main>
        <section ref={homeRef} id="home">
          <Section1 />
        </section>
        <hr />
        <section ref={aboutRef} id="about">
          <Section2 />
        </section>
        <hr />
        <section ref={skillsRef} id="skills">
          <Section3 />
        </section>
        <hr />
        <section ref={projectsRef} id="projects">
          <Section4 />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

