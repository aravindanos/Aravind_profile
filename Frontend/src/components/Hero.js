import React, { useEffect, useRef } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";  
import adimage from  "../images/ad.png";
import ContactVector from  "../images/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faClock,
  faCubes,
  faCode,
  faPaintBrush,
  faVideo,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const heroCards = [
  {
    id: "about",
    title: "About Me",
    content: "Frontend Developer & Web Designer with 2.5+ years of experience.",
  },
  {
    id: "skills",
    title: "Skills",
    content: "React.js, CSS, Figma, Photoshop, Premiere Pro, UI/UX, HTML5",
  },
  {
    id: "experience",
    title: "Experience",
    content: "Current role at Ideelit Software LLP as Frontend Developer & Web Design Head (Oct 2023 – Present)",
  },
  {
    id: "education",
    title: "Education",
    content: "Academic background: MCA from K.L.N. College (2022) and BCA from S. Vellaichamy Nadar College (2020)",
  },
];

 const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = imageRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
 
    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = ((x - centerX) / 20);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = imageRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <> 
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-inner" data-aos="fade-up"> 
   

          <div className="hero-content">
            <h1>O.S. Aravindan</h1>
            <h2>Frontend Developer & Web Designer</h2>
            <p>
             I am a highly motivated and results-driven Frontend Developer and Web Designer seeking a
challenging opportunity to leverage my skills and experience in a dynamic tech environment.
            </p>
            <a href="#projects" className="hero-btn">
              View My Work
            </a>
          </div>
          <div className="hero-image-box" data-aos="zoom-in">
      <img
        ref={imageRef}
        src={adimage}
        alt="Designer vector"
        className="hero-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      {heroCards.map((card) => (
        <div key={card.id} className={`info-card card-${card.id}`}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
        </div>
      </section>
 
    <section id="about" className="section about" data-aos="fade-up">
      <div className="about-grid"> 
        <div className="about-left" data-aos="fade-right">
          <h2 className="about-title">About Me</h2>
       <p>
  I’m a <span className="highlight">Frontend Developer</span> &
  <span className="highlight"> Web Designer</span> with over <b>2.5 years</b> of
  experience crafting responsive, visually engaging, and user-focused web
  interfaces.
</p>
<p>
  My expertise lies in <b>React.js</b>, <b>CSS</b>, <b>HTML</b>, <b>Figma</b>, and
  <b> Adobe Photoshop</b>, blending creativity with functionality to design
  immersive digital experiences.
</p>
<p>
  I’m passionate about <b>film editing</b>, <b>visual storytelling</b>, and
  creating meaningful designs that connect emotionally with users. My approach
  is detail-driven, collaborative, and centered on continuous learning.
</p>

        </div>
 
        <div className="about-right" data-aos="fade-left">
          <div className="about-card">
            <h4> Strengths</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLightbulb} /> Creative visual thinker
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} /> Team collaboration
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} /> Quick learner & punctual
              </li>
              <li>
                <FontAwesomeIcon icon={faCubes} /> Strong problem-solving
              </li>
            </ul>
          </div>

          <div className="about-card" data-aos="fade-left" data-aos-delay="200">
            <h4> Skills </h4>
            <ul className="skills-list">
              <li>
                <FontAwesomeIcon icon={faCode} /> React.js
              </li>
              <li>
                <FontAwesomeIcon icon={faPaintBrush} /> CSS / SCSS
              </li>
              <li>
                <FontAwesomeIcon icon={faVideo} /> Premiere Pro
              </li>
              <li>
                <FontAwesomeIcon icon={faPaintBrush} /> Photoshop
              </li>
              
              <li>
                <FontAwesomeIcon icon={faPencilRuler} /> UI / UX
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} /> HTML5
              </li>
               <li>
                <FontAwesomeIcon icon={faPaintBrush} /> Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
 
      <section id="experience" className="section experience" data-aos="fade-up">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <h3>Frontend Developer & Web Design Head</h3>
            <h4>Ideelit Software LLP | Oct 2023 – Present</h4>
            <p>
              Developing responsive React.js websites and leading UI design. I
              ensure consistent branding, animation, and performance across
              digital platforms.
            </p>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <h3>Web Designer Trainee</h3>
            <h4>ARM Infotech | Jan 2023 – Jul 2023</h4>
            <p>
              Designed 8 website mockups using Photoshop, HTML, and CSS.
              Strengthened UX understanding through hands-on client projects.
            </p>
          </div>
        </div>
      </section>
 
      <section id="projects" className="section projects" data-aos="fade-up">
        <h2>Featured Projects</h2>
        <div className="project-showcase"> 
          <div className="project-list" data-aos="fade-left">
            <div className="project-card">
              <h3>Ideelit.com</h3>
              <p>
                Full React.js website with animation layers and clean
                responsive layout.
              </p>
            </div>
            <div className="project-card">
              <h3>123Legal.in</h3>
              <p>
                End-to-end web build with PDF viewer and article system. Styled
                from Photoshop mockups.
              </p>
            </div>
            <div className="project-card">
              <h3>123Boek.com</h3>
              <p>
                Business platform designed and coded using React.js with
                consistent brand UI.
              </p>
            </div>
            <div className="project-card">
              <h3>123Tute.com</h3>
              <p>
                Educational layout focused on reusable React components and
                scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      <section id="education" className="section education" data-aos="fade-up">
        <h2>Education</h2>
        <div className="edu-cards">
          <div className="edu-card" data-aos="flip-left">
            <h3>MCA — K.L.N. College of Engineering</h3>
            <p>
              Graduated with 89% in 2022 | Core subjects: Software Development,
              Data Structures, and UX Research.
            </p>
          </div>
          <div className="edu-card" data-aos="flip-right">
            <h3>BCA — S. Vellaichamy Nadar College</h3>
            <p>
              Graduated with 70% in 2020 | Focused on programming and IT
              fundamentals.
            </p>
          </div>
        </div>
      </section>
  
      <section id="contact" className="section contact" data-aos="fade-up">
        <div className="contact-grid">
            <div className="contact-vector" data-aos="zoom-in">
            <img src={ContactVector} alt="Contact vector" />
          </div>
          <div className="contact-text">
            <h2>Let’s Collaborate</h2>
            <p>
              I’m open to freelance and full-time opportunities in UI/UX design,
              frontend development, and creative digital experiences.
            </p>
            <ul>
              <li>📍 Madurai, Tamil Nadu</li>
              <li>📞 8838404104</li>
              <li>
                📧{" "}
                <a href="mailto:osaravindan258@gmail.com">
                  osaravindan258@gmail.com
                </a>
              </li>
            </ul>
          </div>
        
        </div>
      </section> 

      <footer className="footer">
        <p>© 2025 O.S. Aravindan | Designed & Developed with React.js</p>
      </footer>
    </>
  );
};

export default Hero;
