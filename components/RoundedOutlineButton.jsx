import React from "react";

const RoundedOutlineButton = ({ children, ...property }) => {
  return (
    <button
      className={`btn btn-ghost btn-sm lg:text-sm ${property.className ?? ""}`}
    >
      View Project {children}
    </button>
  );
};

export default RoundedOutlineButton;
