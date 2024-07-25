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
        title: "MVP Rockets - Trumigo(Apollo Tyres)",
        desc: "High quality professional car services delivered at your doorstep by Apollo Tyres.",
        workDone: [
            `Developed responsive Car Service web app with 15+ user flows, increasing customer engagement by 45% and
streamlining bookings.`,
            `Engineered Admin Dashboard with 8+ CRUD flows, reducing management time by 60% and improving service
request efficiency.`,
            `Optimized user experience using CSS Sprites and Lazy Loading, resulting in 30% faster page loads and 25% higher
user retention.`,
            `Implemented mobile-first design and real-time analytics, boosting mobile conversions by 50% and improving
service allocation by 35%.`
        ],
        href: 'https://corporate.apollotyres.com/'
    },
    {
        sNo: "02",
        title: "MVP Rockets - xto10x",
        desc: `xto10x partners with startups on their journey to transform initial business momentum into at-scale impact and
    world-class organisations.`,
        workDone: [
            `Architected and implemented a comprehensive Learning Management System with 11+ user flows, increasing
student engagement by 40% and improving course completion rates by 35%.`,
            `Designed and developed a high-performance landing page, achieving 300-milliseconds response time and boosting
conversion rates by 50%. Utilized modern web technologies and optimization techniques to enhance user
experience.`
        ],
        href: 'https://www.xto10x.com/'

    },
    {
        sNo: "03",
        title: "MVP Rockets - Kash Kounter",
        desc: "Kash Kounter is a rewards gateway that pays shoppers for purchases increases order frequency for merchants.",
        workDone: [
            `Engineered a pixel-perfect, responsive admin panel with 3+ flows, optimizing transaction and user management
efficiency by 55%. Implemented advanced data visualization, reducing decision-making time by 40%.`,
            `Developed responsive customer interfaces with 5+ user flows, increasing user engagement by 65% and boosting
offer redemption rates by 30%. Utilized modern frontend frameworks to ensure cross-device compatibility and
seamless UX.`
        ],
        href: 'https://www.kashkounter.com/'

    },
    {
        sNo: "04",
        title: "MSG91 (By Walkover)",
        desc: `MSG91 is one of the finest communication platforms that provide businesses to integrate themselves with SMS APIs, e-mail APIs, voice call APIs, etc.`,
        workDone: [
            `Optimized user experience through advanced SEO techniques, smooth page transitions, and progress indicators,
resulting in a 60% increase in user engagement and 30% improvement in conversion rates.`,
            `Designed and developed a high-performance website from concept to deployment, achieving 1-second load times.
Utilized Figma, HTML5, SCSS, JavaScript, Airtable, and Express.js to create a seamless, fast-loading user experience
that increased traffic by 75%.`
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
    { title: "30+", subTitle: "Projects done" },
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
            `Engineered pixel-perfect UIs using HTML5, Tailwind CSS, Next.js 13, Atomic Design, and Storybook. Improved
design consistency by 40%.`,
            `Developed 14+ complex user flows for BCG, Apollo Tyres, xto10x, and others. Achieved 98% client satisfaction and
30% faster development.`,
            `Optimized 10+ websites, improving load times by 45% and increasing mobile traffic by 25%.`,
            `Led a team of 4 developers, delivering 16 pixel-perfect UIs. Increased project speed by 20% and reduced bugs by
15%.`,
            `Participated in recruiting 5+ junior developers. Improved candidate quality by 35% and reduced time-to-hire by
20%.`,
            `Leveraged Next.js SSR and SSG to boost SEO, improving search rankings by 50%.`,
            `Created a company-wide design system using Storybook, reducing design revisions by 25%.`
        ]
    },

    {
        company: 'Walkover Web Solutions',
        profile: 'Software Developer',
        href: 'https://walkover.in/',
        duration: '2021-2022',
        tagline: ``,
        list: [
            `Led development of SPACE collaboration suite, serving 3000+ active users across web and mobile (Ionic) platforms.`,
            `Engineered 6 single-page applications using Angular, TypeScript, and Material UI. Improved user engagement by
            40%.`,
            `Implemented security and compliance standards for 6+ applications, achieving 100% audit pass rate.`,
            `Developed high-performance website with 300-milliseconds response time using HTML5, SCSS, JavaScript,
            Airtable, and Express.js.`,
            `Contributed to and published 2 npm packages, downloaded 10,000+ times by developers worldwide.`,
                `Mentored interns, conducted code reviews, and improved team productivity by 25% through effective task
            delegation.`,
            `Key participant in recruiting 50+ freshers and interns, reducing hiring time by 30% and improving candidate quality.`,
            `Utilized Figma and Balsamiq for UI/UX design, increasing design-to-development efficiency by 35%.`
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
