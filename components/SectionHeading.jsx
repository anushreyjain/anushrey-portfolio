import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnimatedLine from "./AnimatedLine";
import ShinyLink from "./ShinyLink";


const SectionHeading = ({ title, routeLink, lineColor, linkLabel, ...property }) => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 960px)');

  return (
    <div className={` ${property.className}`}>
      {/* <AnimatedLine className="hidden lg:block" margin={'m-0'} lineBgColor={lineColor} /> */}
      <hr className="mb-4 border-zinc-700  w-full"  />
      <div className="flex items-center justify-between">
        <div className="w-fit relative">
          <motion.h2
            initial={{
              opacity: isDesktopOrLaptop ? 0 : 1,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="text-xl lg:text-3xl tracking-wider font-medium uppercase text-zinc-100  
            white-gradient-text"
          >
            {title}
          </motion.h2>
        </div>
        <ShinyLink routeLink={routeLink} >
          {linkLabel || 'Know more'}
        </ShinyLink>
      </div>
    </div >
  );
};

export default SectionHeading;
