"use client";

import React, { useRef } from "react";
import { BsArrowUp } from "react-icons/bs";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Corners from "./Corners";
import { WORDMARK_LETTERS, WORDMARK_VIEWBOX } from "@/lib/wordmarkPaths";
import RollText from "./RollText";

const navigate = [
  { name: "About", href: "#about" },
  { name: "Websites", href: "#websites" },
  { name: "Accolades", href: "#projects" },
  { name: "Designs", href: "#designs" },
  { name: "Experience", href: "#experience" },
];

const connect = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/anushrey-jain-95857a135/" },
  { name: "GitHub", href: "https://github.com/anushreyjain" },
  { name: "Behance", href: "https://www.behance.net/anushreyjain" },
  { name: "Email", href: "mailto:anushrey1998@gmail.com" },
];

const LinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-5">
    <span className="eyebrow !text-ink-faint">{`// ${title}`}</span>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group text-sm text-ink-muted hover:text-ink-bright transition-colors"
          >
            <RollText>{link.name}</RollText>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const reduceMotion = useReducedMotion();
  // The running border only animates while the footer is on screen
  const wordmarkRef = useRef(null);
  const wordmarkVisible = useInView(wordmarkRef);
  return (
  <footer className="relative w-full overflow-hidden px-5 lg:px-[7.5rem] pt-10">
    <div className="container-x framed">
      <Corners />

      <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 p-7 lg:p-12">
        <div className="col-span-2 lg:col-span-6 flex flex-col gap-5">
          <span className="eyebrow !text-ink-faint">{"// Anushrey Jain"}</span>
          <p className="font-serif text-3xl lg:text-[2.6rem] leading-[1.15] text-ink-bright max-w-lg">
            Designing &amp; building thoughtful{" "}
            <em className="italic text-ink-muted">digital products.</em>
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-9">
          <LinkColumn title="Navigate" links={navigate} />
        </div>
        <div className="lg:col-span-2">
          <LinkColumn title="Connect" links={connect} />
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-line px-7 py-5 text-sm text-ink-faint lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <span>&copy; {new Date().getFullYear()} Anushrey Jain. All rights reserved.</span>
        <a href="#home" className="group flex items-center gap-3 text-ink-muted hover:text-ink-bright transition-colors w-fit">
          Back to top
          <span className="arrow-circle !h-8 !w-8">
            <BsArrowUp size={12} className="!rotate-0" />
          </span>
        </a>
      </div>
    </div>

    <div aria-hidden="true" className="container-x select-none pt-8">
      <svg
        ref={wordmarkRef}
        viewBox={WORDMARK_VIEWBOX}
        data-active={wordmarkVisible}
        className="wordmark mx-auto block h-auto w-[84vw] lg:w-[70vw] min-[1800px]:w-[78rem] overflow-visible"
      >
        {WORDMARK_LETTERS.map((letter, i) => (
          <motion.g
            key={letter.char + i}
            className="wordmark-letter"
            initial={reduceMotion ? false : { opacity: 0, y: 500 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
          >
            <path d={letter.d} className="wordmark-base" />
            {/* Border that roams along the letter's outline, start to end */}
            {!reduceMotion && (
              <>
                <path
                  d={letter.d}
                  pathLength="100"
                  className="wordmark-run wordmark-glow"
                  style={{ animationDelay: `${1.6 + i * 0.5}s` }}
                />
                <path
                  d={letter.d}
                  pathLength="100"
                  className="wordmark-run"
                  style={{ animationDelay: `${1.6 + i * 0.5}s` }}
                />
              </>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  </footer>
  );
};

export default Footer;
