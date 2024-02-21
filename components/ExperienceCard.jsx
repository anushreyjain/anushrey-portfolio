import React from "react";

const ExperienceCard = ({ item, ...property }) => {
  return (
    <div className="flex justify-between gap-10 w-full">
      <div className="w-[40vw] ">
        <h2 className="text-4xl font-semibold underline cursor-pointer hover:text-zinc-300 transition-all text-zinc-400">
          {item.company}
        </h2>

        <h2 className="text-2xl font-medium text-zinc-400 mt-3">
          {item.profile}
        </h2>
        <h2 className="text-base font-medium text-zinc-400">{item.duration}</h2>
      </div>
      <div className="w-[60vw] text-base">
        <p className="tracking-wide leading-relaxed mb-3">{item?.tagline}</p>
        <ul className="list-disc list-inside tracking-wide leading-relaxed flex flex-col gap-3">
          {item?.list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
