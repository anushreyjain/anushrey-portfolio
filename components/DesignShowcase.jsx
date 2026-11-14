"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Corners from "./Corners";
import behance from "@/lib/behance.json";
import RollText from "./RollText";

const COUNT = 6;
// Projects to leave out of the showcase (Behance project ids)
const HIDDEN_IDS = ["145461769"]; // Gallery animation - Adobe XD

const items = behance.items.filter((item) => !HIDDEN_IDS.includes(item.id)).slice(0, COUNT);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Slide = ({ item, index }) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="View"
    className="group framed block w-[82vw] sm:w-[60vw] lg:w-[40vw] xl:w-[36vw] max-w-[40rem] flex-shrink-0 snap-start bg-white/[0.02] p-4 lg:p-5 transition-colors duration-500 hover:border-line-strong"
  >
    <Corners />
    <div className="mb-4 flex items-center justify-between eyebrow !text-ink-faint">
      <span className="transition-colors duration-300 group-hover:!text-accent">
        No. {String(index + 1).padStart(2, "0")}
      </span>
      <span>{item.year}</span>
    </div>

    <div className="relative aspect-[808/632] overflow-hidden bg-surface-2">
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 40vw, 82vw"
          className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05]"
        />
      )}
    </div>

    <div className="mt-6 flex items-center justify-between gap-6">
      <h3 className="font-serif text-xl lg:text-[1.65rem] leading-snug text-ink-bright">
        <RollText>{item.title}</RollText>
      </h3>
      <span className="arrow-circle">
        <BsArrowUpRight size={14} />
      </span>
    </div>
  </a>
);

const EndCard = () => (
  <a
    href={behance.profile}
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="Open"
    className="group framed flex w-[70vw] sm:w-[40vw] lg:w-[26vw] max-w-[26rem] flex-shrink-0 snap-start flex-col justify-between self-stretch p-8 lg:p-10 aspect-[808/632] lg:aspect-auto bg-white/[0.02] transition-colors duration-500 hover:border-line-strong"
  >
    <Corners />
    <span className="eyebrow">Behance</span>
    <div className="flex flex-col gap-6">
      <p className="font-serif text-4xl lg:text-5xl leading-[1.05] text-ink-bright">
        <em className="italic text-ink-muted">50+</em> more designs
      </p>
      <span className="flex items-center gap-4 text-ink-muted group-hover:text-ink-bright transition-colors">
        See everything
        <span className="arrow-circle">
          <BsArrowUpRight size={14} />
        </span>
      </span>
    </div>
  </a>
);

const DesignShowcase = () => {
  const { ref } = useSectionInView("Design Showcase", 0.2);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(1);

  useIsoLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      setDistance(desktop ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const x = useTransform(smooth, (v) => -v * distance);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(items.length, Math.max(1, Math.round(v * (items.length - 1)) + 1)));
  });

  const pinned = distance > 0;

  return (
    <section ref={ref} id="designs" className="relative w-full scroll-mt-10 pt-20 lg:pt-32">
      <div className="px-5 lg:px-[7.5rem]">
        <SectionHeading
          title="Design Allure"
          index="04"
          label="Design work"
          linkLabel="View all"
          routeLink={behance.profile}
          className="container-x"
        />
      </div>

      <div ref={pinRef} style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}>
        <div
          className={
            pinned
              ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
              : "pt-12 pb-20"
          }
        >
          <div className="px-5 lg:px-[7.5rem] mb-10 lg:mb-12">
            <div className="container-x flex items-end justify-between gap-8">
              <p className="font-serif text-2xl lg:text-4xl leading-snug text-ink-muted max-w-2xl">
                <em className="italic text-ink-bright">50+ designs</em> across web,
                apps and brands.
              </p>
              {pinned && (
                <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
                  <span className="eyebrow !text-ink tabular-nums">
                    {String(active).padStart(2, "0")}
                    <span className="text-ink-faint"> / {String(items.length).padStart(2, "0")}</span>
                  </span>
                  <span className="relative block h-px w-40 bg-line">
                    <motion.span
                      className="absolute inset-y-0 left-0 w-full origin-left bg-ink"
                      style={{ scaleX: smooth }}
                    />
                  </span>
                </div>
              )}
            </div>
          </div>

          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className={`flex gap-6 lg:gap-10 pl-5 pr-5 lg:pl-[max(7.5rem,calc((100vw-101.25rem)/2))] lg:pr-[7.5rem] ${
              pinned ? "w-max" : "overflow-x-auto snap-x snap-mandatory scroll-pl-5 scrollbar-none"
            }`}
          >
            {items.map((item, index) => (
              <Slide key={item.id} item={item} index={index} />
            ))}
            <EndCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
