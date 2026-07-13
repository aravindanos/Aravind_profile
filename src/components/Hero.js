import React, { useEffect, useRef, useState  } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";  
import adimage from  "../images/ad.png";
import ContactVector from  "../images/aravind_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
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

   const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <> 
      <section className="hero" id="home">
          <div className="cursor-glow" ref={glowRef}></div>
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
<div className="hero-wrapper">
  <img
    ref={imageRef}
    src={adimage}
    alt="Designer vector"
    className="hero-image"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  />
 
  <span className="floating floating-1"></span>
  <span className="floating floating-2"></span>
  <span className="floating floating-3"></span>
 
  <span className="vector square"></span>
  <span className="vector triangle"></span>
  <span className="vector ring"></span>
  <span className="vector dot"></span>
  <div className="orbit"></div>
</div>
      {heroCards.map((card) => (
        <div key={card.id} className={`info-card card-${card.id}`}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
        </div>
      </section>
 
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
        <span> Frontend Developer</span>
        <br />
        & Web Designer
      </h2>

      <div className="profile-heading-line"></div>

      <p>
        I'm <strong>Aravindan OS</strong>, a passionate Frontend Developer
        with more than <strong>3+ years of experience</strong> building
        modern, responsive and user-friendly web applications using
        React.js, HTML5 and CSS3.
      </p>

      <p>
        My goal is to transform ideas into beautiful digital experiences.
        I enjoy creating interfaces that combine elegant visuals,
        smooth animations and clean code architecture.
      </p>

      <p>
        Along with development, I love UI/UX design,
        Photoshop, Figma, video editing and creative storytelling,
        helping me build products that are both functional and visually engaging.
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

          <h2>React.js</h2>
          <span>Developer</span>

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
 
    <section id="experience" className="section experience" data-aos="fade-up">
  <h2>Experience</h2>
  <div className="timeline">
    <div className="timeline-item" data-aos="fade-up">
      <h3>Web Designer & Frontend Developer</h3>
      <p>
        <b>Ideelit Software LLP</b> — <b>October 2023 - June 2026</b><br /><br />
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
</div>
</div>
  </div>
</section>

<section id="projects" className="portfolio-showcase">

    <div className="portfolio-header">

        <span>Portfolio</span>

        <h2>Featured Personal Projects</h2>

        <p>
            Two professional websites completely designed and developed by me
            using React.js, modern UI, responsive layouts and clean frontend architecture.
        </p>

    </div>

    <div className="portfolio-grid">

        <div className="portfolio-card portfolio-trust">

            <div className="portfolio-light"></div>

            <div className="portfolio-index">
                01
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
                02
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


 <section id="projects" className="portfolio-projects">

  <div className="portfolio-projects-header" data-aos="fade-down">
    <span>MY WORK</span>
    <h2>Featured Projects</h2>
    <p>
      A collection of professional websites designed and developed using
      React.js with modern UI, responsive layouts, clean code architecture,
      and interactive user experiences.
    </p>
  </div>

  <div className="portfolio-projects-grid">

    <div
      className="portfolio-project-card"
      data-aos="zoom-in-up"
      data-aos-delay="100"
    >
      <div className="portfolio-project-shine"></div>

      <div className="portfolio-project-count">01</div>

      <div className="portfolio-project-content">

        <div className="portfolio-project-label">
          Corporate Website
        </div>

        <h3>Ideelit.com</h3>

        <p>
          Modern business website built using React.js featuring responsive
          layouts, reusable components, animations and premium UI design.
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

    <div
      className="portfolio-project-card"
      data-aos="zoom-in-up"
      data-aos-delay="250"
    >
      <div className="portfolio-project-shine"></div>

      <div className="portfolio-project-count">02</div>

      <div className="portfolio-project-content">

        <div className="portfolio-project-label">
          Legal Platform
        </div>

        <h3>123Legal.in</h3>

        <p>
          Professional legal platform with article management, PDF viewing,
          responsive UI and scalable frontend architecture.
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

    <div
      className="portfolio-project-card"
      data-aos="zoom-in-up"
      data-aos-delay="400"
    >
      <div className="portfolio-project-shine"></div>

      <div className="portfolio-project-count">03</div>

      <div className="portfolio-project-content">

        <div className="portfolio-project-label">
          Education Platform
        </div>

        <h3>123Tute.com</h3>

        <p>
          Educational platform with reusable React components, responsive
          design and clean user interface focused on learning.
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
       <p>© 2026 All Rights Reserved. Designed & Developed by O.S. Aravindan</p>
      </footer>
    </>
  );
};

export default Hero;
