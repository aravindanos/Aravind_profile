import { useEffect, useRef } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import adimage from "../images/ad.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
 

  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = imageRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    const card = imageRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
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

  const heroCards = [
    {
      id: "about",
      title: "About Me",
      content:
        "Web Designer & Frontend Developer with 3+ years of experience.",
    },
    {
      id: "skills",
      title: "Skills",
      content:
        "React.js, HTML5, CSS, Figma, Photoshop, Premiere Pro",
    },
    {
      id: "experience",
      title: "Experience",
      content:
        "Current role at Ideelit Software LLP as Web Designer & Frontend Developer (Oct 2023 – Jun 2026)",
    },
    {
      id: "education",
      title: "Education",
      content:
        "Academic background: MCA from K.L.N. College (2022) and BCA from S. Vellaichamy Nadar College (2020)",
    },
  ];

  return (
    <section className="hero" id="home">
      <div className="cursor-glow" ref={glowRef}></div>

      <div className="hero-overlay"></div>

      <div className="hero-inner" data-aos="fade-up">
        <div className="hero-content">
          <h1>O.S. Aravindan</h1>

          <h2>Web Designer & Frontend Developer</h2>

          <p>
            I am a highly motivated and results-driven Frontend Developer and
            Web Designer seeking a challenging opportunity to leverage my
            skills and experience in a dynamic tech environment.
          </p>

          <div className="button-top">
            <a className="cta" href="#projects">
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
            <div
              key={card.id}
              className={`info-card card-${card.id}`}
            >
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;