"use client";

import About from "@/components/About";
import FullScreenNavbar from "@/components/FullScreenNavbar";
import Intro from "@/components/Intro";
import { useState } from "react";
import dynamic from "next/dynamic";

// Below-the-fold sections are split into their own chunks so the hero hydrates first.
// They are still server-rendered, so content and SEO are unchanged.
const Websites = dynamic(() => import("@/components/Websites"));
const Showcase = dynamic(() => import("@/components/Showcase"));
const DesignShowcase = dynamic(() => import("@/components/DesignShowcase"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [isFullNavbar, setIsFullNavbar] = useState(false);

  return (
    <main className={`flex flex-col items-center`}>
      {isFullNavbar && (
        <FullScreenNavbar
          isFullNavbar={isFullNavbar}
          setIsFullNavbar={setIsFullNavbar}
        />
      )}
      <div className={`w-full ${isFullNavbar && "opacity-0"}`}>
        {/* <Header setIsFullNavbar={setIsFullNavbar} /> */}
        <Intro />
        <About />
        <Websites />
        <Showcase />
        <DesignShowcase />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
