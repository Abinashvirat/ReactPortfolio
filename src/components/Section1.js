import React, { useEffect } from 'react';
import bun from '../../public/img/bun.jpg'
export default function Section1() {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.async = true;

    // Function to initialize Typed once script is loaded
    const initTyped = () => {
      new window.Typed('#element', {
        strings: ['Nice to meet you...', 'Thank you!!'],
        typeSpeed: 100,
      });
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Add event listener to call initTyped once script is loaded
    script.addEventListener('load', initTyped);

    // Clean up: Remove script and event listener when component unmounts
    return () => {
      document.body.removeChild(script);
      script.removeEventListener('load', initTyped);
    };
  }, []);

  return (
    <section className="firstsection">
      <div className="leftsection animated-text">
        Hi, My name is <span className="purple">Abinash</span>
        <div>
          <div>and I am a passionate Developer.</div>
          <span id="element"></span>
          <div className="social-icons" style={{ paddingTop: '20px' }}>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter" style={{ color: '#1DA1F2', margin: '5px' }}> </i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram" style={{ color: '#C13584', margin: '5px' }}> </i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin" style={{ color: '#0A66C2', margin: '5px' }}> </i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook" style={{ color: '#1877F2', margin: '5px' }}> </i>
            </a>
          </div>
          <div style={{ marginTop: '20px' }}>
            <br />
            <a href="/Abinash.pdf" download className="download-cv-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="rightsection animated-image">
        <img src={bun} alt="Your Image" className="oval-image" />
      </div>
    </section>
  );
}
