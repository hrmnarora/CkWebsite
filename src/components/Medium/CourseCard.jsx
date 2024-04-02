import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const CourseCard = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
      });
  return (
    <div ref={ref}>
      <motion.div
         initial={{ opacity: 0 }} // Initial opacity set to 0 and translateY to 50px (off-screen)
         animate={{ opacity: inView ? 1 : 0 }} // Fade in and translate to 0 when in view, otherwise fade out and translate off-screen
         transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} // Set ease to easeOut for smoother transition
         className="Coursecard cursor-pointer z-10  bg-zinc-950  lg:w-[30vw] w-[80vw] bg-opacity-20  transition-all border-zinc-900 border-[.5px] rounded-xl overflow-hidden"
      >
        <div className="img w-full h-[200px] bg-zinc-900"></div>
        <div className="p-6 w-full h-full">
          <h1 className="heading text-2xl text-white md:text-3xl font-bold">
            Full Stack Course
          </h1>
          <p className="description mt-4 text-xl text-zinc-300 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl text-white">$</h3>
              <h1 className="text-5xl font-bold text-blue-300">10</h1>
              <h3 className="text-2xl font-medium mt-4 text-white">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-bold text-2xl">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseCard;
