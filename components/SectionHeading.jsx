import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, ...property }) => {
  return (
    <div className={`flex w-full justify-center ${property.className}`}>
      <div className="w-fit relative">
        <motion.h2
          initial={{
            opacity: 0,
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
          className="text-2xl lg:text-4xl font-semibold text-zinc-100 capitalize text-center"
        >
          {title}{" "}
        </motion.h2>
        <div className="w-6 h-6 absolute -top-[0.8rem] -left-[1rem]">
          <Image
            src={"/decorative-lines.svg"}
            alt="decorative-lines"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
