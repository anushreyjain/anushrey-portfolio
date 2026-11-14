"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import SectionWarpper from "./SectionWarpper";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <SectionWarpper
      routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/details/experience/'}
      title={"Where I've Worked"}
      index="05"
      label="Experience"
      wrapperClasses={'text-left'}
      ref={ref}
      id={'experience'}
    >
      <div>
        {experiencesData.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </SectionWarpper>
  );
};

export default Experience;
