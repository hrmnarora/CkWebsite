import React, { useState } from "react";
import { Navlink } from "./small/Navlink";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobleMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobleMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobleMenuOpen(false);
  };

  return (<>
    <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu}/>

    <nav id="navbar" className={`${isMobileMenuOpen ? "bg-[#060617]" : "bg-[#0e0e35]"}  h-[70px] p-4 shadow-md w-[1100]`}>
      <div className="container mx-auto  flex justify-between items-center transition-all">
        <div className="flex gap-4 items-center justify-center">
          <div className="text-white text-xl font-bold">CodeKaro</div>

          <div className="hidden text-white ml-24 md:flex gap-8">
            <Navlink text={"Home"} />
            <Navlink text={"Courses"} />
            <Navlink text={"About"} />
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-white px-3 py-1 rounded">Login</button>
          <button className="bg-transparent border border-white text-white  px-3 py-1 rounded">
            Register
          </button>
        </div>

        <div className="md:hidden">
          <button id="mobileToggle" className="text-white" onClick={toggleMobileMenu}>
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
    </nav>
    </>
  );
};
