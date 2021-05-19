import React from 'react';
import about from '../img/prince4.png';
import MyCv from '../mycv.pdf'


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4 className="about-text">I am <span> Prince Azubuike </span></h4>
                <p> Welcome to my portfolio, am a full stack web developer. A born indigene of Umuahia town, Abia State, Nigeria. </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nick Name</p>
                        <p>Date of Birth</p>
                        <p>Languages</p>
                        <p>Academics</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Prince Okezie, Azubuike</p>
                        <p>: D-Prince</p>
                        <p>: 28-August-1997</p>
                        <p>: Native Igbo and English</p>
                        <p>: Bsc, Waec and Fslc</p>
                        <p>: Portharcout, Rivers State, Nigeria</p>
                    </div>
                </div>
                <a href={MyCv} download="mycv.pdf" className="btn">Download CV</a>
          </div>
        </div>
    )
}

export default ImageSection;