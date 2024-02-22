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
      className={`flex flex-col gap-5 items-center ${property.className}`}
    >
      <div
        className="w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] rounded-full border-[3px] border-zinc-900 relative flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(${gradientAngles[index]}deg, var(--color-darkBlue), var(--color-zinc-950))`,
        }}
      >
        <div className="relative w-[1rem] h-[1rem] sm:w-[2rem] sm:h-[2rem] flex justify-center items-center">
          <Image src={`/logo/${item.logo}.svg`} alt="logo" layout="fill" />
        </div>
      </div>
      <h3 className="text-base sm:text-2xl font-medium text-zinc-400">{item.name}</h3>
    </motion.div>
  );
};

export default SkillCircle;
