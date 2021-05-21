import React from 'react';

function ContactItem({icon, text1, text2, title}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt="" />
                <div className="right-items">
                     <h6>{title}</h6>
                     <a href="https://azubuike070@gmail.com"><p>{text1}</p></a>
                      <a href="https://dprincemedia@outlook.com"><p>{text2}</p></a>
                </div>
            </div>
           
       </div> 
    )
}

export default ContactItem;
