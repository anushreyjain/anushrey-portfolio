"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import SkillCircle from "./SkillCircle";
import Corners from "./Corners";
import Sparkle from "./Sparkle";

const Skills = () => (
  <div className="relative">
    <Corners />
    <div className="cell-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {skillsData.map((item, index) => (
        <SkillCircle key={item.name} item={item} index={index} />
      ))}
      {/* Keeps every row full when the count isn't a multiple of 6 */}
      {skillsData.length % 6 !== 0 && (
        <div className="flex flex-col items-center justify-center gap-4 px-3 py-8 lg:py-10 text-center">
          <span className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-dashed border-line-strong text-accent">
            <Sparkle size={16} />
          </span>
          <span className="text-sm italic font-serif text-ink-faint">Always learning</span>
        </div>
      )}
    </div>
  </div>
);

export default Skills;
