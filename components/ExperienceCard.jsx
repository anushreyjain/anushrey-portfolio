import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ExperienceCard = ({ item, ...property }) => {
  return (
    <div className="flex flex-col justify-between lg:gap-5 w-full max-w-[101.25rem] mx-auto">
      <div className="">
        <h2 className="text-2xl group lg:text-4xl w-full font-semibold underline 
        cursor-pointer lg:hover:text-zinc-300 transition-all text-zinc-300
         lg:text-zinc-400">
          <a
            href={item.href}
            target="_blank"
            className="w-full justify-between flex items-end gap-0.5"
          >
            {item.company}
            <span className="lg:group-hover:-translate-y-0.5 lg:group-hover:translate-x-0.5 
            transition-all rotate-[40deg]">
              <IoIosArrowRoundUp />
            </span>
          </a>
        </h2>

        <h2 className="text-xl lg:text-2xl font-medium text-zinc-400 mt-1 lg:mt-3">
          {item.profile}
        </h2>
        <h2 className="text-sm lg:text-base font-medium text-zinc-400">
          {item.duration}
        </h2>
      </div>
      <div className="text-base">
        <p className="text-sm text-zinc-400 lg:text-white lg:tracking-wide 
        lg:text-base lg:leading-relaxed mb-3">
          {item?.tagline}
        </p>
        <ul className="text-sm lg:text-lg list-disc
         text-zinc-400 lg:text-white list-inside lg:tracking-wide 
         lg:leading-relaxed flex flex-col gap-2 lg:gap-3">
          {item?.list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
