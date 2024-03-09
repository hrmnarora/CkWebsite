import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Courses = () => {   
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });
  return (
    <div
      ref={ref}
      className="courses pb-24 bg-black w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col "
    >
      <motion.div
        className="heading lg:w-[60%] w-[80%]  text-4xl md:text-5xl py-10"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.8 ,delay: .5}}
      >
        <div className="lg:mr-24">
          <div className="w-fit h-fit py-2 flex gap-2 items-center justify-center">
            <div className="w-2  h-2 md:w-4 md:h-4 bg-[#2b4ae3] rounded-full"></div>
            <h3 className="text-xl md:text-2xl text-[#2b4ae3]">Courses</h3>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold">
            Industry-relevant Programs <br />
            to set you apart
          </h1>
          <p className="text-lg font-medium text- mt-3 text-zinc-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aperiam.
          </p>
        </div>
      </motion.div>

      <div className=" w-[85%] md:w-[60%]  mt-4 border-[#313131] p-10 bg-black bg-opacity-20 rounded-xl flex flex-col lg:flex-row items-center justify-normal  border-[1px] h-fit shadow-md">
        <div>
          <h1 className="heading text-2xl font-bold">Full Stack Course</h1>
          <p className="description mt-4 text-zinc-300 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-[#2b4ae3]">10</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>

        <div className="w-full lg:h-[350px] lg:w-[1px] mx-10 lg:my2 bg-zinc-700 h-[1px] my-12 "></div>

        <div>
          <h1 className="heading text-2xl font-bold">Frontent Course</h1>
          <p className="description mt-4 text-gray-400 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-[#2b4ae3]">6</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>
      </div>
    </div>
  );
};
