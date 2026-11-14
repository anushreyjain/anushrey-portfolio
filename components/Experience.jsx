"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";
import SectionWarpper from "./SectionWarpper";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <SectionWarpper
      routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/details/experience/'}
      title={"The Journey So Far"}
      label="Experience"
      wrapperClasses={'text-left'}
      ref={ref}
      id={'experience'}
    >
      <div className="mb-10 lg:mb-16 pt-6">
        <Timeline />
      </div>
      <div>
        {experiencesData.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </SectionWarpper>
  );
};

export default Experience;
