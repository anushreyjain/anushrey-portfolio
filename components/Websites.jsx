"use client";

import React from "react";
import { websites } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionWarpper from "./SectionWarpper";
import WebsiteCard from "./WebsiteCard";
import Corners from "./Corners";

const Websites = () => {
  const { ref } = useSectionInView("Websites", 0.3);

  return (
    <SectionWarpper
      title="Crafted for the Web"
      label="Websites"
      linkLabel="Let's build yours"
      routeLink="#contact"
      ref={ref}
      id="websites"
    >
      <div className="relative">
        <Corners />
        <div className="cell-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site, index) => (
            <WebsiteCard key={site.url} site={site} index={index} />
          ))}
        </div>
      </div>
    </SectionWarpper>
  );
};

export default Websites;
