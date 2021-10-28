import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function ContactItem({ icon, text1, text2, title }) {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="ContactItem">
			<div className="contact" data-aos="fade-up">
				<img src={icon} alt="" />
				<div className="right-items">
					<h6>{title}</h6>
					<p>{text1}</p>
					<p>{text2}</p>
				</div>
			</div>
		</div>
	);
}

export default ContactItem;
