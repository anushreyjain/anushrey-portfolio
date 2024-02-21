"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import Image from "next/image";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-[999] fixed top-0 w-full bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] px-4 sm:px-20"
    >
      <nav className="flex flex-row w-full py-2 sm:top-[1.7rem] sm:py-0 items-center justify-between">
        <div className="w-[2.5rem] h-[2.5rem] sm:w-[3.875rem] sm:h-[5.375rem] relative flex-shrink-0">
          <Image alt="logo" src={"/logo.svg"} layout="fill" />
        </div>
        <div className="hamburger sm:hidden">
          <p className="text-sm">Menu</p>
        </div>
        <ul className="sm:flex hidden flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex items-center w-full px-3 py-3 hover:text-gray-950 transition justify-center dark:text-gray-500  dark:hover:text-gray-300",
                  {
                    "!text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute bottom-2 -z-10 border-b w-3/12 text-center border-neutral-200"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
