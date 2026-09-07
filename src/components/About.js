import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="profile-showcase">
      <div className="profile-blob profile-blob-one"></div>
      <div className="profile-blob profile-blob-two"></div>

      <div className="profile-layout">

        {/* LEFT CONTENT */}

        <div
          className="profile-content"
          data-aos="fade-right"
        >
          <span className="profile-tag">
            ABOUT ME
          </span>

          <h2 className="profile-heading">
            Creative
            <span> Web Designer</span>
            <br />
            & Frontend Developer
          </h2>

          <div className="profile-heading-line"></div>

          <p>
            I'm <strong>Aravindan OS</strong>, a passionate Frontend Developer
            with more than <strong>3+ years of experience</strong> building
            modern, responsive and user-friendly web applications using
            React.js, HTML5 and CSS.
          </p>

          <p>
            My goal is to transform ideas into beautiful digital experiences.
            I enjoy creating interfaces that combine elegant visuals,
            smooth animations and clean code architecture.
          </p>

          <p>
            Along with development, I love UI/UX design,
            Photoshop, Figma, video editing and creative storytelling,
            helping me build products that are both functional and visually
            engaging.
          </p>

          <div className="profile-stats">

            <div className="profile-stat-card">
              <h3>3+</h3>
              <span>Years Experience</span>
            </div>

            <div className="profile-stat-card">
              <h3>20+</h3>
              <span>Projects</span>
            </div>

            <div className="profile-stat-card">
              <h3>100%</h3>
              <span>Responsive UI</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="profile-visual"
          data-aos="fade-left"
        >
          <div className="skill-orbit">

            <div className="orbit-ring"></div>
            <div className="orbit-ring orbit-ring-two"></div>

            <div className="orbit-center">
              <h2>Web</h2>
              <span>Designer</span>
            </div>

            <div className="orbit-item orbit-react">
              React.js
            </div>

            <div className="orbit-item orbit-html">
              HTML5
            </div>

            <div className="orbit-item orbit-css">
              CSS3
            </div>

            <div className="orbit-item orbit-figma">
              Figma
            </div>

            <div className="orbit-item orbit-photo">
              Photoshop
            </div>

            <div className="orbit-item orbit-video">
              Premiere
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;