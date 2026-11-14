"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], label, summary";

const CustomCursor = () => {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    const root = rootRef.current;
    const html = document.documentElement;
    html.classList.add("custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frame = 0;

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      root.classList.add("is-visible");
    };

    const onOver = (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const interactive = e.target.closest(INTERACTIVE);
      root.classList.toggle("is-label", Boolean(labelled));
      root.classList.toggle("is-link", !labelled && Boolean(interactive));
      if (labelled) labelRef.current.textContent = labelled.dataset.cursor;
    };

    const onDown = () => root.classList.add("is-down");
    const onUp = () => root.classList.remove("is-down");
    const onLeave = () => root.classList.remove("is-visible");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    html.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      html.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      html.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor" aria-hidden="true">
      <span ref={ringRef} className="cursor__ring">
        <span ref={labelRef} className="cursor__label" />
      </span>
      <span ref={dotRef} className="cursor__dot" />
    </div>
  );
};

export default CustomCursor;
