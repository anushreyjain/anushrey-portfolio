"use client";

import { socialLinks } from "@/lib/data";
import React from "react";
import MagneticButton from "./MagneticButton";

const SocialLinksContainer = ({ ...property }) => {
  return (
    <div className={`${property.className}`}>
      {socialLinks.map((social) => (
        <MagneticButton key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Anushrey Jain on ${social.name}`}
            className="block lg:p-5 px-3 group"
          >
            <span className="btn-icon-round">{social.icon}</span>
          </a>
        </MagneticButton>
      ))}
    </div>
  );
};

export default SocialLinksContainer;
