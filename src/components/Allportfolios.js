import port1 from '../img/port1.jpg';
import port2 from '../img/port2.jpg';
import port3 from '../img/batery-bg.jpeg';
import port4 from '../img/rest-app.jpg';
import port6 from '../img/port6.jpeg';

const portfolios = [
    {
        id: 1,
        category: 'TinX Quiz',
        link: 'https://github.com/Dprince-corporation/TinX-jamb-quiz/tree/master',
        icon1: 'Q',
        icon2: 'C',
        image: port1,
        title: 'TinX Quiz Challenge',
        text: 'Challenge your self to a brain text'
    },
    {
        id: 2,
        category: 'Speech Recognition',
        link: 'https://tinxvoiceschool.netlify.app/',
        icon1: 'S',
        icon2: 'R',
        image: port2,
        title: 'TinX Voice App',
        text: "Hard stressful day at work?, don't worry Jarvis got you covered, speak to him now and have fun"
    },
    {
        id: 3,
        category: 'Battery',
        link: 'https://batterychecker.netlify.app/',
        icon1: 'S',
        icon2: 'I',
        image: port3,
        title: 'Battery Checker',
        text: 'A world full of smart devices, use battery checker to monitor battery life and degradation overtime'
    },
    {
        id: 4,
        category: 'Rest API weather App',
        link: 'https://github.com/Dprince-corporation/api-weather-website/tree/master',
        icon1: 'T',
        icon2: 'M',
        image: port4,
        title: 'Rest API weather App',
        text: 'Weather forecast has become part of human race, monitor and keep plans of weather ahead'
    },
    {
        id: 5,
        category: 'React Expense budget App',
        link1: 'www.youtube.com',
        link: 'https://github.com/Dprince-corporation/Expense-app-react/tree/master',
        icon1: 'Y',
        icon2: 'G',
        image: port6,
        title: 'React Expense budget app',
        text: 'As a worker having good budgeting system is ideal for maintaining dept, be in control of your savings.'
    },
]

export default portfolios;