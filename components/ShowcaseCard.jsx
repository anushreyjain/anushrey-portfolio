import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import RollText from "./RollText";

const ShowcaseCard = ({ item }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Visit"
      className="group grid grid-cols-12 items-start gap-x-4 gap-y-3 border-b border-line last:border-0 py-8 lg:items-center lg:py-12"
    >
      <h3 className="col-span-10 lg:col-span-5 text-2xl lg:text-[clamp(1.9rem,2.3vw,2.6rem)] leading-[1.15] text-ink transition-colors duration-300 group-hover:text-ink-bright">
        <RollText>{item.title}</RollText>
      </h3>
      <span className="col-span-2 flex justify-end lg:hidden">
        <span className="arrow-circle !h-10 !w-10">
          <BsArrowUpRight size={13} />
        </span>
      </span>
      <p className="col-span-12 lg:col-span-6 text-sm lg:text-base text-ink-muted leading-relaxed lg:pr-10">
        {item.desc}
      </p>
      <span className="hidden lg:flex lg:col-span-1 justify-end">
        <span className="arrow-circle">
          <BsArrowUpRight size={14} />
        </span>
      </span>
    </a>
  );
};

export default ShowcaseCard;
