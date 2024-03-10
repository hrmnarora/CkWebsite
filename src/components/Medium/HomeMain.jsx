import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import bg from "../../assets/bg.png"
export const HomeMain = () => {
  return (
    <>
     <style>
        {`
          .checkbox-bg::before {
            --size: 50px;
            --line: hsl(0 0% 100% / 0.13);
            --thickness: 2px;
            --offset: 60px;
            height: 100vh;
            content: "";
            z-index: 1;
            opacity:30%;
            position: absolute;
            inset: 0;
            background:
              linear-gradient(transparent 0 calc(var(--size) - var(--thickness)), var(--line) calc(var(--size) - var(--thickness)) var(--size)) var(--offset) var(--offset) / var(--size) var(--size),
              linear-gradient(90deg, transparent 0 calc(var(--size) - var(--thickness)), var(--line) calc(var(--size) - var(--thickness)) var(--size)) var(--offset) var(--offset) / var(--size) var(--size)
              ;
          }
        `}
      </style>
    <div  className="main checkbox-bg bg-black w-[100vw] bg-cover bg-center bg-streach  h-screen">
      <motion.section
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="h-[100vh] flex items-center justify-center flex-col"
      >
        <div className="headin md:w-[60vw] w-[70vw] z-10">
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
            <div className="font-medium">Browse Courses</div>
          </button>
          <button className="z-10 w-fit  rounded-md  h-14 bg-opacity-50 flex items-center px-8 text-xl bg-black text-white border-white border-[1px]">
            <div className="font-medium">Join Crash Course</div>
          </button>
        </div>
      </motion.section>
    </div>
    </>
  );
};




