"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { companyWorkedWith, stats } from "@/lib/data";
import StatusCard from "./StatusCard";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      className="text-center relative overflow-hidden leading-8 sm:px-20 py-20 sm:py-0 sm:h-screen rounded-[5vw] bg-[#0f0f12] w-full"
      ref={ref}
      id="about"
    >
      <div className="bg-opacity-20 absolute bottom-10 -left-[40%] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#E8CBC0]"></div>
      <div className="h-full text-center px-10 sm:px-40 flex flex-col justify-center">
        <SectionHeading title={"About Me 👨🏻‍💼 "} className="mb-7 sm:mb-10" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            ease: "linear",
          }}
          viewport={{
            once: true,
          }}
          className="mb-3 text-base sm:text-2xl leading-relaxed sm:leading-loose"
        >
          I am a creative{" "}
          <span className="font-semibold"> Frontend Engineer </span> with an
          experience of <span className="font-semibold"> 3.5 Years</span>,
          having a solid foundation in{" "}
          <span className="font-semibold">
            {" "}
            HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, SASS,
            Bootstrap, Material UI, Atomic Design, Storybook, Webflow,
          </span>{" "}
          and design software such as
          <span className="font-semibold">
            {" "}
            Figma, Adobe XD and Balasmiq.
          </span>{" "}
          Also have sound knowledge of{" "}
          <span className="font-semibold">Angular.</span> I am knowledgeable in
          designing user-friendly interfaces and have a keen eye for detail,
          ensuring that every pixel is in place to deliver a seamless user
          experience.
        </motion.p>
        <div className="w-full flex items-center mt-10 sm:mt-20 justify-between sm:justify-center sm:gap-36 ">
          {stats.map((item, index) => (
            <StatusCard
              key={index}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
