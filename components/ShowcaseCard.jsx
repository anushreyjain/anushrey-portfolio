import React from "react";
import { BsArrowRight } from "react-icons/bs";
import RoundedOutlineButton from "./RoundedOutlineButton";

const ShowcaseCard = ({ item, ...property }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      className="w-fill flex flex-col sm:flex-row items-start sm:items-center hover:border-zinc-700 hover:text-white group cursor-pointer justify-between border-b border-zinc-900 py-5 sm:py-10 transition-all"
    >
      <p className="text-base text-zinc-400 sm:text-xl mr-0 sm:mr-10 flex-shrink-0 mb-3 sm:mb-0">
        {item.sNo}
      </p>
      <div className="flex flex-col gap-2 flex-grow">
        <h2 className="text-2xl sm:text-4xl text-zinc-200 sm:text-zinc-400 sm:group-hover:text-zinc-200 font-semibold">
          {item.title}
        </h2>
        <p className="text-sm sm:text-xl sm:tracking-wider text-zinc-400">
          {item.desc}
        </p>
        <ul className="text-xs sm:text-base tracking-normal sm:tracking-wider list-disc list-inside sm:leading-relaxed text-zinc-400">
          {item?.workDone?.map((list, index) => (
            <li key={index} className="mb-2 sm:mb-0">
              {list}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 mt-5 sm:mt-0 sm:ml-40">
        <RoundedOutlineButton>
          <BsArrowRight className="opacity-70 -rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
        </RoundedOutlineButton>
      </div>
    </a>
  );
};

export default ShowcaseCard;
