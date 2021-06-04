import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typical from 'react-typical';
import drible from '../img/Dribbble_logo.png';
import fblogo from '../img/fb-logo.png';
import freecode from '../img/freecode.png';
import iglogo from '../img/ig.jpg';
import twitter from '../img/twitter-logo-4.png';
import udemy from '../img/udemy-2-logo.png';
import youtbe from '../img/youtube.png';


function homePage() {
    return (
    
        <div className="homePage">
            <h1 className="fancy">PRINCE AZUBUIKE</h1>
              <div className="typical">
                <Typical loop={Infinity} wrapper="b"
                    steps={[
                        "Front-End developer for now 😊 💫💖",
                        1000,
                        "Full-Stack developer my goal 🚀 🎀🎇",
                        1000,
                        "Mobile Developer as to enhance my skills 📱📲💻", 
                        1000,
                        "Embbeded System developer my end point🚦🌌✨",
                        1000
                    ]}
                />
                </div>
            <header className="hero">
                <div className="welcome-note">
                       <h1 className="hero-text">
                    Hi 
                     Welcome
                </h1>
                <p className="h-sub-text">
                    To my portfolio, am a full stack web developer and mobile developer, basically <b>MERN STACK</b>.
                    Am glad you are here TAKE A TOUR.
                </p>
                <div className="story">
                    <h4>learning new things, new technology is my utermost desire, i love to explore the mouintains at my free time, am open to work. contact me via social media below</h4>
                </div>
             </div>
                <div className="icons">
                    <a href="https://web.facebook.com/prince.azubuike.5621" className="icon-holder" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fa"/>
                    </a>
                    <a href="https://github.com/dprincecoder" className="icon-holder" >
                        <FontAwesomeIcon icon={faGithub} className="icon gt"/>
                    </a>
                    <a href="https://wa.link/r039kt" className="icon-holder" >
                        <FontAwesomeIcon icon={faWhatsapp} className="icon wa"/>
                    </a>
                    <a href="https://www.instagram.com/dprince_boi"  className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon sa"/>
                    </a>
                    <a href="https://twitter.com/DPrinceboi" className="icon-holder" >
                        <FontAwesomeIcon icon={faTwitter} className="icon ba"/>
                    </a>
                </div>
            </header>
            <div className="community-head">
            <h4>Am greatful to be part of these community:</h4>
            <div className="community">
                <div className="slider-track animate">
                    <div className="slide">
                        <img className="community-img" src={drible} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={fblogo} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={freecode} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={iglogo} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={twitter} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={udemy} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={youtbe} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={drible} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={fblogo} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={freecode} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={iglogo} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={twitter} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={udemy} alt="community logos"/>
                    </div>
                    <div className="slide">
                        <img className="community-img" src={youtbe} alt="community logos"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
      
    )
}

export default homePage;
