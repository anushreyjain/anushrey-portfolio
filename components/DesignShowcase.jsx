"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import behance from "@/lib/behance.json";
import RollText from "./RollText";

const COUNT = 10;
// Projects to leave out of the showcase (Behance project ids)
const HIDDEN_IDS = [
  "145461769", // Gallery animation - Adobe XD
  "142302601", // Watch website hero section
];

// Short card titles (keyed by Behance id) so every card fits on one line.
const SHORT_TITLES = {
  "203801271": "Seamless Booking",
  "146874613": "Stock Trading Landing",
  "146124475": "Ecommerce Product Page",
  "145190879": "To-Do App Landing",
  "145190015": "Web3 Landing Page",
  "142303015": "Architecture Website",
  "142302827": "Photography Website",
  "142302729": "Career Guide Website",
  "142302495": "Minimal Fashion",
};

const items = behance.items.filter((item) => !HIDDEN_IDS.includes(item.id)).slice(0, COUNT);

// The set is repeated so the ring always overflows even very wide screens.
const COPIES = 2;
const GAP = 22;
const AUTO_SPEED = 0.45; // px per frame at 60fps
const MAX_TILT = 32; // deg at the screen edge
const MAX_LIFT = 90; // px toward the viewer at the screen edge

const cardClasses =
  "group absolute left-1/2 top-1/2 flex h-[372px] w-[250px] sm:h-[402px] sm:w-[280px] lg:h-[432px] lg:w-[310px] flex-col overflow-hidden rounded-[1.4rem] border border-line bg-surface p-3 select-none will-change-transform transition-colors duration-500 hover:border-line-strong";

const DesignCard = ({ item, cardRef }) => (
  <a
    ref={cardRef}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    draggable={false}
    data-cursor="View"
    className={cardClasses}
  >
    <div className="relative aspect-square flex-shrink-0 overflow-hidden rounded-[1rem] bg-surface-2">
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          draggable={false}
          sizes="320px"
          className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.06]"
        />
      )}
    </div>
    <div className="flex flex-1 flex-col justify-between gap-5 px-2 pb-2 pt-5">
      <div className="flex items-center justify-between">
        <span className="eyebrow !text-ink-faint transition-colors duration-300 group-hover:!text-accent">
          {item.year}
        </span>
        <span className="arrow-circle !h-9 !w-9">
          <BsArrowUpRight size={12} />
        </span>
      </div>
      <h3 title={item.title} className="font-serif text-xl lg:text-[1.4rem] leading-snug text-ink-bright">
        <RollText className="!block w-full" textClassName="truncate">
          {SHORT_TITLES[item.id] || item.title}
        </RollText>
      </h3>
    </div>
  </a>
);

const EndCard = ({ cardRef }) => (
  <a
    ref={cardRef}
    href={behance.profile}
    target="_blank"
    rel="noopener noreferrer"
    draggable={false}
    data-cursor="Open"
    className={`${cardClasses} justify-between !p-7`}
  >
    <span className="eyebrow">Behance</span>
    <div className="flex flex-col gap-6">
      <p className="font-serif text-4xl lg:text-5xl leading-[1.05] text-ink-bright">
        <em className="italic text-ink-muted">100+</em> more designs
      </p>
    </div>
    <span className="flex items-center justify-between text-ink-muted transition-colors group-hover:text-ink-bright">
      See everything
      <span className="arrow-circle">
        <BsArrowUpRight size={14} />
      </span>
    </span>
  </a>
);

const slides = Array.from({ length: COPIES }, (_, copy) => [
  ...items.map((item) => ({ key: `${copy}-${item.id}`, item })),
  { key: `${copy}-end`, item: null },
]).flat();

