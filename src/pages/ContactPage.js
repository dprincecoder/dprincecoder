import React from 'react';
import Tittle from '../components/Tittle';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.png';
import email from '../img/email.jpeg';
import location from '../img/location.png';



function ContactPage() {
    return (
        <div className="fullpage">
            <div className="tithe">
                <Tittle title={'CONTACT'} span={'CONTACT'} />
            </div>
            <div className="contactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904.247451448899!2d7.017474116989206!3d4.759257878513678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cbec8298e313%3A0xf1f577839d1b2bd!2sPort%20Harcourt%20Town%2C%20Old%20Port%20Harcourt%20Twp%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1615066703294!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowfullScreen="iframe" loading="fast" title="map"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+234 7064304592'} title={'Phone'} />
                    <ContactItem icon={email} text1={'azubuike070@gmail.com'} text2={'dprincemedia@outlook.com'} title={'Email'} />                   
                    <ContactItem icon={location} text1={' 28 Tourist beach, Portharcout'}  text2={'Rivers State, Nigeria'} title={'Location'} />
                </div>
            </div>
            <Tittle title={'MASSAGE ME'} span={'MASSAGE ME'} />
            <div className="form-body">
                <h3 className="comon">Want to hire me? then leave a massage, i will be in touch</h3>
                
                <form action="submit" className="form" netlify>
                    <input type="text" className="name" placeholder="Enter name"/>
                    <input type="text" className="name" placeholder="Enter email"/>
                    <input type="text" className="name massage" placeholder="Leave a massage"/>
                 <button type="submit" className="btn-n">SEND</button>
                </form>
           </div>
        </div>
    )
}

export default ContactPage;