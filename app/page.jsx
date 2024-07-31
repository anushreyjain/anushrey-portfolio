"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import DesignShowcase from "@/components/DesignShowcase";
import Experience from "@/components/Experience";
import FullScreenNavbar from "@/components/FullScreenNavbar";
import Intro from "@/components/Intro";
import Showcase from "@/components/Showcase";
import {useState } from "react";

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
      <div className={`${isFullNavbar && "opacity-0"}`}>
        {/* <Header setIsFullNavbar={setIsFullNavbar} /> */}
        <Intro />
        <About />
        <Showcase />
        <DesignShowcase />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
