import React from "react";
import { motion } from "framer-motion";

// Ghost button with the sliding shine on the text and the glowing border sweep.
const ShinyButton = ({ children }) => {
  return (
    <motion.span
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="btn btn-cta border border-[color:var(--border-strong)] relative radial-gradient group"
    >
      <span className="text-ink flex items-center gap-[0.6rem] relative linear-mask">
        {children}
      </span>
      <span className="block absolute -inset-px rounded-ds p-px linear-overlay" />
    </motion.span>
  );
};

export default ShinyButton;
