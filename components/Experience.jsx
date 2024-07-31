"use client";

import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import { motion, useScroll } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import SectionWarpper from "./SectionWarpper";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <>
      <SectionWarpper
        routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/details/experience/'}
        title={"Experience"}
        lineColor={'#09090B'}
        wrapperClasses={'text-left'}
        ref={ref}
        id={'experience'}
        className=""
      >
        <div className=" bg-opacity-20 -z-10 absolute top-[50%] md:top-[50%] 
        lg:top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[5rem] lg:w-[68.75rem] bg-[#E8CBC0]">
          <div className="bg-opacity-20 -z-10 absolute  h-[31.25rem] w-[50rem] 
          rounded-full blur-[10rem] lg:w-[68.75rem]  bg-[#636FA4]"></div>
        </div>

        <div className="flex w-full justify-center">
          <div
            className="w-[90vw] md:w-[90vw] lg:w-[80vw] h-full px-5 py-8 lg:px-20 
          lg:py-20 bg-zinc-900 lg:bg-zinc-950 shadow-lg shadow-black/[0.03] 
          backdrop-blur-[0.5rem] bg-opacity-80 lg:bg-opacity-75 flex flex-col gap-14 
          lg:gap-36 rounded-[10vw] sm:rounded-[5vw]"
          >
            {experiencesData.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </SectionWarpper>

    </>
  );
};

export default Experience;
