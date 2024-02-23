import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Showcase",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Let's talk",
    hash: "#contact",
  },
];

export const socialLinks = [
  { icon: <BsLinkedin />,
    href: 'https://www.linkedin.com/in/anushrey-jain-95857a135/'
  },
  { icon: <BsInstagram/>,
    href: 'https://www.instagram.com/syntactically_awesome/'
  },
  { icon: <BsGithub/>,
    href: 'https://github.com/anushreyjain'
  },
  { icon: <FaBehance/>,
    href: 'https://www.behance.net/anushreyjain'
  }
]

export const showcase = [
  {
    sNo: "01",
    title: "Trumigo(Appolo Tyres)",
    desc: "High quality professional car services delivered at your doorstep by Apollo Tyres.",
    workDone: [
      'Developed a creative and responsive Car Service web app with over 15 flows.',
      'Engineered Admin Dashboard with over 8 flows to add/edit/view and delete car service requests.',
      'Optimised User Experience by using techniques like CSS Sprites, Dynamic Imports and Lazy Loading'
    ],
    href: 'https://trumigo.in/'
  },
  {
    sNo: "02",
    title: "xto10x",
    desc: `xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and
    world-class organisations.`,
    workDone: [
      'Developed a seamless Learning Management System with over 11 flows.',
      'Crafted a Landing page with a great user experience and a response time of just 1 second.'
    ],
    href: 'https://www.xto10x.com/'

  },
  {
    sNo: "03",
    title: "Kash Kounter",
    desc: "Kash Kounter is a rewards gateway that pays shoppers for purchases increases order frequency for merchants.",
    workDone: [
      'Developed a pixel-perfect, responsive admin panel with over 3 flows to manage all transactions and users',
      `Created responsive customer screens with more than 5 flows, delivering a seamless user experience that
      showcases offers and rewards.`
    ],
    href: 'https://www.kashkounter.com/'

  },
  {
    sNo: "04",
    title: "MSG91 (By Walkover)",
    desc: `MSG91 is one of the finest communication platforms that provide businesses to integrate themselves with SMS APIs, e-mail APIs, voice call APIs, etc.`,
    workDone: ['Developed 4 User Interfaces with perfect responsiveness using HTML, SCSS and Angular.',
    `Enhanced user experience by improving SEO, adding page transitions, and implementing a progress bar.`,
    `Built a complete website for an in-house project from scratch, achieving a response time of just 1 second using
    Figma, Balsamiq, HTML5, SCSS, JavaScript, Airtable, and Express.js.`
  ],
  href: 'https://msg91.com/in'

  },
];

export const companyWorkedWith = [
  {
    image: "",
    title: "Trumigo(Apollo Tyres)",
    description:
      "High quality professional car services delivered at your doorstep by Apollo Tyres.",
  },
  {
    image: "",
    title: "xto10x",
    description:
      "xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and world-class organisations",
  },
  {
    image: "",
    title: "Kash Kounter",
    description:
      "Kash Kounter is a rewards gateway that pays shoppers for purchases increases order frequency for merchants.",
  },
  {
    image: "",
    title: "climateXcapital (cXc)",
    description:
      "Bulk SMS API- Send SMS API — Enjoy Reliable and Flexible SMS with our SMS Services, and boost up your customer journey.",
  },
  {
    image: "",
    title: "MSG91(By Walkover)",
    description:
      "climateXcapital (cXc) is an open-source platform launched to support climate innovators to spend less time fundraising.",
  },
];

export const stats = [
  { title: "30+", subTitle: "Projects done" },
  { title: "50+", subTitle: "Clients handled" },
  { title: "100+", subTitle: "Cups of coffee" },
];

export const experiencesData = [
  {
    company: 'Napses Technologies',
    profile: 'UI Developer',
    href: 'https://napses.com/',
    duration: '2022-Present',
    tagline: `Developed pixel perfect user interface using top notch technologies
    like HTML, Tailwind CSS, Next.js, Atomic Design and Storybook.`,
    list: [
      `Developed responsive user interfaces for admin panels, dashboards,
    and customer screens, with over 14 flows for companies such as BCG
    (Boston Consulting Group), Apollo Tyres, xto10x, Kash Kounter, and
    ClimateXcapital.`, 
    ` Optimized more than 10 websites for responsiveness, loading time,
    and user experience.`, 
    `Managed a team of 4 members and delivered over 16 pixel-perfect user
    interfaces with seamless user experiences.` ,  
    `Involved in the recruiting process of 5+ freshers and interns.` 
  ]
  },

  {
    company: 'MSG91',
    profile: 'Software Developer',
    href:'https://msg91.com/in',
    duration: '2021-2022',
    tagline: `Worked on a collaboration suite - SPACE with quality delivery across web and mobile(Ionic) platforms serving 3000+ active users.`,
    list: [
      `Designed and developed 6 single-page applications using Figma, Balsamiq, HTML5, SCSS, Typescript, and Material UI in Angula`, 
    `Established more than 6 applications with security and compliance standards and requirements`, 
    `Created a complete website from scratch, achieving a response time of just 1 seconds using Figma, Balsamiq, HTML5, SCSS, JavaScript, Airtable, and Express.js.` ,  
    `Contributed to 2 npm packages UI and published them.`,
    `Spearheaded task delegation, mentored interns, and conducted code reviews.`,
    `Involved in the recruiting process of 50+ freshers and interns for the team exclusively.`
  ]
  },

  {
    company: 'Freelancing',
    profile: 'UI Designer/Developer',
    href: 'https://www.upwork.com/',
    duration: '2020-2021',
    list: [
      `Designed the UI and UX of more than 10 websites using tools such as Figma, Adobe XD, and Balsamiq.`, 
    `Engineered over 5 websites using technologies such as HTML5, CSS3, SCSS, JavaScript, TypeScript, Express.js, Angular, and React.js.`, 
    `Optimized more than 5 websites, achieving a response time of just 0.3 seconds` ,  
  ]
  },
];

export const skillsData = [
  {
    logo: 'html',
    name: 'HTML'
  },
  {
    logo: 'css',
    name: 'CSS3'
  },
  {
    logo: 'javascript',
    name: 'JavaScript'
  },
  {
    logo: 'react-js',
    name: 'React.js'
  },
  {
    logo: 'next-js',
    name: 'Next.js'
  },
  {
    logo: 'tailwind-css',
    name: 'Tailwind CSS'
  },
  {
    logo: 'storybook',
    name: 'Storybook'
  },
  {
    logo: 'bootstrap',
    name: 'Bootstrap 4/5'
  },
  {
    logo: 'material-ui',
    name: 'Material UI'
  },
  {
    logo: 'scss',
    name: 'SCSS'
  },
  {
    logo: 'figma',
    name: 'Figma'
  },
  {
    logo: 'webflow',
    name: 'Webflow'
  },
  {
    logo: 'atomic-design',
    name: 'Atomic Design'
  },
  {
    logo: 'git',
    name: 'Git'
  },


];
