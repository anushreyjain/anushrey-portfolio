import React from "react";

// Needs a `group` ancestor; the text rolls up on that ancestor's hover.
const RollText = ({ children, className = "", textClassName = "" }) => (
  <span className={`roll ${className}`}>
    <span className={`roll__text ${textClassName}`}>{children}</span>
    <span className={`roll__text roll__clone ${textClassName}`} aria-hidden="true">
      {children}
    </span>
  </span>
);

export default RollText;
