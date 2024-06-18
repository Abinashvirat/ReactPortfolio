import React from 'react';

export default function Section2() {
  return (
    <section className="thirdsection" id="About">
      <div className="about-heading" style={{ textAlign: 'center' }}>
        <br></br>
        <h2>About Me</h2>
      </div>
      <br />
      <div className="about-content">
        <div className="leftsection2">
          <img src="dev.png" alt="Your Image" style={{ width: '200px', height: 'auto' }} />
        </div>
        <br />
        <br />
        <div className="rightsection2">
          <p>
            I am a passionate developer with expertise in web development technologies such as HTML, CSS, and
            JavaScript. I love creating innovative solutions to solve real-world problems.
          </p>
          <p>
            My journey in the world of programming started several years ago, and since then, I have been
            continuously learning and honing my skills to stay updated with the latest trends and
            technologies.
          </p>
          <p>
            Aside from coding, I enjoy exploring new places, reading books, and spending time with friends
            and family.
          </p>
          <br />
          <br />
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>My qualifications include:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ color: '#1f77b4' }}>&#8226; Completed MCA by scoring 8.5 CGPA.</li>
            <li style={{ color: '#1f77b4' }}>&#8226; Completed BSC by scoring 78 percentage.</li>
            <li style={{ color: '#1f77b4' }}>&#8226; Completed +2 by scoring 73 percentage</li>
            <li style={{ color: '#1f77b4' }}>&#8226; Completed 10th by scoring 80 percentage.</li>
          </ul>
          <br />
          <br />
          <div className="about-heading" style={{ textAlign: 'center' }}>
            <button className="view-more-btn">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
