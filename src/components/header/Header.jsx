import React from "react";
import Connects from "./Connects";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Azubuike Prince</h1>
        <h5 className="text-light anim">Frontend Developer</h5>
        <small className="text-light">Nigerian </small>
        <CTA />
        <Connects />

        <div className="me">
          <img src="assets/myphoto.png" alt="me" className="me-img" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
