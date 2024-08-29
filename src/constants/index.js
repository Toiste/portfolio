import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ifesLogo,
  lampexLogo,
  byakuLoja,
  localIF,
  youcars
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "sometimes designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Started on IFES",
    company_name: "Federal Institute of Espírito Santo",
    icon: ifesLogo,
    iconBg: "White",
    date: "March 2022",
    points: [
      "I start learning about Logic, Programming Logic, Calculus...",
      "Introduction to the world of Programming.",
      "I start my first projects on Github after a while.",
    ],
  },
  {
    title: "Learning Projects.",
    company_name: "IFES Projects and my Own Projects",
    icon: ifesLogo,
    iconBg: "White",
    date: "February 2023",
    points: [
      "thinking and developing solutions and ideas for practices and learning in web development",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "class Monitor, scholarship holder",
    company_name: "Lampex",
    icon: lampexLogo,
    iconBg: "White",
    date: "November 2023",
    points: [
      "Responsible for teaching short courses offered by the project at the institution",
      "Responsible for putting together the lesson planning for the Minicourse taught"
    ],
  },
  {
    title: "lampex project manager",
    company_name: "Lampex",
    icon: lampexLogo,
    iconBg: "White",
    date: "April 2024",
    points: [
      "responding to requests for the creation of systems and websites from the campus’ internal and external community",
      "Responsible for organizing and ensuring the execution of active project processes",
      "I developed professionalism and a love for doing good for the community in the region"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Marllon proved me wrong.",
    name: "Jhonata Polito",
    designation: "student",
    company: "IFES",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Marllon does.",
    name: "Samuel Ferreira",
    designation: "student",
    company: "IFES",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Marllon optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "joão Spinassé",
    designation: "student",
    company: "IFES",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "accessories store",
    description:
      "Byaku is an online store for men's accessories, designed to offer a stylish and practical shopping experience. The website features a selection of modern bracelets, necklaces and rings, with an intuitive and responsive interface. The platform was developed to ensure fluid navigation and efficient product management, providing users with a pleasant and hassle-free shopping experience.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: byakuLoja,
    source_code_link: "https://github.com/Toiste/Site-Loja-de-Acessorios",
    page_link: "https://byaku.netlify.app/"
  },
  {
    name: "You Cars",
    description:
      "You Cars is an innovative platform dedicated to car enthusiasts. It offers a complete experience with features such as login, favorites, reviews and user profiles. With a comprehensive database, visitors can explore a large collection of cars and compare models based on their preferences.",
    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: youcars,
    source_code_link: "https://github.com/filipesuhett/youcars-comparator"
  },
  {
    name: "localIF",
    description:
      "LocalIf ​​is an image recognition application specifically designed for IFES Campus Serra. With a comprehensive database, the program stores information about the various locations in the campus.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "orange-text-gradient",
      },
    ],
    image: localIF,
    source_code_link: "https://github.com/jhonatademuner/localif?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
