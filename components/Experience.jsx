"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative min-h-screen w-full flex flex-col items-center"
    >
      <SectionHeading title={"Experience 💼"} />
      <div className=" bg-opacity-20 -z-10 absolute top-[45%] left-1/2 -translate-x-[50%] -translate-y-[50%] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#E8CBC0]">
        <div className="bg-opacity-20 -z-10 absolute  h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]  bg-[#636FA4]"></div>
      </div>

      <div className="w-[70vw] h-full p-20 bg-zinc-950 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-opacity-75 flex flex-col gap-36 mt-20 rounded-[5vw]">
        {experiencesData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
