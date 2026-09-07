import React from "react";
import "../App.css";

import ContactVector from "../images/aravind_img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section contact"
      data-aos="fade-up"
    >
      <div className="contact-grid">

        <div
          className="contact-vector"
          data-aos="fade-up"
        >
          <img
            src={ContactVector}
            alt="Contact vector"
          />
        </div>

        <div className="contact-text">

          <h2>Contact Me</h2>

          <p>
            Open to full-time opportunities in UI/UX Design and Frontend
            Development. For collaboration or hiring inquiries, feel free
            to reach out anytime.
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
  );
};

export default Contact;