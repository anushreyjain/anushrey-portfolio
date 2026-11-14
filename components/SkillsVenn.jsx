"use client";

import React from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

const D = 0.5; // circle diameter as a share of the stage width
const SPREAD = 0.31; // centre distance from the middle before scrolling (circles apart)
const MERGED = 0.105; // centre distance once they overlap like a Venn diagram

// Angles for the triangle: top, bottom-left, bottom-right
const circles = [
  { label: "Designer", angle: -90, labelAngle: -90 },
  { label: "Frontend\nEngineer", angle: 150, labelAngle: 150 },
  { label: "Idea\nShipper", angle: 30, labelAngle: 30 },
];

const Circle = ({ label, angle, labelAngle, progress, index }) => {
  const rad = (angle * Math.PI) / 180;
  const dist = useTransform(progress, [0, 1], [SPREAD, MERGED]);
  // Circles are parked at the stage centre and moved with transforms only (compositor-friendly),
  // instead of animating left/top, which would force layout on every scroll frame.
  const x = useTransform(dist, (d) => `${((Math.cos(rad) * d) / D) * 100}%`);
  // d / 4 keeps the triangle vertically centred in the stage
  const y = useTransform(dist, (d) => `${(((Math.sin(rad) * d) + d / 4) / D) * 100}%`);
  // Fill fades via opacity on its own layer (no repaint of the border/labels)
  const fillOpacity = useTransform(progress, [0, 1], [0.4, 1]);

  // Labels sit toward the outer edge of each circle so they stay clear of the overlap.
  const lrad = (labelAngle * Math.PI) / 180;
  const lx = 50 + Math.cos(lrad) * 32;
  const ly = 50 + Math.sin(lrad) * 32;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="absolute aspect-square rounded-full border border-[color:var(--border-strong)] will-change-transform"
      style={{ left: `${(0.5 - D / 2) * 100}%`, top: `${(0.5 - D / 2) * 100}%`, width: `${D * 100}%`, x, y }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(236, 231, 222, 0.03)", opacity: fillOpacity }}
      />
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-pre-line text-center font-mono text-[0.6rem] uppercase leading-snug tracking-[0.12em] text-ink-muted xl:text-[0.64rem]"
        style={{ left: `${lx}%`, top: `${ly}%` }}
      >
        {label}
      </span>
    </motion.div>
  );
};

// `scrollProgress` is 0 → 1 across the pinned hero; the merge completes at 75% and then holds.
const SkillsVenn = ({ scrollProgress, className = "" }) => {
  const reduceMotion = useReducedMotion();
  const raw = useTransform(scrollProgress, [0, 0.75], [reduceMotion ? 1 : 0, 1], { clamp: true });
  const progress = useSpring(raw, { stiffness: 120, damping: 26, mass: 0.5 });

  const meOpacity = useTransform(progress, [0.72, 1], [0, 1]);
  const meScale = useTransform(progress, [0.72, 1], [0.7, 1]);

  return (
    <motion.div
      className={`relative aspect-square w-full ${className}`}
      role="img"
      aria-label="Designer, Frontend Engineer and Idea Shipper: where all three meet, that's me"
    >
      {circles.map((c, i) => (
        <Circle key={c.label} {...c} index={i} progress={progress} />
      ))}

      <motion.span
        aria-hidden="true"
        className="absolute left-1/2 whitespace-nowrap font-serif text-sm italic leading-none text-accent xl:text-base"
        style={{ top: `${(0.5 + MERGED / 4) * 100}%`, x: "-50%", y: "-50%", opacity: meOpacity, scale: meScale }}
      >
        That&apos;s me
      </motion.span>

    </motion.div>
  );
};

export default SkillsVenn;
