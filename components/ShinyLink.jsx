import React from 'react'
import { motion } from "framer-motion";
import { HiDownload } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs'; // Add this import

const ShinyLink = ({ children, routeLink }) => {
  return (
    <motion.a // Change this to motion.a
      href={routeLink} // Move href here
      target="_blank"
      rel="noopener noreferrer" // Add this for security
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
      className="relative radial-gradient-link group w-fit hover:scale-105 
      flex items-center gap-3 tracking-wide h-full"
    >
      <span className="text-sm lg:text-base text-gray-300 group-hover:scale-105 
      active:scale-105 transition 
      flex items-center gap-1 underline cursor-pointer linear-mask-link">
        {children}
        <BsArrowRight color="#fff" className="opacity-70 -rotate-45 lg:group-hover:-translate-y-[2px]
          lg:group-hover:translate-x-[2px] transition-all" />
      </span>
      <span className="block absolute inset-0 group-hover:scale-105  
      linear-overlay-link" />
    </motion.a>
  )
}

export default ShinyLink