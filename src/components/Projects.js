import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <>
      {/* PERSONAL PROJECTS */}

      <section
        id="projects"
        className="portfolio-showcase"
      >
        <div className="portfolio-header">

          <span>Portfolio</span>

          <h2>Featured Personal Projects</h2>

          <p>
            Two professional websites completely designed and developed by me
            using React.js, modern UI, responsive layouts and clean frontend
            architecture.
          </p>

        </div>

        <div className="portfolio-grid">

            <div className="portfolio-card portfolio-photo">

  <div className="portfolio-light"></div>

  <div className="portfolio-index">
    01
  </div>

  <div className="portfolio-content">

    <span className="portfolio-badge">
      Creative Media Website
    </span>

    <h3>ADFICTION</h3>

    <p>
      A creative digital media platform showcasing original music,
      short films, cinematic projects and creative content with a
      modern UI, smooth animations and responsive design.
    </p>

    <div className="portfolio-stack">
      <span>React.js</span>
      <span>CSS3</span>
      <span>Responsive</span>
      <span>Animations</span>
      <span>Modern UI</span>
    </div>

    <a
      href="https://adfiction.vercel.app"
      target="_blank"
      rel="noreferrer"
      className="portfolio-button"
    >
      Visit Website →
    </a>

  </div>
</div>

          <div className="portfolio-card portfolio-trust">

            <div className="portfolio-light"></div>

            <div className="portfolio-index">
              02
            </div>

            <div className="portfolio-content">

              <span className="portfolio-badge">
                NGO Website
              </span>

              <h3>Aarvian Trust</h3>

              <p>
                A complete trust website featuring donation pages,
                volunteer registration, responsive layouts,
                modern animations and professional UI.
              </p>

              <div className="portfolio-stack">
                <span>React.js</span>
                <span>CSS3</span>
                <span>Responsive</span>
                <span>Animations</span>
              </div>

              <a
                href="https://aarvian-trust.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="portfolio-button"
              >
                Visit Website →
              </a>

            </div>
          </div>

      

          <div className="portfolio-card portfolio-photo">

            <div className="portfolio-light"></div>

            <div className="portfolio-index">
              03
            </div>

            <div className="portfolio-content">

              <span className="portfolio-badge">
                Photography Portfolio
              </span>

              <h3>ONAIR Photography</h3>

              <p>
                Premium photography portfolio showcasing wedding,
                events and cinematic photography with elegant
                UI and smooth animations.
              </p>

              <div className="portfolio-stack">
                <span>React.js</span>
                <span>CSS3</span>
                <span>Framer Motion</span>
                <span>Modern UI</span>
              </div>

              <a
                href="https://onair-photography.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="portfolio-button"
              >
                Visit Website →
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS */}

      <section
        id="featured-projects"
        className="portfolio-projects"
      >
        <div
          className="portfolio-projects-header"
          data-aos="fade-down"
        >
          <span>MY WORK</span>

          <h2>Featured Projects</h2>

          <p>
            A collection of professional websites designed and developed
            using React.js with modern UI, responsive layouts, clean code
            architecture, and interactive user experiences.
          </p>
        </div>

        <div className="portfolio-projects-grid">

          {/* IDEELIT */}

          <div
            className="portfolio-project-card"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="portfolio-project-shine"></div>

            <div className="portfolio-project-count">
              01
            </div>

            <div className="portfolio-project-content">

              <div className="portfolio-project-label">
                Corporate Website
              </div>

              <h3>Ideelit.com</h3>

              <p>
                Modern business website built using React.js featuring
                responsive layouts, reusable components, animations and
                premium UI design.
              </p>

              <div className="portfolio-project-tech">
                <span>React.js</span>
                <span>CSS3</span>
                <span>Responsive</span>
              </div>

              <a
                href="https://ideelit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-button"
              >
                Visit Website →
              </a>

            </div>
          </div>

          {/* 123LEGAL */}

          <div
            className="portfolio-project-card"
            data-aos="zoom-in-up"
            data-aos-delay="250"
          >
            <div className="portfolio-project-shine"></div>

            <div className="portfolio-project-count">
              02
            </div>

            <div className="portfolio-project-content">

              <div className="portfolio-project-label">
                Legal Platform
              </div>

              <h3>123Legal.in</h3>

              <p>
                Professional legal platform with article management,
                PDF viewing, responsive UI and scalable frontend
                architecture.
              </p>

              <div className="portfolio-project-tech">
                <span>React.js</span>
                <span>CSS</span>
                <span>UI Design</span>
              </div>

              <a
                href="https://123legal.in"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-button"
              >
                Visit Website →
              </a>

            </div>
          </div>

          {/* 123TUTE */}

          <div
            className="portfolio-project-card"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <div className="portfolio-project-shine"></div>

            <div className="portfolio-project-count">
              03
            </div>

            <div className="portfolio-project-content">

              <div className="portfolio-project-label">
                Education Platform
              </div>

              <h3>123Tute.com</h3>

              <p>
                Educational platform with reusable React components,
                responsive design and clean user interface focused on
                learning.
              </p>

              <div className="portfolio-project-tech">
                <span>React.js</span>
                <span>Animations</span>
                <span>Frontend</span>
              </div>

              <a
                href="https://123tute.com"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-button"
              >
                Visit Website →
              </a>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;