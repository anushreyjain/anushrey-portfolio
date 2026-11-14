"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { stats, socialLinks } from "@/lib/data";
import ShinyButton from "./ShinyButton";
import Button from "./Button";
import SkillsVenn from "./SkillsVenn";
import RollText from "./RollText";
// Star galaxy background is paused for now. To bring it back, uncomment this
// import and the <StarCanvas /> line below (component lives in StarBackground.jsx).
// import StarCanvas from "./StarBackground";

const EASE = [0.16, 1, 0.3, 1];

const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Websites", hash: "#websites" },
  { name: "Designs", hash: "#designs" },
  { name: "Experience", hash: "#experience" },
];

const Line = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const Socials = ({ className = "" }) => (
  <div className={`flex items-center gap-5 ${className}`}>
    {socialLinks.map((social) => (
      <a
        key={social.href}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Anushrey Jain on ${social.name}`}
        className="text-ink-faint transition-colors hover:text-ink-bright"
      >
        {social.icon}
      </a>
    ))}
  </div>
);

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const pinRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });

  const goToContact = () => {
    setActiveSection("Let's talk");
    setTimeOfLastClick(Date.now());
  };

  return (
    <>
      {/* <StarCanvas /> */}
      {/* On desktop the hero pins in place while the Venn diagram merges, then the page scrolls on. */}
      <div ref={pinRef} className="relative lg:h-[210svh]">
        <section
          ref={ref}
          id="home"
          className="relative flex min-h-[100svh] w-full flex-col px-5 lg:sticky lg:top-0 lg:h-[100svh] lg:min-h-0 lg:px-[7.5rem]"
        >
          {/* Top bar */}
          <motion.nav
            aria-label="Primary"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="container-x flex items-center justify-between py-6 lg:py-8"
          >
            <a href="#home" aria-label="Anushrey Jain, back to top" className="font-serif text-2xl italic leading-none text-ink-bright">
              Aj
            </a>

            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <a href={link.hash} className="group eyebrow hover:!text-ink-bright transition-colors">
                    <RollText>{link.name}</RollText>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-7">
              <Socials className="hidden md:flex" />
              <a href="#contact" onClick={goToContact} className="btn btn-ghost btn-sm !h-9">
                Let&apos;s talk
              </a>
            </div>
          </motion.nav>

          {/* Headline */}
          <div className="container-x relative flex flex-1 flex-col justify-center py-16 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="mb-10 lg:mb-14 flex items-center gap-4"
            >
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-[color:var(--border-strong)] ring-offset-4 ring-offset-[color:var(--bg)]">
                <Image
                  src="/anushrey.png"
                  alt="Anushrey Jain"
                  fill
                  priority
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-ink-bright text-base leading-none">Anushrey Jain</span>
                <span className="eyebrow !text-[0.66rem]">
                  Lead Frontend Engineer &amp; Designer
                </span>
              </span>
            </motion.div>

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h1 className="text-[3rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[clamp(4.6rem,5.4vw,7rem)] min-[1800px]:text-[7.6rem] tracking-[-0.035em] text-ink-bright">
                  <span className="sr-only">Anushrey Jain, Lead Frontend Engineer. </span>
                  <Line delay={0.25}>I design and build</Line>
                  <Line delay={0.35}>
                    <em className="italic text-ink-muted">thoughtful</em> digital
                  </Line>
                  <Line delay={0.45}>products.</Line>
                </h1>

                {/* Primary CTAs sit right under the headline */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
                  className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Button label="Got a project? Let's talk" link="#contact" onClick={goToContact} />
                  <a href="/Anushrey_Resume_2026.pdf" download className="[&>span]:w-full sm:[&>span]:w-auto">
                    <ShinyButton>
                      Download CV
                      <HiDownload className="opacity-70" />
                    </ShinyButton>
                  </a>
                </motion.div>
              </div>

              <div className="hidden lg:col-span-4 lg:block">
                <SkillsVenn scrollProgress={scrollYProgress} className="mx-auto max-w-[28rem]" />
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="container-x border-t border-line pt-6 pb-8 lg:pt-8 lg:pb-10"
          >
            <dl className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-0">
              {stats.map((item, i) => (
                <div
                  key={item.subTitle}
                  className={`flex flex-col gap-2 ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}`}
                >
                  <dd className="font-serif text-4xl lg:text-5xl tracking-tight text-ink-bright">
                    {item.title}
                  </dd>
                  <dt className="eyebrow !text-[0.62rem] lg:!text-[0.68rem]">{item.subTitle}</dt>
                </div>
              ))}
            </dl>
            <Socials className="mt-8 md:hidden text-lg" />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Intro;
