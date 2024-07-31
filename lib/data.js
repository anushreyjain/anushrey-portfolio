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
        name: "Let's talk",
        hash: "#contact",
    },
];

export const socialLinks = [
    {
        icon: <BsLinkedin />,
        href: 'https://www.linkedin.com/in/anushrey-jain-95857a135/'
    },
    {
        icon: <BsGithub />,
        href: 'https://github.com/anushreyjain'
    },
    {
        icon: <FaBehance />,
        href: 'https://www.behance.net/anushreyjain'
    }
]

export const showcase = [
    {
        sNo: "01",
        title: "Trumigo(Apollo Tyres)",
        desc: "High quality professional car services delivered at your doorstep by Apollo Tyres.",
        workDone: [

        ],
        href: 'https://corporate.apollotyres.com/'
    },
    {
        sNo: "02",
        title: "xto10x",
        desc: `xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and
    world-class organisations.`,
        workDone: [

        ],
        href: 'https://www.xto10x.com/'

    },
    {
        sNo: "03",
        title: "Kash Kounter",
        desc: "Kash Kounter is a rewards gateway that pays shoppers for purchases increases order frequency for merchants.",
        workDone: [

        ],
        href: 'https://www.kashkounter.com/'

    },
    {
        sNo: "04",
        title: "MSG91 (By Walkover)",
        desc: `MSG91 is one of the finest communication platforms that provide businesses to integrate themselves with SMS APIs, e-mail APIs, voice call APIs, etc.`,
        workDone: [

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
            "climateXcapital (cXc) is an open-source platform launched to support climate innovators to spend less time fundraising.",
    },
    {
        image: "",
        title: "MSG91(By Walkover)",
        description:
            "Bulk SMS API- Send SMS API — Enjoy Reliable and Flexible SMS with our SMS Services, and boost up your customer journey.",
    },
];

export const stats = [
    { title: "40+", subTitle: "Projects completed" },
    { title: "50+", subTitle: "Clients handled" },
    { title: "100+", subTitle: "Cups of coffee" },
];

export const experiencesData = [
    {
        company: 'MVP Rockets',
        profile: 'UI Engineer',
        href: 'https://mvprockets.com/',
        duration: '2022-Present',
        tagline: ``,
        list: [
            `Led UI/UX development using Next.js, Tailwind CSS, and Storybook, 
            improving design consistency and client satisfaction while optimizing website performance.`,
            `Managed a development team, streamlining processes to increase project speed and reduce bugs, 
            while also enhancing recruitment efforts.`,
            `Implemented advanced Next.js features and created a company-wide design system, significantly 
            improving SEO rankings and reducing design iterations.`
        ]
    },

    {
        company: 'Walkover Web Solutions',
        profile: 'Software Developer',
        href: 'https://walkover.in/',
        duration: '2021-2022',
        tagline: ``,
        list: [
            `Led development of SPACE collaboration suite and engineered
             multiple single-page applications, significantly improving 
             user engagement and performance across web and mobile platforms.`,
            `Implemented robust security measures, developed high-performance websites, 
            and contributed to widely-used npm packages, showcasing technical expertise and impact.`,
            `Played a key role in team leadership, mentoring, and recruitment efforts, 
             while enhancing design-to-development efficiency through effective use 
             of UI/UX tools.`
        ]
    }
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


export const designShowCase = [
    {
        title: 'Luxe. Simplicity. Memories',
        imageSrc: '/designs/design-one.png',
        linkToDesign: 'https://www.behance.net/gallery/203801271/Seamless-booking-unforgettable-experiences'
    },
    {
        title: 'Strategize. Execute. Succeed',
        imageSrc: '/designs/design-two.png',
        linkToDesign: 'https://www.behance.net/gallery/146874613/Stock-buysell-website-landing-page'
    },
    {
        title: 'Melodies. Moments. Memories',
        imageSrc: '/designs/design-three.png',
        linkToDesign: 'https://www.behance.net/gallery/142298985/Events-website-hero-section'
    },
    {
        title: 'Browse. Select. Delight',
        imageSrc: '/designs/design-four.png',
        linkToDesign: 'https://www.behance.net/gallery/142300525/E-commerce-website-hero-section'
    },
    {
        title: 'Couture. Confidence. Character',
        imageSrc: '/designs/design-five.png',
        linkToDesign: 'https://www.behance.net/gallery/142299257/Fashion-website-hero-section'
    },
]