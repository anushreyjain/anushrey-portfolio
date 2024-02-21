"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <About />
      <Showcase />
      {/* <Experience />
      <Skills />
      <Contact /> */}
    </main>
  );
}
