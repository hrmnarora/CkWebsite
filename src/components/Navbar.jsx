import React from "react";
import MobileMenu from "./MobileMenu";
import { motion, useScroll } from "framer-motion"
import { NavLink } from "react-router-dom";

export const Navbar = ({setIsMobileMenuOpen,isMobileMenuOpen}) => {
  const { scrollYProgress } = useScroll();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
      <nav
        id="navbar"
        className={`${
          isMobileMenuOpen ? "bg-[#000000]" : "bg-[#000000]"
        } h-fit  flex items-center  flex-col shadow-md w-full fixed bg-opacity-60 backdrop-blur-2xl  top-0 z-50 transition-all`}
      >
        <div className="container px-5 my-3 flex justify-between items-center">
          <div className="flex gap-4 items-center justify-center">
            <div className="text-blue-300 text-xl font-bold">CodeKaro</div>

            <div className="hidden text-white ml-24 md:flex gap-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-white px-3 py-1 rounded">Login</button>
            <button className="bg-transparent border border-white text-white  px-3 py-1 rounded">
              Register
            </button>
          </div>

          <div className="md:hidden">
            <button
              id="mobileToggle"
              className="text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      <motion.div style={{ scaleX: scrollYProgress }} className=" h-[1px] w-full bg-gradient-to-r from-black via-blue-300 to-black"></motion.div>

      </nav>
    </>
  );
};
