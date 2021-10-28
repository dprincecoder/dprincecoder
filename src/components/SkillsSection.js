import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function SkillsSetion({ skill, progress, width }) {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="SkillsSetion" data-aos="fade-up">
			<div className="skill-container">
				<h5 className="skill-title">{skill}</h5>
				<div className="skill-bar">
					<p className="skill-text">{progress}</p>
					<div className="skill-progress">
						<div className="progress">
							<div className="inner-progress" style={{ width }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsSetion;
