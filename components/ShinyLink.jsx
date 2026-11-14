import React from "react";
import { BsArrowRight } from "react-icons/bs";

// Text link with the sliding glow shine and a hover arrow nudge.
const ShinyLink = ({ children, routeLink }) => {
  return (
    <a
      href={routeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="shiny-anim relative group w-fit hover:scale-105 flex items-center gap-3 tracking-wide h-full"
    >
      <span
        className="text-sm lg:text-base text-ink group-hover:scale-105 active:scale-105 transition
      flex items-center gap-1 underline underline-offset-4 decoration-white/30 cursor-pointer linear-mask-link"
      >
        {children}
        <BsArrowRight
          color="#fff"
          className="opacity-70 -rotate-45 lg:group-hover:-translate-y-[2px]
          lg:group-hover:translate-x-[2px] transition-all"
        />
      </span>
    </a>
  );
};

export default ShinyLink;
