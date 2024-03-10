import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

export const SubHeading = ({title, type, description}) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
      });
  return (
    <div ref={ref} className='lg:w-[60%] select-none w-[80%] flex items-center'>
    <motion.div
        className="heading  w-[100%] lg:w-[80%] text-4xl md:text-5xl py-10"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.8 ,delay: .5}}
      >
        <div className="lg:mr-24">
          <div className="w-fit h-fit py-2 flex gap-2 items-center justify-center">
            <div className="w-2  h-2 md:w-4 md:h-4 bg-blue-300 rounded-full"></div>
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

