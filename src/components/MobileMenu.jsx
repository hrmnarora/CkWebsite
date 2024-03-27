import React from "react";
import { Navlink } from "./small/Navlink";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      className={`${
        isOpen ? "flex" : "hidden"
      } md:hidden  flex items-center justify-center w-full h-[calc(100vh)] fixed bg-opacity-60 backdrop-blur-2xl  top-0 z-50 transition-all bg-[#000000]`}
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? "0%" : "-100%" }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container flex-col
       flex  gap-12 text-3xl items-center">
        <Navlink text={"Home"} address={"/"} onClick={closeMenu} />
        <Navlink text={"Courses"} address={"/courses"} onClick={closeMenu} />
        <Navlink text={"About"} address={"/about"} onClick={closeMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;