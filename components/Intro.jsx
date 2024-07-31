"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import SocialLinksContainer from "./SocialLinksContainer";
import ShinyButton from "./ShinyButton";
import Button from "./Button";
import RubberBandText from "./RubberBandText";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (<>
    <section
      ref={ref}
      className="w-full h-screen text-center flex flex-col justify-center 
      items-center lg:px-32 "
      id="home"
    >
      <div className="flex flex-col gap-1 items-center">
        {/* Mobile profile photo */}
        <div className="lg:hidden">
          <motion.div
            className="relative w-[5rem] h-[5rem] mb-5 flex items-center justify-center"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "5rem", opacity: 1 }}
            transition={{

              ease: [0.76, 0, 0.24, 1],
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Image
              src={"/anushrey.png"}
              alt="photo"
              quality={95}
              loading="lazy"
              width={100}
              height={100}
              className="rounded-full border-4 object-cover shadow-xl"
            />
          </motion.div>
        </div>
        {/* Mobile profile photo */}

        <motion.h3
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium white-gradient-text"
        >
          Hello, I&apos;m
        </motion.h3>
        <div className="flex items-center gap-5 sm:my-2">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex relative"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[3.8rem] 
            font-semibold white-gradient-text !leading-snug  ">
              Anushrey Jain
            </h2>
          </motion.div>
          <div className="lg:flex items-center justify-center hidden">
            <motion.div
              className="relative w-[5.5rem] h-[5.5rem] flex items-center justify-center"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "5.5rem", opacity: 1 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <Image
                src={"/anushrey.png"}
                alt="photo"
                quality={95}
                property='true'
                width={100}
                height={100}
                className="rounded-full border-2 object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:text-3xl lg:text-5xl font-medium mt-3 mb-8 flex gap-2 lg:gap-5 
          items-center "
        >
          {/* <RubberBandText word={'Creative UI Engineer and Designer'} /> */}
          Creative UI Engineer and Designer
          <span className='absolute left-0 -bottom-2 lg:-bottom-8 w-[5rem] 
          lg:w-[14.375rem] lg:h-[1.875rem] h-[0.563rem]'>
            <Image src={'/multi-curved-lines.svg'} alt='arrow' layout='fill' />
          </span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center gap-4 justify-center px-4 
        text-lg font-medium lg:mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex items-center flex-col lg:flex-row gap-5 text-sm lg:text-lg">
          <Button label={`Got a project ? Let's talk`} link={'#contact'}
            onClick={() => {
              setActiveSection("Let's talk");
              setTimeOfLastClick(Date.now());
            }}
          />
          <a
            href="/Anushrey_Jain_Resume_2024.pdf"
            download>
            <ShinyButton>
              Download CV
              <HiDownload className="opacity-70 lg:group-hover:translate-y-0.5 transition" />
            </ShinyButton>
          </a>
        </div>
        <SocialLinksContainer className="flex items-center mt-6 lg:mt-1 lg:px-10" />
      </motion.div>
    </section >
  </>
  );
};

export default Intro;
