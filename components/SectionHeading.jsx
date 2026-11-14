import React from "react";
import { motion } from "framer-motion";
import ShinyLink from "./ShinyLink";

const SectionHeading = ({ title, routeLink, linkLabel, className = "" }) => {
  const words = String(title).split(" ");

  return (
    <div className={className}>
      {/* Heading sits on the divider line, link on the right */}
      <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between md:gap-8 lg:pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-[2.4rem] leading-[1.05] md:text-5xl lg:text-[clamp(3rem,4vw,4.75rem)] tracking-[-0.03em] text-ink-bright text-balance"
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
        <div className="flex shrink-0 md:pb-2">
          <ShinyLink routeLink={routeLink}>{linkLabel || "Know more"}</ShinyLink>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
