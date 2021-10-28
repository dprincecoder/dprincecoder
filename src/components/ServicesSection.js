import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function ServicesSection() {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="ServiceSection">
			<p className="text">
				Take a look at the service i have in stock and choose the one i can
				render to you.
			</p>
			<div className="service-container">
				<div className="service" data-aos="fade-up">
					<div className="service-content">
						<h5 className="s-title">Web Design</h5>
						<p className="s-text">
							Both on the front end of your company i can render my work
							perfectly.
						</p>
					</div>
				</div>
				<div className="service2" data-aos="fade-up">
					<div className="service-content">
						<h5 className="s-title2">Mobile Development</h5>
						<p className="s-text2">
							Except from the web alone, i am good to handle Mobile development
							as well.
						</p>
					</div>
				</div>
				<div className="service3" data-aos="fade-up">
					<div className="service-content">
						<h5 className="s-title3">OS Development</h5>
						<p className="s-text3">
							They said OS is a very task journey to undergo as a programmer,
							but i want to take that journey to enhance myself.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesSection;
