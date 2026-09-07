import React from "react";
import "../App.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section experience"
      data-aos="fade-up"
    >
      <h2>Experience</h2>

      <div className="timeline">

        {/* EXPERIENCE 01 */}

        <div
          className="timeline-item"
          data-aos="fade-up"
        >
          <h3>Web Designer & Frontend Developer</h3>

          <p>
            <b>Ideelit Software LLP</b> —{" "}
            <b>October 2023 - June 2026</b>
            <br />
            <br />

            Leading the <b>Frontend & Web Design team</b> and delivering
            modern, scalable, and visually refined interfaces using
            <b> React.js, CSS, Figma, Photoshop.</b>

            <br />
            <br />

            <b>Key Contributions:</b>
            <br />

            • Designed and developed complete UI systems for{" "}
            <b>Ideelit.com</b>, improving brand visibility.
            <br />

            • Built <b>modular, reusable React components</b> used across
            multiple company projects.
            <br />

            • Implemented <b>responsive layouts</b> that improved mobile
            usability by 40%.
            <br />

            • Created <b>interactive animations</b> using AOS, CSS
            transitions, and custom effects.
            <br />

            • Mentored junior designers/developers and conducted{" "}
            <b>UI/UX review sessions</b>.
            <br />

            • Converted Figma & Photoshop mockups into pixel-perfect
            production UI.
            <br />
            <br />
          </p>
        </div>

        {/* EXPERIENCE 02 */}

        <div
          className="timeline-item"
          data-aos="fade-up"
        >
          <div className="timeline-in">

            <div>
              <h3>Web Designer Trainee</h3>

              <p>
                <b>ARM Infotech</b> —{" "}
                <b>January 2023 - June 2023</b>

                <br />
                <br />

                Started my career as a{" "}
                <b>Web Designer Trainee</b>, learning the foundations of
                UI/UX, web design workflows, wireframing, and responsive
                page structures.

                <br />
                <br />

                <b>Responsibilities:</b>
                <br />

                • Designed over <b>8 complete website mockups</b> in
                Photoshop.
                <br />

                • Created clean, responsive HTML/CSS templates.
                <br />

                • Learned user-centric design, layout balance, typography,
                and color theory.
                <br />

                • Collaborated with developers to convert designs into
                functional pages.
                <br />

                • Implemented basic animations, hover effects, and layout
                enhancements.

                <br />
                <br />

                <b>Skills Gained:</b>
                <br />

                • Strong understanding of UI/UX principles.
                <br />

                • Improved design-to-development conversion workflow.
                <br />

                • Foundation in responsive design, grid systems, and
                branding consistency.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;