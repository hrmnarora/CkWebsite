import React from "react";
import { Navlink } from "./small/Navlink";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      className={`${
        isOpen ? "flex" : "hidden"
      } md:hidden top-[61px] absolute z-50 flex items-center justify-center w-full h-[calc(100vh-70px)] bg-[#060617]`}
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? "0%" : "-100%" }}
      transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container flex-col
       flex  gap-12 text-3xl items-center">
        <Navlink text={"Home"} onClick={closeMenu} />
        <Navlink text={"Courses"} onClick={closeMenu} />
        <Navlink text={"About"} onClick={closeMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;