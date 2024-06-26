import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import CustomCursor from "../Cursor/CustomCurser";
export const HomeMain = () => {
  return (
    <>
     <style>
        {`
          .checkbox-bg::before {
            --size: 50px;
            --line: hsl(206.71,89.02%,67.84%,0.5);
            --thickness: 2px;
            --offset: 60px;
            height: 100vh;
            content: "";
            z-index: 1;
            opacity:70%;
            position: absolute;
            inset: 0;
            background:
            radial-gradient(ellipse at center, rgba(9,9,11,.4) 0%, rgba(9,9,11,.8) 20%, rgba(9,9,11,1) 80%),
              linear-gradient(transparent 0 calc(var(--size) - var(--thickness)), var(--line) calc(var(--size) - var(--thickness)) var(--size)) var(--offset) var(--offset) / var(--size) var(--size),
              linear-gradient(90deg, transparent 0 calc(var(--size) - var(--thickness)), var(--line) calc(var(--size) - var(--thickness)) var(--size)) var(--offset) var(--offset) / var(--size) var(--size)
              ;
          }
        `}
      </style>
    <div className="main z-10  relative bg-zinc-950  w-[100vw] bg-cover bg-center bg-streach  h-screen" >

      <div className="w-full h-full absolute top-0 ">
      </div>
      <motion.section
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="h-[100vh] flex z-50 items-center justify-center flex-col"
      >
        <div className="checkbox-bg w-full"></div>
        <div className="heading select-none md:w-[60vw] w-[70vw] z-10">
          <h1 className="text-5xl md:text-7xl lg:7xl text-center  font-bold tracking-tight ">
            Start coding{" "}
            <span className=" leading-tight bg-gradient-to-r to-blue-300 from-white text-transparent mr-3 bg-clip-text">
              instantly
            </span>
            with Codekaro
          </h1>
        </div>
        <div className="w-[70%]  z-10">
          <p className="mt-6 mb-0 text-zinc-300 text-center text-xl">
            Social Learning and expert-led programs to start, transition or
            boost your career
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row mt-8 items-center justify-center">
          <button className="z-10 w-fit  rounded-md  h-14  flex items-center px-8 text-xl bg-blue-300 text-zinc-900">
            <h1
             className="font-medium">Browse Courses</h1>
          </button>
          <button className="z-50 w-fit hover:bg-white hover:text-black transition-all cursor-pointer rounded-md  h-14 bg-opacity-100 flex items-center px-8 text-xl bg-zinc-950 text-white border-white border-[1px]">
            <h1 className="font-medium">Join Crash Course</h1>
          </button>
        </div>
      </motion.section>
    </div>
    </>
  );
};




