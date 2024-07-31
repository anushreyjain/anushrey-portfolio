import React from 'react'
import { motion } from "framer-motion";
import { HiDownload } from 'react-icons/hi';

const ShinyButton = ({ children }) => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.1, // Reduced from 0.5 to 0.2
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
      className="px-7 py-3 rounded-full relative radial-gradient group hover:scale-105"
    >
      <span className="text-gray-50 lg:group-hover:scale-105 
      lg:active:scale-105 transition group flex items-center gap-3 tracking-wide h-full w-full relative linear-mask">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-full p-px lg:group-hover:scale-105  linear-overlay" />
    </motion.button>
  )
}

export default ShinyButton