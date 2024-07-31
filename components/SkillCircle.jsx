import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillCircle = ({
  item,
  gradientAngles,
  index,
  variants,
  initial,
  whileInView,
  ...property
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      className={`flex flex-col gap-2 lg:gap-5 items-center ${property.className}`}
    >
      <div
        className="w-[3.8rem] h-[3.8rem] lg:w-[4.7rem] lg:h-[4.7rem] rounded-full border-[2px]
         border-zinc-900 relative flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(${gradientAngles[index]}deg, var(--color-darkBlue), var(--color-zinc-950))`,
        }}
      >
        <div className="relative w-[1.3rem] h-[1.3rem] lg:w-[1.7rem] lg:h-[1.7rem] 
        flex justify-center items-center">
          <Image
            src={`/logo/${item.logo}.svg`}
            alt="logo"
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h3 className="text-sm lg:text-lg font-medium text-zinc-400">
        {item.name}
      </h3>
    </motion.div>
  );
};

export default SkillCircle;
