import React from 'react'
import { motion } from 'framer-motion'
import { transition1 } from '../../transitions'

export const HomeMain = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "20%" }}
    animate={{ opacity: 1, y: "0" }}
    exit={{ opacity: 0, y: "-50%" }}
    transition={transition1} className="h-[calc(100vh-70px)] flex items-center justify-center flex-col">
        <div className="headin md:w-[60vw] w-[90vw]   z-10">
          <h1 
          
          className="text-6xl md:text-7xl text-center  font-extrabold tracking-tight ">
            Start coding{" "}
            <span className=" leading-tight bg-gradient-to-r from-white via-[#9372FF] to-[#4B69FF] text-transparent mr-3 bg-clip-text">
              instantly
            </span>
            with Codekaro
          </h1>
        </div>
        <div className="w-[80%]  z-10">
          <p className="mt-6 mb-0 text-zinc-500 text-center text-xl">
            Social Learning and expert-led programs to start, transition or
            boost your career
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row mt-16 items-center justify-center">
          <button className="z-10 w-fit  rounded-md  h-14 border flex items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Start Learning for free</div>
          </button>
          <button className="z-10 w-fit  rounded-md  h-14 text-white flex items-center px-8 text-xl border-white border-[1px] ">
            <div className="font-medium">Start Learning for free</div>
          </button>
        </div>
      </motion.section>
  )
}
