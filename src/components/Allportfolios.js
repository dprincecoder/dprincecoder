import port1 from "../img/Screenshot_2021-09-24-15-26-44.png";
import port2 from "../img/port2.jpg";
import port3 from "../img/batery-bg.jpeg";
import port4 from "../img/rest-app.jpg";
import port6 from "../img/facebook-clone.png";
import port7 from "../img/transcriber.png";
import port8 from "../img/home-finder.png";

const portfolios = [
	{
		id: 1,
		category: "E-commerce",
		link: "https://ecommerce-web-fc5d7.web.app/",
		icon1: "Q",
		icon2: "C",
		image: port1,
		title: "E-commerce store",
		text: "My official e-commerce website",
		tools:
			"App built using React, React-hooks Redux, Redux-hooks, Redux-saga, firebase, graphql, firebase cloud database, and stripe payment api",
	},
	{
		id: 2,
		category: "Speech Recognition",
		link: "https://tinxvoiceschool.netlify.app/",
		icon1: "S",
		icon2: "R",
		image: port2,
		title: "TinX Voice App",
		text: "Hard stressful day at work?, don't worry Jarvis got you covered, speak to him now and have fun",
		tools: "App built using html5, css3, tailwind css, and javascript",
	},
	{
		id: 3,
		category: "Battery",
		link: "https://batterychecker.netlify.app/",
		icon1: "S",
		icon2: "I",
		image: port3,
		title: "Battery Checker",
		text: "A world full of smart devices, use battery checker to monitor battery life and degradation overtime",
		tools:
			"App built using Math algorithm, html5, css3, pure css and vanilla javascript",
	},
	{
		id: 4,
		category: "Rest API weather App",
		link: "https://github.com/Dprince-corporation/api-weather-website/tree/master",
		icon1: "T",
		icon2: "M",
		image: port4,
		title: "Rest API weather App",
		text: "Weather forecast has become part of human race, monitor and keep plans of weather ahead",
		tools:
			"App built using html5, css3, pure css and vanilla javascript and open weather api",
	},
	{
		id: 5,
		category: "Facebook clone",
		link1: "https://github.com/dprincecoder/facebook-clone-master-master",
		link: "https://facebook-clone-91cd5.web.app/",
		icon1: "F",
		icon2: "C",
		image: port6,
		title: "Facebook clone",
		text: "Prototype of the original facebook, but this my clone.",
		tools:
			"App built using React-hooks Redux, Redux-hooks, Redux-saga, firebase, graphql, firebase cloud database, and facebook SDK",
	},
	{
		id: 6,
		category: "language translation",
		link1: "https://github.com/dprincecoder/transcriber/tree/master",
		link: "https://transcriber056.web.app/",
		icon1: "F",
		icon2: "C",
		image: port7,
		title: "Transriber language translation",
		text: "Transcriber is a language translation app, use it to translate your language to english and other languages.",
		tools:
			"App built using React-hooks firebase, firebase cloud hostinf, and translate api",
	},
	{
		id: 7,
		category: "home finder landing page",
		link1: "https://github.com/dprincecoder/home-finder/tree/main",
		link: "https://home-finder-theta.vercel.app/",
		icon1: "F",
		icon2: "C",
		image: port8,
		title: "Home finder landing page",
		text: "Home finder is a real estate app, use it to find your dream home.",
		tools: "app built using nextjs rapid api, varcel hosting, chackra-ui",
	},
];

export default portfolios;
