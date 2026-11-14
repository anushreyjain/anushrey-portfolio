import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Sparkle from "./Sparkle";
import RollText from "./RollText";

const ExperienceCard = ({ item, index }) => {
  const isCurrent = /present/i.test(item.duration);
  const columns =
    item.list.length === 2 ? "lg:grid-cols-2 lg:max-w-4xl" : "lg:grid-cols-3";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-line first:border-0 py-12 lg:py-20"
    >
      {/* Header wraps naturally: dates drop under the name when space is tight */}
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <div className="min-w-0 max-w-full">
          <span className="eyebrow !text-ink-faint">
            ({String(index + 1).padStart(2, "0")})
          </span>
          <h3 className="mt-4 text-[2.2rem] sm:text-5xl lg:text-6xl leading-[1.08] text-ink-bright">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <RollText>{item.company}</RollText>
              <span className="arrow-circle !h-9 !w-9 ml-4 align-middle">
                <BsArrowUpRight size={12} />
              </span>
            </a>
          </h3>
          <p className="mt-3 font-serif italic text-xl lg:text-2xl text-ink-muted">
            {item.profile}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="eyebrow !text-ink">{item.duration}</span>
          {isCurrent && (
            <span className="flex items-center gap-2 font-serif italic text-base text-accent">
              <Sparkle size={11} className="spin-slow" />
              Currently here
            </span>
          )}
        </div>
      </div>

      {/* Highlights sit side by side on wide screens, stack on small ones */}
      <ul className={`mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 ${columns}`}>
        {item.list.map((point, i) => (
          <li key={i} className="flex flex-col gap-3">
            <span className="eyebrow !text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-base lg:text-[1.05rem] text-ink-muted leading-relaxed">
              {point.replace(/\s+/g, " ")}
            </p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExperienceCard;
