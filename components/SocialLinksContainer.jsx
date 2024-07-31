"use client";

import { socialLinks } from "@/lib/data";
import React from "react";
import MagneticButton from "./MagneticButton";

const SocialLinksContainer = ({ ...property }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${property.className}`}>
      {socialLinks.map((social, index) => (
        <MagneticButton key={index}>
          <div 
            onClick={(e) => handleClick(e, social.href)} 
            className="lg:p-6 px-3 cursor-pointer group"
          >
            <div
              className="flex items-center gap-2 p-4 text-gray-700 rounded-full 
              lg:group-hover:scale-[1.25] transition 
              group cursor-pointer border lg:group-hover:bg-custom-gradient border-black/10 bg-white/10 text-white/60"
            >
              <span className="">
                {social.icon}
              </span>
            </div>
          </div>
        </MagneticButton>
      ))}
    </div>
  );
};

export default SocialLinksContainer;