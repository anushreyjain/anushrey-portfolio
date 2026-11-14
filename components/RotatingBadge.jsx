import React from "react";
import Sparkle from "./Sparkle";

const RotatingBadge = ({
  text = "Design · Code · CMS · Open to work · ",
  className = "",
}) => (
  <div className={`relative h-32 w-32 lg:h-36 lg:w-36 ${className}`}>
    <svg viewBox="0 0 200 200" className="spin-slow h-full w-full" aria-hidden="true">
      <defs>
        <path
          id="badge-circle"
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
        />
      </defs>
      <text
        className="fill-[color:var(--ink-muted)] font-mono uppercase"
        style={{ fontSize: "13.5px", letterSpacing: "0.22em" }}
      >
        <textPath href="#badge-circle" textLength="486" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-accent">
      <Sparkle size={30} />
    </span>
  </div>
);

export default RotatingBadge;
