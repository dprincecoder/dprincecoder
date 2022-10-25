import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>what I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>SEO OPTIMIZATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>On-page SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Off-page SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Audit</p>
            </li>
          </ul>
        </article>
        {/* end of seo */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert PSD, Figma to website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reactjs web development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Page</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug Fixes</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service__head">
            <h3>TEMPLATE DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Agency website Template</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML5 Landing Page template</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Post template</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
