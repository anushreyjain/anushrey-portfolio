"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import StatusCard from "./StatusCard";
import { stats } from "@/lib/data";
import useMediaQuery from "@/hooks/useMediaQuery";
import Skills from "./Skills";
import SectionWarpper from "./SectionWarpper";

const About = () => {
  const { ref } = useSectionInView("About");

  const isDesktopOrLaptop = useMediaQuery("(min-width: 960px)");

  const variants = isDesktopOrLaptop
    ? {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: {
        ease: "linear",
      },
    }
    : {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
      transition: {},
    };


  return (
    <SectionWarpper
      routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/'}
      title={"About Me"}
      lineColor={'#09090B'}
      wrapperClasses={'text-center'}
      ref={ref}
      id={'about'}
    >
      <motion.div
        variants={variants}
        initial={variants.initial}
        whileInView={variants.whileInView}
        className=""
        transition={variants.transition}
        viewport={{
          once: true,
        }}
      >
        <p className="mb-3 text-base md:text-xl md:leading-relaxed lg:text-2xl 
          leading-relaxed lg:leading-loose text-neutral-200">
          I am a creative{" "}
          <span className="font-semibold"> UI Engineer & UI/UX Designer </span> with an
          experience of <span className="font-semibold"> 3 Years</span>,
          I am knowledgeable
          in developing & designing user-friendly interfaces and have a keen eye for
          detail, ensuring that every pixel is in place to deliver a seamless
          user experience.
        </p>
        <div className="max-w-[101.25rem] mx-auto">
          <p className="mt-12 text-base md:text-xl text-neutral-200 
        font-semibold md:leading-relaxed lg:text-2xl leading-relaxed lg:leading-loose">
            My expertise includes -
          </p>
          <Skills />
        </div>
        <div className="w-full flex items-center mt-20 justify-between md:justify-center ">
          {stats.map((item, index) => (
            <StatusCard
              key={index}
              index={index}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </motion.div>
    </SectionWarpper>
  );
};

export default About;
