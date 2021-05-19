import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function homePage() {
    return (
    
        <div className="homePage">
            <h1 className="fancy">PRINCE AZUBUIKE</h1>
            <header className="hero">
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
                <div className="icons">
                    <a href="https://web.facebook.com/prince.azubuike.5621" className="icon-holder" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fa"/>
                    </a>
                    <a href="https://github.com/Dprince-corporation" className="icon-holder" >
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
        </div>
      
    )
}

export default homePage;