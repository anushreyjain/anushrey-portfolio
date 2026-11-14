"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Skills from "./Skills";
import SectionWarpper from "./SectionWarpper";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <SectionWarpper
      routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/'}
      title={"Where Design Meets Engineering"}
      label="About"
      ref={ref}
      id={'about'}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <p className="eyebrow lg:col-span-3 pt-3">Who I am</p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-9 font-serif text-2xl md:text-3xl lg:text-[clamp(2rem,2.4vw,2.75rem)] leading-[1.3] lg:leading-[1.25] tracking-[-0.01em] text-ink-muted"
        >
          I&apos;m a{" "}
          <em className="italic text-ink-bright">Lead Frontend Engineer</em> with{" "}
          <em className="italic text-ink-bright">5+ years</em> of experience
          building fast, accessible products in React and Next.js, and I bring a
          designer&apos;s eye to every pixel. I&apos;ve shipped for clients like{" "}
          <em className="italic text-ink-bright">Deloitte, BCG and Apollo Tyres</em>,
          and today I lead a distributed team building{" "}
          <em className="italic text-ink-bright">agentic AI workflows</em> and{" "}
          <em className="italic text-ink-bright">design systems</em> that keep
          products fast, consistent and easy to scale.
        </motion.p>
      </div>

      <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-3 flex flex-col gap-3">
          <p className="eyebrow">My expertise</p>
          <p className="text-sm text-ink-faint max-w-[16rem] leading-relaxed">
            The tools I reach for to take an idea from Figma to production.
          </p>
        </div>
        <div className="lg:col-span-9">
          <Skills />
        </div>
      </div>
    </SectionWarpper>
  );
};

export default About;
