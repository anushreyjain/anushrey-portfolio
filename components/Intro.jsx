"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { FaBehance } from "react-icons/fa";
import SocialLinksContainer from "./SocialLinksContainer";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="w-full h-screen text-center flex flex-col justify-center items-center"
      id="home"
    >
      <div className="flex flex-col gap-1 items-center">
        {/* Mobile profile photo */}
        <div className="sm:hidden">
          <motion.div
            className="relative w-[5rem] h-[5rem]  mb-5"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "5rem", opacity: 1 }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="photo"
              quality={95}
              priority={true}
              layout="fill"
              className="rounded-full border-4 object-cover shadow-xl"
            />
          </motion.div>
        </div>
        {/* Mobile profile photo */}

        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl sm:text-5xl font-medium"
        >
          Hello 👋🏼, I&apos;m
        </motion.h1>
        <div className="flex items-center gap-5 sm:my-2">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex relative"
          >
            <h1 className="text-3xl sm:text-[4rem] font-semibold">
              Anushrey Jain
            </h1>
            <div className="w-5 h-5 sm:w-9 sm:h-9 absolute -top-[0.5rem] -left-[0.5rem]  sm:-top-[2rem] sm:-left-[0.5rem] rotate-12">
              <Image
                src={"/decorative-lines.svg"}
                alt="decorative-lines"
                layout="fill"
              />
            </div>
          </motion.div>
          <div className="sm:flex items-center justify-center hidden">
            <motion.div
              className="relative w-[6rem] h-[6rem]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="photo"
                quality={95}
                priority={true}
                layout="fill"
                className="rounded-full border-4 object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sm:text-5xl font-medium"
        >
          A Creative Frontend Engineer
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center gap-4 justify-center px-4 text-lg font-medium mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex items-center flex-col sm:flex-row gap-3 text-sm sm:text-lg">
          <Link
            href={"#contact"}
            onClick={() => {
              setActiveSection("Let's talk");
              setTimeOfLastClick(Date.now());
            }}
            className="border border-zinc-500 outline-none text-gray-50 py-3 px-7 flex items-center gap-2 rounded-full hover:scale-[1.05] hover:bg-zinc-950 active:scale-105 transition group"
          >
            Got a project ? Let&apos;s talk{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
          </Link>

          <a
            href="/CV.pdf"
            download
            className="flex w-fit items-center gap-2 bg-white px-7 py-3 rounded-full outline-none hover:scale-[1.05] active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10"
          >
            Download CV{" "}
            <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
          </a>
        </div>

        <SocialLinksContainer className="flex items-center gap-3" />
      </motion.div>
    </section>
  );
};

export default Intro;
