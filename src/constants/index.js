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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
      "Developing and maintaining web applications using HTML, CSS, JS and other related technologies."
    ],
  },
  {
    title: "lampex project manager",
    company_name: "Lampex",
    icon: lampexLogo,
    iconBg: "White",
    date: "April 2024",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JS and other related technologies.",
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
      "a store with a lot of masculine acessories, you can explore a lot of options.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: byakuLoja,
    source_code_link: "https://github.com/Toiste/Site-Loja-de-Acessorios",
  },
  {
    name: "You Cars",
    description:
      "",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youcars,
    source_code_link: "https://github.com/",
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
    ],
    image: localIF,
    source_code_link: "https://github.com/jhonatademuner/localif?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
