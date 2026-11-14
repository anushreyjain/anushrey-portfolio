import React from "react";

// Ghost button with the sliding shine on the text and the glowing border sweep.
// The sweep is a CSS-animated custom property (see @property --x in globals.css), so it runs on
// the compositor/style engine without any JS on the main thread.
const ShinyButton = ({ children }) => {
  return (
    <span className="btn btn-cta shiny-button border border-[color:var(--border-strong)] relative radial-gradient group">
      <span className="text-ink flex items-center gap-[0.6rem] relative linear-mask">
        {children}
      </span>
      <span className="block absolute -inset-px rounded-ds p-px linear-overlay" />
    </span>
  );
};

export default ShinyButton;
