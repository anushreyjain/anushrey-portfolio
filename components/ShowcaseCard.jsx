import React from "react";
import { BsArrowRight } from "react-icons/bs";
import RoundedOutlineButton from "./RoundedOutlineButton";

const ShowcaseCard = ({ item, ...property }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      className="w-full flex flex-col lg:flex-row items-start lg:items-center hover:border-zinc-700 hover:text-white group cursor-pointer justify-between border-b last:border-0
       border-zinc-700 lg:border-zinc-900 py-7 lg:py-14 transition-all max-w-[101.25rem] mx-auto"
    >
      <div className="flex justify-between w-full lg:w-fit">
        <p className="text-base 
       text-zinc-400 lg:text-xl mr-0 lg:mr-10 flex-shrink-0 mb-3 lg:mb-0">
          {item.sNo}
        </p>
        <span className="inline-block flex-shrink-0 lg:hidden">
          <BsArrowRight size={20} className="opacity-70 -rotate-45 
        lg:group-hover:-translate-y-1.5 lg:group-hover:translate-x-1.5 transition" />
        </span>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h2 className="text-2xl lg:text-4xl text-zinc-200 lg:text-zinc-400
         lg:group-hover:text-zinc-200 font-semibold">
          {item.title}
        </h2>
        <p className="text-sm lg:text-xl lg:tracking-wider text-zinc-400">
          {item.desc}
        </p>
        {/* <ul className="text-xs lg:text-base tracking-normal lg:tracking-wider list-disc list-inside lg:leading-relaxed text-zinc-400">
          {item?.workDone?.map((list, index) => (
            <li key={index} className="mb-2 lg:mb-0">
              {list}
            </li>
          ))}
        </ul> */}
      </div>
      <div className="flex-shrink-0 mt-5 lg:mt-0 lg:ml-40 hidden lg:block">
        <BsArrowRight size={25} className="opacity-50 -rotate-45 
        group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition" />
      </div>
    </a>
  );
};

export default ShowcaseCard;
