import React from 'react';

export default function SkillsSection() {
  return (
    <section className="secondsection" id="Skills">
      <div className="about-heading" style={{ textAlign: 'center' }}>
        <br></br>
        <h2>SKILLS</h2>
      </div>
      <br />
      <div className="skills-list">
        <ul>
        C:
          <li>
         
            <div className="fillup" style={{ width: '80%', textAlign: 'center' }}>80%</div>
          </li>
          JAVA:
          <li>
          
            <div className="fillup" style={{ width: '70%', textAlign: 'center' }}>70%</div>
          </li>
          HTML:
          <li>
            
            <div className="fillup" style={{ width: '90%', textAlign: 'center' }}>90%</div>
          </li>
          CSS:
          <li>
            
            <div className="fillup" style={{ width: '85%', textAlign: 'center' }}>85%</div>
          </li>
          JavaScript:
          <li>
        
            <div className="fillup" style={{ width: '75%', textAlign: 'center' }}>75%</div>
          </li>
        </ul>
        <br />
        <div className="about-heading" style={{ textAlign: 'center' }}>
          <button className="view-more-btn">View More</button>
        </div>
      </div>
    </section>
  );
}
