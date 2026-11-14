import React from "react";
import { motion } from "framer-motion";
import ShinyLink from "./ShinyLink";

const SectionHeading = ({ title, index, label, routeLink, linkLabel, className = "" }) => {
  const words = String(title).split(" ");

  return (
    <div className={className}>
      <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-4 border-b border-line pb-4">
        <span className="eyebrow lg:col-span-3">[ {index} ]</span>
        <span className="eyebrow hidden lg:block lg:col-span-6">{label || title}</span>
        <div className="flex justify-end lg:col-span-3">
          <ShinyLink routeLink={routeLink}>{linkLabel || "Know more"}</ShinyLink>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 lg:mt-14 text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[5.5rem] tracking-[-0.03em] text-ink-bright"
      >
        {words.length > 1 ? (
          <>
            {words.slice(0, -1).join(" ")}{" "}
            <em className="italic text-ink-muted">{words[words.length - 1]}</em>
          </>
        ) : (
          title
        )}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
