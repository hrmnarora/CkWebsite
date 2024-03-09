import React from 'react'
import { ProblemCard } from '../small/ProblemCard'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

export const Problems = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
      });
  return (
    <div ref={ref}
    className="courses pb-24 pt-32 bg-black w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col">
        <motion.div
        className="heading lg:w-[60%] w-[80%]  text-4xl md:text-5xl py-10"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.8 ,delay: .5}}
      >
        <div className="lg:mr-24">
          <div className="w-fit h-fit py-2 flex gap-2 items-center justify-center">
            <div className="w-2  h-2 md:w-4 md:h-4 bg-[#2b4ae3] rounded-full"></div>
            <h3 className="text-xl md:text-2xl text-[#2b4ae3]">Problems</h3>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold">
            Problems faced by students
          </h1>
          <p className="text-lg font-medium text- mt-3 text-zinc-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aperiam.
          </p>
        </div>
      </motion.div>
        <div className="text w-[100vw] flex whitespace-nowrap overflow-hidden">
            <motion.div className='flex gap-5 mx-4'>
                <ProblemCard/>
                <ProblemCard/>
                <ProblemCard/>
                <ProblemCard/>
                <ProblemCard/>
            </motion.div>
        </div>
    </div>
  )
}
