import React from "react";
import "../App.css";

const Education = () => {
  return (
    <section
      id="education"
      className="section education"
      data-aos="fade-up"
    >
      <h2 className="section-title">
        Education
      </h2>

      <div className="edu-cards">

        <div
          className="edu-card"
          data-aos="fade-up"
        >
          <h3>
            MCA — K.L.N. College of Engineering
          </h3>

          <p>
            Graduated with 89% in 2022 | Core subjects:
            Software Development, Data Structures, and UX Research.
          </p>
        </div>

        <div
          className="edu-card"
          data-aos="fade-up"
        >
          <h3>
            BCA — S. Vellaichamy Nadar College
          </h3>

          <p>
            Graduated with 70% in 2020 | Focused on programming
            and IT fundamentals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;