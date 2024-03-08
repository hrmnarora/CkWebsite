import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

export const HomeMain = () => {
  return (
    <div className="bg-gradient-to-t w-full to-[#000008] from-[#0a0337]">
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
            <span className=" leading-tight bg-gradient-to-r to-[#2b4ae3] from-white text-transparent mr-3 bg-clip-text">
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
          <button className="z-10 w-fit  rounded-md  h-14 border flex items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Start Learning for free</div>
          </button>
        </div>
      </motion.section>
    </div>
  );
};
