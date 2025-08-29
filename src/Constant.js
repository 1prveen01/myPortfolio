
// Skills Section Logo's
import htmlLogo from './assets/tech/html.png';
import cssLogo from './assets/tech/css.png';
import sassLogo from './assets/tech/sass.png';
import javascriptLogo from './assets/tech/javascript.png';
import reactjsLogo from './assets/tech/reactjs.png';
import reduxLogo from './assets/tech/redux.png';
import tailwindcssLogo from './assets/tech/tailwindcss.png';
import gsapLogo from './assets/tech/gsap.png';
import nodejsLogo from './assets/tech/nodejs.png';
import expressjsLogo from './assets/tech/express.png';
import mongodbLogo from './assets/tech/mongodb.png';
import cLogo from './assets/tech/c.png';
import cppLogo from './assets/tech/cpp.png';
import pythonLogo from './assets/tech/python.png';
import gitLogo from './assets/tech/git.png';
import githubLogo from './assets/tech/github.png';
import vscodeLogo from './assets/tech/vscode.png';
import postmanLogo from './assets/tech/postman.png';
import figmaLogo from './assets/tech/figma.png';
import netlifyLogo from './assets/tech/netlify.png';
import vercelLogo from './assets/tech/vercel.png';



// Internships Section Logo's
import infowizLogo from './assets/internships/infowiz-logo.png';
import thinknextLogo from './assets/internships/thinknext-logo.png';


// Education Section Logo's
import bfcetLogo from './assets/education/bfcetlogo.png';
import bspsLogo from './assets/education/bspslogo.png';
import davLogo from './assets/education/LOGO.png';

// Project Section Logo's
import currencyApp from './assets/projects/currencyapp.png';
import randomPassApp from  './assets/projects/randomPassgenrator.png'
import todoApp from './assets/projects/todoapp.png';
import weatherApp from './assets/projects/weatherapp.png';
import netflixApp from './assets/projects/netflix.png';
import mbaChaiWalaApp from './assets/projects/mbaChaiWala.png';
import mytube from './assets/projects/mytube.png';






export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 export const training = [
    {
      id: 0,
      img: infowizLogo,
      role: "Flutter",
      company: "Infowiz ",
      date: "June 2023 - Aug 2023",
      desc: "Built cross-platform mobile applications using Flutter and Firebase, focusing on responsive UI design and seamless backend integration. Utilized Firebase services such as Firestore and Authentication to implement real-time data features and user management. Collaborated in agile teams to deliver scalable, high-performance applications across iOS and Android.",
      skills: [
        "Flutter",
        "Firebase",
        ],
    },
    {
      id: 1,
      img: thinknextLogo,
      role: "MERN Stack",
      company: "ThinkNext",
      date: "June 2024 - Aug 2024",
      desc: "Completed hands-on training in the MERN stack (MongoDB, Express.js, React.js, Node.js), gaining practical experience in building fullstack web applications, managing frontend and backend integration, handling state management, and deploying scalable solutions.",
      skills: [
        "ReactJS",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Express",
        "NodeJS",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: bfcetLogo,
      school: "Baba Farid College of Engineering and Technology , Bhatinda",
      date: "Sept 2022 - July 2024",
      grade: "6.8 GPA",
      desc: "I completed my B.Tech in Computer Science and Engineering from BFGI College, where I gained strong technical skills and hands-on experience in programming, software development, and emerging technologies.",
      degree: "Btech in Computer Science and Engineering",
    },
    
    {
      id: 1,
      img: davLogo,
      school: "DAV Public School Sawang, Jharkhand",
      date: "Apr 2016 - March 2018",
      grade: "61%",
      desc: "I completed my class 12 education from DAV Public School, Sawang, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: bspsLogo,
      school: "Bharat Singh Public School Phusro, Jharkhand",
      date: "Apr 2015 - March 2016",
      grade: "8.4 cgpa",
      desc: "I completed my 10th standard from Bharat Singh Public School, where I built a strong academic foundation and actively participated in school activities.",
      degree: "CBSE(X),",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Currency Converter App",
      description:
        "A simple and responsive currency converter built using React.js. It fetches real-time exchange rates from a public API (like Frankfurter or ExchangeRate-API) and allows users to convert amounts between different currencies. Features include currency selection, real-time conversion, and dynamic rate updates using React Hooks.",
      image: currencyApp,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/1prveen01/currencyApp",
      webapp: "https://currency-app-coral.vercel.app/",
    },
    {
      id: 1,
      title: "MBA Chai Wala Clone",
      description:
        "Created a responsive clone of the MBA Chai Wala website using React and Tailwind CSS, replicating its layout, animations, and interactive UI components.",
      image: mbaChaiWalaApp,
      tags: ["React JS", "HTML","TailWind CSS", "CSS", "JavaScript"],
      github: "https://github.com/1prveen01/mbaChaiWalaClone",
      webapp: "https://y-eb4gsdlyt-praveens-projects-be2a4576.vercel.app/",
    },
    {
      id: 2,
      title: "Netflix Clone with TMDB API",
      description:
        "A visually rich Netflix clone built with React.js, integrated with the TMDB (The Movie Database) API to fetch real-time movie and TV show data. It features a dynamic homepage with trending, top-rated, and genre-based movie sections, a banner with featured content, and detailed movie info modals. Styled with CSS or Tailwind, and supports responsive design and smooth user interactions.",
      image: netflixApp,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/1prveen01/Netflix-with-tmdb-api",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "A responsive ToDo application built using React and Tailwind CSS that enables users to manage tasks efficiently by allowing adding, editing, and removing tasks.",
      image: todoApp,
      tags: ["React JS", "HTML","CSS", "Tailwind CSS", "Javascript"],
      github: "https://github.com/1prveen01/todoApp",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Weather Report",
      description:
        "Developed a responsive Weather Report App using React and Tailwind CSS to fetch and display real-time weather data via API integration.",
      image: weatherApp,
      tags: ["JavaScript", "React", "HTML", "CSS"],
      github: "https://github.com/1prveen01/weatherReport",
      webapp: "https://weather-report-rose.vercel.app/",
    },
    {
      id: 5,
      title: "Random Password Generator",
      description:
        "Built a Random Password Generator using React and Tailwind CSS that creates secure, customizable passwords with options for length and character types.",
      image: randomPassApp,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/1prveen01/randomPassGenerator",
      webapp: "https://random-pass-generator-phi.vercel.app/",
    },
    {
      id: 6,
      title: "mytube",
      description:
        "MyTube is a video sharing platform built to strengthen my full-stack skills. I gained experience in backend APIs with authentication and media handling, frontend integration with React + Vite, and deploying on Render and Vercel with proper environment setup and CORS configuration.",
      image: mytube,
      tags: ["React JS", "HTML","TailWind CSS","express", "MongoDB", "Vercel", "Replit", "shadcn","Nodejs", "CSS", "JavaScript"],
      github: "https://github.com/1prveen01/mytube",
      webapp: "https://mytube-4imgebc70-praveens-projects-be2a4576.vercel.app",
    },
  
  ];  
