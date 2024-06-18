import React from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';

export default function ProjectsSection() {
  return (
    <section className="fourthsection" id="Projects">
      <br />
      <h2>Projects</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <img src={img1} className="card-img-top" alt="Project 1" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src={img2} className="card-img-top" alt="Project 2" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src={img3} className="card-img-top" alt="Project 3" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src={img4} className="card-img-top" alt="Project 4" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
      </div>
    </section>
  );
}
