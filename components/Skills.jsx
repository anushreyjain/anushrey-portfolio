"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SkillCircle from "./SkillCircle";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const getRandomAngle = () => {
  return Math.floor(Math.random() * 360);
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const [gradientAngles, setGradientAngles] = useState([]);

  useEffect(() => {
    const angles = skillsData.map(() => getRandomAngle());
    setGradientAngles(angles);
  }, []);

  return (
    <section ref={ref} id="skills" className="w-full px-20 text-center pt-32">
      <SectionHeading title="Skills 🥷🏼" />
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 items-center w-full py-20">
        {skillsData.map((item, index) => (
          <SkillCircle
            key={index}
            variants={fadeInAnimationVariants}
            initial={fadeInAnimationVariants.initial}
            whileInView={fadeInAnimationVariants.animate}pa
            index={index}
            item={item}
            gradientAngles={gradientAngles}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
