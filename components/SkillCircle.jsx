import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillCircle = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
    className="cell-hover group flex flex-col items-center justify-center gap-4 px-3 py-8 lg:py-10"
  >
    <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-line bg-surface-2 transition-all duration-700 ease-out-expo group-hover:border-line-strong group-hover:-translate-y-1.5 group-hover:scale-110">
      <Image
        src={`/logo/${item.logo}.svg`}
        alt=""
        loading="lazy"
        width={26}
        height={26}
        className="h-6 w-6 lg:h-7 lg:w-7 object-contain grayscale-[60%] opacity-80 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </div>
    <span className="text-sm text-ink-muted transition-colors duration-300 group-hover:text-ink-bright">
      {item.name}
    </span>
  </motion.div>
);

export default SkillCircle;
