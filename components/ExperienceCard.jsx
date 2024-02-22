import React from "react";

const ExperienceCard = ({ item, ...property }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 w-full">
      <div className="sm:w-[40vw]">
        <h2 className="text-2xl sm:text-4xl font-semibold underline cursor-pointer sm:hover:text-zinc-300 transition-all text-zinc-300 sm:text-zinc-400">
          {item.company}
        </h2>

        <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 mt-3">
          {item.profile}
        </h2>
        <h2 className="text-sm sm:text-base font-medium text-zinc-400">
          {item.duration}
        </h2>
      </div>
      <div className="sm:w-[60vw] text-base">
        <p className="text-sm text-zinc-400 sm:text-white sm:tracking-wide sm:text-base sm:leading-relaxed mb-3">
          {item?.tagline}
        </p>
        <ul className="text-xs sm:text-base list-disc text-zinc-400 sm:text-white list-inside sm:tracking-wide sm:leading-relaxed flex flex-col gap-2 sm:gap-3">
          {item?.list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
