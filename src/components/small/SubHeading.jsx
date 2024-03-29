import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

export const SubHeading = ({title, type, description}) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
      });
  return (
    <div ref={ref} className='lg:w-[80%] select-none w-[80%] flex items-center'>
    <motion.div
        className="heading  w-[100%] lg:w-[80%] text-4xl md:text-5xl py-10"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.8 ,delay: .5}}
      >
        <div className="group lg:mr-24 md:w-[80%]">
          <div className="w-fit h-fit py-2 flex gap-4 items-center justify-center">
          <div class="relative inline-flex">
        <div class="w-4 h-4 bg-blue-300 rounded-full"></div>
        <div class="w-4 h-4 bg-blue-300 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div class="w-4 h-4 bg-blue-300 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
            <h3 className="text-xl md:text-2xl text-blue-300">{type}</h3>
          </div>
          <h1 className="text-3xl shadow-lg md:text-6xl font-bold">
            {title}
          </h1>
          <p className="text-lg w-[100%] font-lg text- mt-3 text-zinc-300 ">
            {description}
          </p>
        </div>
      </motion.div>
      </div>
  )
}

