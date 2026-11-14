"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { stats, socialLinks } from "@/lib/data";
import ShinyButton from "./ShinyButton";
import Button from "./Button";
import SkillsVenn from "./SkillsVenn";
import RollText from "./RollText";

const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Websites", hash: "#websites" },
  { name: "Designs", hash: "#designs" },
  { name: "Experience", hash: "#experience" },
];

// Entrance animations are plain CSS (see .hero-rise / .hero-fade in globals.css) so the
// headline paints and animates immediately, without waiting for JS hydration (better LCP).
const Line = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <span className="hero-rise block" style={{ animationDelay: `${delay}s` }}>
      {children}
    </span>
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
      {/* On desktop the hero pins in place while the Venn diagram merges, then the page scrolls on. */}
      <div ref={pinRef} className="relative lg:h-[210svh]">
        <section
          ref={ref}
          id="home"
          className="relative flex min-h-[100svh] w-full flex-col px-5 lg:sticky lg:top-0 lg:h-[100svh] lg:min-h-0 lg:px-[7.5rem]"
        >
          {/* Top bar */}
          <nav
            aria-label="Primary"
            className="hero-fade container-x flex items-center justify-between py-6 lg:py-8"
          >
            <a href="#home" aria-label="Aj, Anushrey Jain, back to top" className="font-serif text-2xl italic leading-none text-ink-bright">
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

            <div className="flex items-center gap-4 md:gap-7">
              <Socials className="!gap-4 md:!gap-5" />
              <a href="#contact" onClick={goToContact} className="btn btn-ghost btn-sm !h-9">
                Let&apos;s talk
              </a>
            </div>
          </nav>

          {/* Headline */}
          <div className="container-x relative flex flex-1 flex-col justify-center py-16 lg:py-12">
            <div
              className="hero-fade mb-10 lg:mb-14 flex items-center gap-4"
              style={{ animationDelay: "0s" }}
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
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h1 className="text-[3rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[clamp(4.6rem,5.4vw,7rem)] min-[1800px]:text-[7.6rem] tracking-[-0.035em] text-ink-bright">
                  <span className="sr-only">Anushrey Jain, Lead Frontend Engineer. </span>
                  <Line delay={0.05}>I design and build</Line>
                  <Line delay={0.12}>
                    <em className="italic text-ink-muted">thoughtful</em> digital
                  </Line>
                  <Line delay={0.19}>products.</Line>
                </h1>

                {/* Primary CTAs sit right under the headline */}
                <div
                  className="hero-fade mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4"
                  style={{ animationDelay: "0.15s" }}
                >
                  <Button label="Got a project? Let's talk" link="#contact" onClick={goToContact} />
                  <a href="/Anushrey_Resume_2026.pdf" download className="[&>span]:w-full sm:[&>span]:w-auto">
                    <ShinyButton>
                      Download CV
                      <HiDownload className="opacity-70" />
                    </ShinyButton>
                  </a>
                </div>
              </div>

              <div className="hidden lg:col-span-4 lg:block">
                <SkillsVenn scrollProgress={scrollYProgress} className="mx-auto max-w-[28rem]" />
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="hero-fade container-x border-t border-line pt-6 pb-8 lg:pt-8 lg:pb-10"
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
