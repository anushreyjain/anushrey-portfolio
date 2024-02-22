import { socialLinks } from "@/lib/data";
import React from "react";

const SocialLinksContainer = ({...property}) => {
  return (
    <div className={` ${property.className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          target="_blank"
          href={social.href}
          className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinksContainer;
