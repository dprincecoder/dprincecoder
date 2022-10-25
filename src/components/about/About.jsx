import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <div className="about-img-bg">
              <img src="assets/photo-bd.jpg" alt="me" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            My Professional Experience, includes bringing the{" "}
            <strong>Wireframes</strong> of the <strong>UI/UX Designer</strong>{" "}
            to Life through my gained skillSet. As well as collaborating with
            the <strong>Backend Team</strong> to create a stellar finished
            Product.
            <br />I have keen into being <strong>Customer</strong> centric, I
            have proven to be time cautious to <strong>Customers</strong> demand
            and project target. I would love to work in a{" "}
            <strong>Company</strong>, where i can join a team of elite
            developers to release the <strong>potential passion</strong> and{" "}
            <strong>problem solvilng skills</strong> in me, and help make the
            word a better place.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
