import webImg1 from "./img/webbuildr_1.svg";
import webImg2 from "./img/webbuildr_2.svg";
import webImg3 from "./img/webbuildr_3.svg";
import storyImg1 from "./img/storybook_1.png";
import storyImg2 from "./img/storybook_2.png";
import storyImg3 from "./img/storybook_3.png";
import storyImg4 from "./img/storybook_4.png";
import fbImg1 from "./img/fb_1.png";
import fbImg2 from "./img/fb_2.png";
import fbImg3 from "./img/fb_3.png";
import fbImg4 from "./img/fb_4.png";
import homeImg1 from "./img/home_1.png";
import homeImg2 from "./img/home_2.png";
import homeImg3 from "./img/home_3.png";
import homeImg4 from "./img/home_4.png";
import sketchitImg1 from "./img/sketch-1.png";
import sketchitImg2 from "./img/skech-it-2.jpg";
import sketchitImg3 from "./img/sketchit_3.jpg";
import lensImg1 from "./img/lens_1.png";
import lensImg2 from "./img/lens_2.png";
import lensImg3 from "./img/lens_3.png";
import lensImg4 from "./img/lens_4.png";

export const portfolioData = [
  {
    id: 1,
    title: "Storybook Social Chat",
    desc: "Storybook lets you connect with people wordwide, chat using voice message and share photos of memories.",
    credit: "Inspired By Me",
    code: "https://github.com/dprincecoder/storybook",
    live: "https://storybook-04.web.app/",
    img: [
      { id: 1, img: `${storyImg1}` },
      { id: 2, img: `${storyImg2}` },
      { id: 3, img: `${storyImg3}` },
      { id: 4, img: `${storyImg4}` },
    ],
    tags: [
      { id: 1, tag: "Reactjs" },
      { id: 2, tag: "firebase (BaaS)" },
      { id: 3, tag: "Material-UI" },
      { id: 4, tag: "Redux" },
      { id: 5, tag: "Redux Saga" },
      { id: 6, tag: "Css" },
    ],
  },
  {
    id: 2,
    title: "Facebook Clone",
    desc: "Facebook Prototype, with capabilites for instant messaging and online notice",
    credit: "Inspired by me",
    code: "https://github.com/dprincecoder/facebook-clone-master-master",
    live: "https://facebook-clone-91cd5.web.app/",
    img: [
      { id: 1, img: `${fbImg1}` },
      { id: 2, img: `${fbImg2}` },
      { id: 3, img: `${fbImg3}` },
      { id: 4, img: `${fbImg4}` },
    ],

    tags: [
      { id: 1, tag: "Reactjs" },
      { id: 2, tag: "firebase (BaaS)" },
      { id: 3, tag: "React Context" },
      { id: 4, tag: "Css" },
    ],
  },
  {
    id: 3,
    title: "Home Rental App",
    desc: "Need of a home? This webApp will help you find a home of your choice. Homes full of comfort and luxury. ",
    credit: "Inspired by me",
    code: "https://github.com/dprincecoder/home-finder",
    live: "https://home-finder-dprincecoder.vercel.app/",
    img: [
      { id: 1, img: `${homeImg1}` },
      { id: 2, img: `${homeImg2}` },
      { id: 3, img: `${homeImg3}` },
      { id: 4, img: `${homeImg4}` },
    ],

    tags: [
      { id: 1, tag: "Nextjs" },
      { id: 2, tag: "Rapid API" },
      { id: 3, tag: "React Context" },
      { id: 4, tag: "Styled Component" },
      { id: 5, tag: "Chakra UI" },
    ],
  },
  {
    id: 4,
    title: "SketchIt",
    desc: "A mini webApp for interface design, with capabilites to draw any shape on a plain web Document and export it as IMAGE. SketchIt come with free tools such as Triangle, Square, Circle and Freehand for additional drawing.",
    credit: "Inspired by me",
    code: "https://github.com/dprincecoder/drawing-board-like-figma",
    live: "https://dprincecoder.github.io/drawing-board-like-figma/",
    img: [
      { id: 1, img: `${sketchitImg1}` },
      { id: 2, img: `${sketchitImg2}` },
      { id: 3, img: `${sketchitImg3}` },
    ],

    tags: [
      { id: 1, tag: "JavaScript" },
      { id: 2, tag: "HTML:5" },
      { id: 3, tag: "Css:3" },
      { id: 4, tag: "HTML Canvas" },
    ],
  },
  {
    id: 5,
    title: "Photo-lens",
    desc: "A mini webApp for image manipulation, with interactive tools that lets you edit and add color efects to an image. With capabalities to export the edited image ",
    credit: "Inpired by me",
    code: "https://github.com/dprincecoder/editor-lens",
    live: "https://dprincecoder.github.io/editor-lens/",
    img: [
      { id: 1, img: `${lensImg1}` },
      { id: 2, img: `${lensImg2}` },
      { id: 3, img: `${lensImg3}` },
      { id: 4, img: `${lensImg4}` },
    ],

    tags: [
      { id: 1, tag: "JavaScript" },
      { id: 2, tag: "HTML:5" },
      { id: 3, tag: "Css:3" },
      { id: 4, tag: "HTML Canvas" },
    ],
  },
  {
    id: 6,
    title: "Webbuildr CMS",
    desc: "A content Management System for building websites, with capabilites to create and manage pages, posts, users and more. Quickly bootstrap your website with Webbuildr CMS using Drag and Drop interface.",
    credit: "Zuri Team Organization",
    code: "https://github.com/zuri-training/Team_14_CMS",
    live: "https://infinite-eyrie-30086.herokuapp.com/",
    img: [
      { id: 1, img: `${webImg1}` },
      { id: 2, img: `${webImg2}` },
      { id: 3, img: `${webImg3}` },
    ],

    tags: [
      { id: 1, tag: "JavaScript" },
      { id: 2, tag: "HTML:5" },
      { id: 3, tag: "Css:3" },
      { id: 4, tag: "API" },
      { id: 5, tag: "Python (backend)" },
    ],
  },
];
