import React from "react";
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";
import drible from "../img/Dribbble_logo.png";
import fblogo from "../img/fb-logo.png";
import freecode from "../img/freecode.png";
import iglogo from "../img/ig.jpg";
import twitter from "../img/twitter-logo-4.png";
import udemy from "../img/udemy-2-logo.png";
import youtbe from "../img/youtube.png";
import { Link } from "react-router-dom";

function homePage() {
	return (
		<div className="homePage">
			<h1 className="fancy">PRINCE AZUBUIKE</h1>
			<div className="typical">
				<Typical
					loop={Infinity}
					wrapper="b"
					steps={[
						"Front-End developer for now 😊 💫💖",
						1000,
						"Full-Stack developer my goal 🚀 🎀🎇",
						1000,
						"Mobile Developer as to enhance my skills 📱📲💻",
						1000,
						"Embbeded System developer my end point🚦🌌✨",
						1000,
					]}
				/>
			</div>
			<header className="hero">
				<div className="welcome-note">
					<h1 className="hero-text">Hi Welcome</h1>
					<p className="h-sub-text">
						I am a full stack web and mobile developer. My main stack is
						developing with <b> MERN.</b> Am glad you are here TAKE MY TOUR.
					</p>
					<div className="story">
						<h4>
							{" "}
							I spend my days learning new technologies and coding as it is my
							life. I also love to explore the mountains in my free time. I am
							available for full-time, part-time or contract work.{" "}
						</h4>
					</div>
				</div>
				<div className="icons">
					<a
						href="https://web.facebook.com/prince.azubuike.5621"
						className="icon-holder"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} className="icon fa" />
					</a>
					<a
						href="https://github.com/dprincecoder"
						className="icon-holder"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} className="icon gt" />
					</a>
					<a href="https://wa.link/r039kt" className="icon-holder">
						<FontAwesomeIcon icon={faWhatsapp} className="icon wa" />
					</a>
					<a
						href="https://www.instagram.com/dprince_boi"
						className="icon-holder"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} className="icon sa" />
					</a>
					<a
						href="https://twitter.com/DPrinceboi"
						className="icon-holder"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTwitter} className="icon ba" />
					</a>
					<a
						href="https://www.linkedin.com/in/prince-azubuike-9067a719a/"
						className="icon-holder"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} className="icon ln" />
					</a>
				</div>
				<div className="contact">
					<Link to="/contact">Contact Me</Link>
				</div>
			</header>
			<div className="community-head">
				<h4>Am greatful to be part of these community:</h4>
				<div className="community">
					<div className="slider-track animate">
						<div className="slide">
							<img
								className="community-img"
								src={drible}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={fblogo}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={freecode}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={iglogo}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={twitter}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={udemy}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={youtbe}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={drible}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={fblogo}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={freecode}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={iglogo}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={twitter}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={udemy}
								alt="community logos"
							/>
						</div>
						<div className="slide">
							<img
								className="community-img"
								src={youtbe}
								alt="community logos"
							/>
						</div>
					</div>
				</div>
                          <p className="cypress"> https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg </p>

			</div>
		</div>
	);
}

export default homePage;
