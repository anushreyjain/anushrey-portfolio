import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const FullScreenNavbar = ({ isFullNavbar, setIsFullNavbar }) => {
  const closeNavbar = () => {
    setIsFullNavbar(false);
  };
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100vh", opacity: 1 }}
      transition={{ ease: "linear", duration: 0.2 }}
      className="h-screen w-full bg-zinc-900 p-5 fixed top-0 left-0 z-[999999] overflow-hidden"
    >
      <div className="w-full h-10 flex justify-end items-center">
        <span
          onClick={closeNavbar}
          className="bg-zinc-950 w-10 h-10 text-zinc-300 =-5 rounded-full flex justify-center items-center text-2xl"
        >
          <IoClose />
        </span>
      </div>

      <div></div>
    </motion.div>
  );
};

export default FullScreenNavbar;
