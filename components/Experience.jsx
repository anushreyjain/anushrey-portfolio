"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import SectionWarpper from "./SectionWarpper";

// The date-scaled timeline is desktop-only. It is loaded as a separate chunk and only
// mounted on large screens, so phones and tablets never download or run it.
const Timeline = dynamic(() => import("./Timeline"), { ssr: false });

const Experience = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowTimeline(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
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
      {/* The date-scaled timeline needs width; on phones/tablets the cards below carry the same info. */}
      <div className="mb-16 hidden min-h-[312px] pt-6 lg:block">
        {showTimeline && <Timeline />}
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
