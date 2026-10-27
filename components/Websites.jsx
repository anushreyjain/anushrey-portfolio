"use client";

import React from "react";
import { websites } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionWarpper from "./SectionWarpper";
import WebsiteCard from "./WebsiteCard";

const Websites = () => {
  const { ref } = useSectionInView("Websites", 0.3);

  return (
    <SectionWarpper
      title="Websites I've Built"
      linkLabel="Let's build yours"
      routeLink="#contact"
      lineColor="#0A0A0D"
      ref={ref}
      id="websites"
      className="lg:!min-h-0"
    >
      <div className="max-w-[101.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {websites.map((site) => (
          <WebsiteCard key={site.url} site={site} />
        ))}
      </div>
    </SectionWarpper>
  );
};

export default Websites;
