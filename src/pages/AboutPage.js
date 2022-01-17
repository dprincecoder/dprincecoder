import React from "react";
import Tittle from "../components/Tittle";
import ImageSection from "../components/ImageSection";
import SkillsSetion from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import Story from "../components/story";

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={"About Me"} span={"About me"} />
			<ImageSection />
			<div className="story">
				<Tittle title={"My story"} span={"my Story"} />
				<Story />
			</div>
			<Tittle title={"My Skills"} span={"My Skills"} />
			<div className="skil-container">
				<SkillsSetion skill={"Javascript"} progress={"90%"} width={"90%"} />
				<SkillsSetion skill={"React Js"} progress={"80%"} width={"80%"} />
				<SkillsSetion skill={"Node Js"} progress={"70%"} width={"70%"} />
				<SkillsSetion skill={"Express Js"} progress={"65%"} width={"65%"} />
				<SkillsSetion skill={"Github"} progress={"85%"} width={"85%"} />
				<SkillsSetion skill={"Html"} progress={"98%"} width={"98%"} />
				<SkillsSetion skill={"Css"} progress={"90%"} width={"90%"} />
				<SkillsSetion skill={"Git Bash"} progress={"58%"} width={"58%"} />
				<SkillsSetion
					skill={"Version Control"}
					progress={"70%"}
					width={"70%"}
				/>
				<SkillsSetion skill={"Python"} progress={"50%"} width={"50%"} />
				<SkillsSetion skill={"Scss"} progress={"78%"} width={"78%"} />
				<SkillsSetion skill={"Firebase"} progress={"80%"} width={"80%"} />
				<SkillsSetion skill={"MongoDB"} progress={"60%"} width={"60%"} />
			</div>
			<div className="services-container">
				<Tittle title={"Services"} span={"Services"} />
				<ServicesSection />
			</div>
		</div>
	);
}

export default AboutPage;
