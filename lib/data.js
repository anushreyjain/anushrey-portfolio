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
    name: "Websites",
    hash: "#websites",
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
    name: "Let's talk",
    hash: "#contact",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/anushrey-jain-95857a135/",
  },
  {
    name: "GitHub",
    icon: <BsGithub />,
    href: "https://github.com/anushreyjain",
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    href: "https://www.behance.net/anushreyjain",
  },
];

export const showcase = [
  // {
  //   sNo: "01",
  //   title: "Slangzee",
  //   desc: "A platform for submitting and defining slang words and phrases, often with a humorous twist.",
  //   workDone: [],
  //   href: "https://github.com/anushreyjain/slangzee",
  // },
    {
    sNo: "01",
    title: "Massic AI",
    desc: "Agentic AI platform that turns Search Console, GA4 and Business Profile data into strategies, content and review campaigns for local businesses. I lead the frontend and its 50+ component design system.",
    workDone: [],
    href: "https://www.massic.io/",
  },

    {
    sNo: "02",
    title: "HashedIn Round Table (by Deloitte)",
    desc: "Round-table management platform for HashedIn’s enterprise clients. I led 10 engineers on a scheduling and real-time collaboration product used by 500+ daily users, with 98% test coverage.",
    workDone: [],
    href: "https://hashedin.com/about-us/",
  },

    {
    sNo: "03",
    title: "Nidana (Veterinary AI)",
    desc: "Veterinary practice platform with 16+ AI diagnostic workflows, cutting average diagnosis time by 36% across 200+ clinics. Tuned for low-bandwidth clinics, with 70% faster page loads.",
    workDone: [],
    href: "https://nidana.io/",
  },

  {
    sNo: "04",
    title: "Trumigo (Apollo Tyres & BCG)",
    desc: "Vehicle service platform for Apollo Tyres and BCG with 35+ user flows, from booking and payments to tracking, handling 1K+ monthly bookings, plus an admin dashboard for 50+ service centers.",
    workDone: [],
    href: "https://corporate.apollotyres.com/",
  },
  {
    sNo: "05",
    title: "xto10x",
    desc: `xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and
    world-class organizations.`,
    workDone: [],
    href: "https://www.xto10x.com/",
  },
  {
    sNo: "06",
    title: "Kash Kounter",
    desc: "Kash Kounter is a rewards gateway that pays shoppers for purchases and increases order frequency for merchants.",
    workDone: [],
    href: "https://www.kashkounter.com/",
  },
  {
    sNo: "07",
    title: "MSG91 (By Walkover)",
    desc: `MSG91 is one of the finest communication platforms that enables businesses to integrate themselves with SMS APIs, email APIs, voice call APIs, etc.`,
    workDone: [],
    href: "https://msg91.com/in",
  },
];

export const companyWorkedWith = [
{
    image: "",
    title: "Massic AI",
    description:
      "Massic automates the heavy lifting of organic growth. It pulls in data from Google Search Console, GA4, and Google Business Profiles, as well as a variety of external data sources then translates that into clear strategies, optimized web content, social posts, and review campaigns.",
  },
{
    image: "",
    title: "Round Table management for HashedIn - by Deloitte",
    description:
      "Round Table management for HashedIn - by Deloitte is a platform that helps businesses manage their round table discussions and meetings effectively.",
  },
    {
    image: "",
    title: "Nidana - Intelligent Veterinary Practice Management",
    description:
      "Nidana is an intelligent veterinary practice management platform designed to streamline operations and improve patient care.",
  },
  {
    image: "",
    title: "Doorstep car servicing for Trumigo - by Apollo Tyres",
    description:
      "High-quality professional car services delivered at your doorstep by Apollo Tyres.",
  },
  {
    image: "",
    title: "xto10x",
    description:
      "xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and world-class organizations",
  },
  {
    image: "",
    title: "Kash Kounter",
    description:
      "Kash Kounter is a rewards gateway that pays shoppers for purchases and increases order frequency for merchants.",
  },
  {
    image: "",
    title: "climateXcapital (cXc)",
    description:
      "climateXcapital (cXc) is an open-source platform launched to support climate innovators to spend less time fundraising.",
  },
  {
    image: "",
    title: "MSG91 (By Walkover)",
    description:
      "Bulk SMS API - Send SMS API — Enjoy reliable and flexible SMS with our SMS services, and boost your customer journey.",
  },
];

