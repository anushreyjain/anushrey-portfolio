import React from "react";

// Needs a `group` ancestor; the text rolls up on that ancestor's hover.
const RollText = ({ children, className = "" }) => (
  <span className={`roll ${className}`}>
    <span className="roll__text">{children}</span>
    <span className="roll__text roll__clone" aria-hidden="true">
      {children}
    </span>
  </span>
);

export default RollText;
