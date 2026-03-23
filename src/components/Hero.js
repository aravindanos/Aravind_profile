import React, { useEffect, useRef, useState  } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";  
import adimage from  "../images/ad.png";
import advideo from  "../images/ad_typing.mp4";
import ContactVector from  "../images/aravind_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faClock,
  faCubes,
  faCode,
  faPaintBrush,
  faVideo, 
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp 
} from "@fortawesome/free-solid-svg-icons"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const heroCards = [
  {
    id: "about",
    title: "About Me",
    content: "Frontend Developer & Web Designer with 3+ years of experience.",
  },
  {
    id: "skills",
    title: "Skills",
    content: "React.js, HTML5, CSS, Figma, Photoshop, Premiere Pro",
  },
  {
    id: "experience",
    title: "Experience",
    content: "Current role at Ideelit Software LLP as Frontend Developer & Web Design Head (Oct 2023 – Jan 2026)",
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
            <div className="button-top">
<a class="cta" href="#projects">
  <span>Explore My Projects</span> 
</a> 
</div>
          </div>
          <div className="hero-image-box" data-aos="fade-up">
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
        <div className="about-left" data-aos="fade-up">
          <h2 className="about-title">About Me</h2>
<p>
  I’m <b>Aravindan OS</b>, a passionate <b>Frontend Developer and Web Designer</b> with over <b>3+ years of professional experience</b> in crafting responsive, visually engaging, and user-friendly web applications. Currently working at <b>Ideelit Software LLP</b>, I specialize in <b>React.js</b>, <b>CSS</b>, and <b>Photoshop</b>, focusing on building dynamic interfaces that combine creativity with functionality.
</p>

<p>
  I began my career as a <b>Web Design Trainee</b> at <b>ARM Infotech</b>, where I gained hands-on experience in <b>UI/UX design</b> and web structuring. Since then, I’ve developed and designed multiple full-fledged websites such as <b>Ideelit.com</b>, <b>123Legal.in</b>, <b>123Boek.com</b>, and <b>123Tute.com</b>, blending clean design principles with performance-driven development.
</p>

<p>
  Beyond web development, I’m a <b>creative thinker</b> with a strong interest in <b>video editing, filmmaking, and visual storytelling</b> — skills that inspire my design approach. My work reflects a mix of <b>technical precision</b> and <b>artistic passion</b>, driven by a desire to deliver seamless digital experiences that stand out.
</p>
        </div>
 
        <div className="about-right" data-aos="fade-up">
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

          <div className="about-card" data-aos="fade-up" data-aos-delay="200">
            <h4> Skills </h4>
            <ul className="skills-list">
              <li>
                <FontAwesomeIcon icon={faCode} /> React.js
              </li>
                <li>
                <FontAwesomeIcon icon={faCode} /> HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faPaintBrush} /> CSS
              </li>
              <li>
                <FontAwesomeIcon icon={faVideo} /> Premiere Pro
              </li>
              <li>
                <FontAwesomeIcon icon={faPaintBrush} /> Photoshop
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
    <div className="timeline-item" data-aos="fade-up">
      <h3>Web Designer & Frontend Developer</h3>
      <p>
        <b>Ideelit Software LLP</b> — <b>October 2023 - January 2026</b><br /><br />
        Leading the <b>Frontend & Web Design team</b> and delivering modern,
        scalable, and visually refined interfaces using 
        <b> React.js, CSS, Figma, Photoshop.</b>
        <br /><br />
        <b>Key Contributions:</b><br />
        • Designed and developed complete UI systems for <b>Ideelit.com</b>, improving brand visibility.<br />
        • Built <b>modular, reusable React components</b> used across multiple company projects.<br />
        • Implemented <b>responsive layouts</b> that improved mobile usability by 40%.<br />
        • Created <b>interactive animations</b> using AOS, CSS transitions, and custom effects.<br />
        • Mentored junior designers/developers and conducted <b>UI/UX review sessions</b>.<br />
        • Converted Figma & Photoshop mockups into pixel-perfect production UI.<br /><br />
      </p>
    </div>

    <div className="timeline-item" data-aos="fade-up">
      <div className='timeline-in'>
        <div>
      <h3>Web Designer Trainee</h3>
      <p>
        <b>ARM Infotech</b> — <b>January 2023 - July 2023</b><br /><br />
        Started my career as a <b>Web Designer Trainee</b>, learning the foundations of
        UI/UX, web design workflows, wireframing, and responsive page structures.
        <br /><br />
        <b>Responsibilities:</b><br />
        • Designed over <b>8 complete website mockups</b> in Photoshop.<br />
        • Created clean, responsive HTML/CSS templates.<br />
        • Learned user-centric design, layout balance, typography, and color theory.<br />
        • Collaborated with developers to convert designs into functional pages.<br />
        • Implemented basic animations, hover effects, and layout enhancements.<br /><br />
        <b>Skills Gained:</b><br />
        • Strong understanding of UI/UX principles.<br />
        • Improved design-to-development conversion workflow.<br />
        • Foundation in responsive design, grid systems, and branding consistency.
      </p>
    </div>
     <video
  ref={imageRef}
  className="hero-video"
  src={advideo}
  autoPlay
  loop
  muted
  playsInline 
/>
</div>
</div>
  </div>
</section>
 
    <section id="projects" className="section projects" data-aos="fade-up">
  <h2 className="section-title" data-aos="fade-down">Featured Projects</h2>
  <div className="projects-grid">
    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
      <div className="project-card-inner">
        <h3>
          <a href="https://ideelit.com" target="_blank" rel="noopener noreferrer">
            Ideelit.com
          </a>
        </h3>
        <p>
          Full React.js website featuring layered animations, a clean layout, and a responsive experience.
        </p>
      </div>
    </div>

    <div className="project-card" data-aos="fade-up" data-aos-delay="200">
      <div className="project-card-inner">
        <h3>
          <a href="https://123legal.in" target="_blank" rel="noopener noreferrer">
            123Legal.in
          </a>
        </h3>
        <p>
          End-to-end web platform with integrated PDF viewer and article system, styled from Photoshop mockups.
        </p>
      </div>
    </div> 

    <div className="project-card" data-aos="fade-up" data-aos-delay="400">
      <div className="project-card-inner">
        <h3>
          <a href="https://123tute.com" target="_blank" rel="noopener noreferrer">
            123Tute.com
          </a>
        </h3>
        <p>
          Educational React layout built with reusable components and scalable structure.
        </p>
      </div>
    </div>
  </div>
</section>

 
      <section id="education" className="section education" data-aos="fade-up">
        <h2 className="section-title">Education</h2>
        <div className="edu-cards">
          <div className="edu-card" data-aos="fade-up">
            <h3>MCA — K.L.N. College of Engineering</h3>
            <p>
              Graduated with 89% in 2022 | Core subjects: Software Development,
              Data Structures, and UX Research.
            </p>
          </div>
          <div className="edu-card" data-aos="fade-up">
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
            <div className="contact-vector" data-aos="fade-up">
            <img src={ContactVector} alt="Contact vector" />
          </div>
          <div className="contact-text">
           <h2>Contact Me</h2>
<p>
  Open to full-time opportunities in UI/UX Design and Frontend Development. 
  For collaboration or hiring inquiries, feel free to reach out anytime.
</p>

<ul className="contact-list">
  <li>
    <FontAwesomeIcon icon={faLocationDot} />
    <span>Madurai, Tamil Nadu</span>
  </li>

  <li>
    <FontAwesomeIcon icon={faPhone} />
    <span>+91 88384 04104</span>
  </li>

  <li>
    <FontAwesomeIcon icon={faEnvelope} />
    <a href="mailto:osaravindan258@gmail.com">
      osaravindan258@gmail.com
    </a>
  </li>
</ul>
          </div>
        </div>
      </section> 
{showTopBtn && (
  <div className="scroll-top" onClick={scrollToTop}>
    <FontAwesomeIcon icon={faArrowUp} />
  </div>
)}
      <footer className="footer">
        <p>© 2026 O.S. Aravindan | Designed & Developed with React.js</p>
      </footer>
    </>
  );
};

export default Hero;
