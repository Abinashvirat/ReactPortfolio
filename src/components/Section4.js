import React from 'react';


export default function ProjectsSection() {
  return (
    <section className="fourthsection" id="Projects">
        <br></br>
      <h2>Projects</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <img src="1.jpg" className="card-img-top" alt="Project 1" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src="2.jpg" className="card-img-top" alt="Project 2" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src="3.jpg" className="card-img-top" alt="Project 3" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <br />
            <a href="#" style={{ color: '#ff6f61' }}>github</a>
          </div>
        </div>
        <div className="card">
          <img src="4.jpg" className="card-img-top" alt="Project 4" />
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
