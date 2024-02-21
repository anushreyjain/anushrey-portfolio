import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ShowcaseCard = ({ item, ...property }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      className="w-fill flex items-center hover:border-zinc-700 hover:text-white group cursor-pointer justify-between border-b border-zinc-900 py-10 transition-all"
    >
      <p className="text-xl mr-10 flex-shrink-0">{item.sNo}</p>
      <div className="flex flex-col gap-2 flex-grow">
        <h2 className="text-4xl text-zinc-400 group-hover:text-zinc-200 font-semibold">
          {item.title}
        </h2>
        <p className="text-xl tracking-wider text-zinc-400">{item.desc}</p>
        <ul className="text-base tracking-wider list-disc list-inside leading-relaxed text-zinc-400">
          {item?.workDone?.map((list, index) => (
            <li key={index} className="">
              {list}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 ml-40">
        <button className="border border-zinc-500 outline-none focus:scale-100 text-gray-50 py-3 px-7 flex items-center gap-2 rounded-full group-hover:scale-[1.05] group-hover:bg-zinc-950 active:scale-105 transition group">
          Veiw Project{" "}
          <BsArrowRight className="opacity-70 -rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </a>
  );
};

export default ShowcaseCard;