const CurvedCarousel = () => {
  const stageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = {
      offset: 0,
      velocity: 0,
      speed: reduceMotion ? 0 : AUTO_SPEED,
      hovering: false,
      dragging: false,
      lastX: 0,
      moved: 0,
      visible: true,
    };

    let cardW = 0;
    let stageW = 0;
    const measure = () => {
      cardW = cardRefs.current[0]?.offsetWidth || 300;
      stageW = stage.offsetWidth;
    };
    measure();

    const render = () => {
      const step = cardW + GAP;
      const total = step * slides.length;
      const half = stageW / 2;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let pos = (((i * step + state.offset) % total) + total) % total;
        if (pos > total / 2) pos -= total;
        const d = Math.max(-1.6, Math.min(1.6, pos / half));
        const tilt = -d * MAX_TILT;
        const lift = d * d * MAX_LIFT;
        el.style.transform = `translate3d(${pos - cardW / 2}px, -50%, ${lift}px) rotateY(${tilt}deg)`;
        el.style.zIndex = String(100 - Math.round(Math.abs(d) * 40));
        el.style.visibility = Math.abs(pos) > half + cardW * 1.5 ? "hidden" : "visible";
      });
    };

    let raf = 0;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(3, (now - last) / 16.67);
      last = now;
      if (!state.dragging) {
        const target = state.hovering || reduceMotion ? 0 : AUTO_SPEED;
        state.speed += (target - state.speed) * 0.05 * dt;
        state.velocity *= Math.pow(0.92, dt);
        if (Math.abs(state.velocity) < 0.01) state.velocity = 0;
        state.offset -= (state.speed - state.velocity) * dt;
      }
      render();
      raf = state.visible ? requestAnimationFrame(tick) : 0;
    };
    raf = requestAnimationFrame(tick);

    // Only animate while on screen.
    const io = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      if (state.visible && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(stage);

    const onDown = (e) => {
      state.dragging = true;
      state.lastX = e.clientX;
      state.moved = 0;
      state.velocity = 0;
    };
    const onMove = (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lastX;
      state.lastX = e.clientX;
      state.moved += Math.abs(dx);
      state.offset += dx;
      state.velocity = dx;
      if (state.moved > 6 && !stage.hasPointerCapture(e.pointerId)) {
        stage.setPointerCapture(e.pointerId);
      }
    };
    const onUp = (e) => {
      state.dragging = false;
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    };
    const onClick = (e) => {
      if (state.moved > 6) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      state.offset -= e.deltaX;
      state.velocity = 0;
    };
    const onEnter = () => (state.hovering = true);
    const onLeave = () => (state.hovering = false);

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("click", onClick, true);
    stage.addEventListener("wheel", onWheel, { passive: false });
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);
    const ro = new ResizeObserver(measure);
    ro.observe(stage);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      stage.removeEventListener("click", onClick, true);
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative h-[460px] sm:h-[500px] lg:h-[560px] w-full cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
      style={{ perspective: "1300px", perspectiveOrigin: "50% 50%" }}
    >
      {slides.map(({ key, item }, i) =>
        item ? (
          <DesignCard key={key} item={item} cardRef={(el) => (cardRefs.current[i] = el)} />
        ) : (
          <EndCard key={key} cardRef={(el) => (cardRefs.current[i] = el)} />
        )
      )}
    </div>
  );
};

const DesignShowcase = () => {
  const { ref } = useSectionInView("Design Showcase", 0.2);

  return (
    <section ref={ref} id="designs" className="relative w-full scroll-mt-10 py-20 lg:py-32">
      <div className="px-5 lg:px-[7.5rem]">
        <SectionHeading
          title="Visual Explorations"
          label="Design work"
          linkLabel="View all"
          routeLink={behance.profile}
          className="container-x"
        />
        <div className="container-x mt-10 lg:mt-12 flex items-end justify-between gap-8">
          <p className="font-serif text-2xl lg:text-4xl leading-snug text-ink-muted max-w-2xl">
            <em className="italic text-ink-bright">100+ designs</em> across web,
            apps and brands.
          </p>
          <span className="eyebrow hidden sm:block flex-shrink-0">Drag to explore</span>
        </div>
      </div>

      <div className="mt-8 lg:mt-10">
        <CurvedCarousel />
      </div>
    </section>
  );
};

export default DesignShowcase;