export const stats = [
  { title: "60+", subTitle: "Projects completed" },
  { title: "50+", subTitle: "Clients handled" },
  { title: "100+", subTitle: "Cups of tea" },
];

export const experiencesData = [
  {
    company: "Massic AI",
    profile: "Lead Frontend Engineer",
    href: "https://www.massic.io/",
    duration: "Nov 2025 - Present",
    tagline: ``,
    list: [
      `Lead a fully distributed team of 5 engineers, setting the technical roadmap, running code reviews and sprint planning, and cutting feature delivery time by 30%.`,
      `Architected agentic AI workflows for local businesses with Next.js and TypeScript, across 15+ modules.`,
      `Built a global design system of 50+ reusable Shadcn components, improving UI consistency and cutting development time by 30%.`,
    ],
  },
  {
    company: "MVP Rockets",
    profile: "Lead Frontend Engineer",
    href: "https://mvprockets.com/",
    duration: "Jul 2022 - Oct 2025",
    tagline: ``,
    list: [
      `Led a 10-engineer frontend team delivering 24+ client projects for Deloitte, BCG and Apollo Tyres, with 98% client satisfaction and 30% faster delivery.`,
      `Architected a design system of 60+ components and integrated OpenAI APIs across 3+ products, reducing design revisions by 35% and lifting engagement by 55%.`,
      `Optimized 14+ production websites with code splitting, lazy loading and React Query caching, cutting load times by 45% and improving Core Web Vitals by 50%.`,
    ],
  },
  {
    company: "Walkover Web Solutions",
    profile: "Software Engineer",
    href: "https://walkover.in/",
    duration: "Jun 2021 - Jun 2022",
    tagline: ``,
    list: [
      `Led development of the SPACE collaboration suite with Angular and Material UI, growing it to 3,000+ active users and lifting engagement by 40% across 6 SPAs.`,
      `Published 2 open-source npm packages with 1,000+ downloads worldwide.`,
    ],
  },
];

export const skillsData = [
  {
    logo: "html",
    name: "HTML",
  },
  {
    logo: "css",
    name: "CSS3",
  },
  {
    logo: "typescript",
    name: "TypeScript",
  },
  {
    logo: "next-js",
    name: "Next.js",
  },
  {
    logo: "tailwind-css",
    name: "Tailwind CSS",
  },
  {
    logo: "shadcn",
    name: "Shadcn",
  },
  {
    logo: "react-js",
    name: "React.js",
  },
  {
    logo: "javascript",
    name: "JavaScript",
  },
   {
    logo: "react-query",
    name: "React Query",
  },
  {
    logo: "storybook",
    name: "Storybook",
  },
    {
    logo: "atomic-design",
    name: "Atomic Design",
  },
  {
    logo: "bootstrap",
    name: "Bootstrap 4/5",
  },
  {
    logo: "material-ui",
    name: "Material UI",
  },
  {
    logo: "scss",
    name: "SCSS",
  },
  {
    logo: "figma",
    name: "Figma",
  },
  {
    logo: "webflow",
    name: "Webflow",
  },
  {
    logo: "git",
    name: "Git",
  },
];

// Marketing websites designed, built and CMS-wired end-to-end.
// Put each site's logo in /public/websites and set `logo`.
export const websites = [
  {
    title: "R&C Roofing Contractors",
    url: "https://www.roofinspectionhawaii.com/",
    logo: "/websites/roof-inspection-hawaii-logo.png",
    cms: "Sanity",
    tags: ["Marketing site", "Design + Dev + CMS"],
    summary: "HAAG Certified roof inspection and roofing services across Oahu.",
  },
  {
    title: "Rebellious Aging",
    url: "https://rebelliousaging.org/",
    logo: "/websites/rebellious-aging-logo.png",
    cms: "Sanity",
    tags: ["Marketing site", "Design + Dev + CMS"],
    summary: "Member-led longevity clubs across the Hawaiian Islands.",
  },
  {
    title: "Aloha Salads",
    url: "https://alohasalads.com",
    logo: "/websites/aloha-salads-logo.png",
    cms: "Sanity",
    tags: ["Marketing site", "Design + Dev + CMS"],
    summary: "Fresh island-grown salads and local ahi across six Oahu locations.",
  },
];
