import React from "react";

export const Courses = () => {
  const testimonialsData = [
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reviewer: {
        name: "Harman Arora",
        role: "Student",
        image: "url_to_image_1",
      },
    },
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reviewer: {
        name: "Harman Arora",
        role: "Student",
        image: "url_to_image_1",
      },
    },
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reviewer: {
        name: "Harman Arora",
        role: "Student",
        image: "url_to_image_1",
      },
    },
    // Add other testimonials here
  ];
  return (
    <div class="courses pb-24 bg-gradient-to-t w-full from-[#000008] to-[#0a0337] z-10  mb-8 flex items-center lg:justify-center flex-col   h-fit lg:flex-col ">
      <div className="heading lg:w-[60%] w-[80%]  text-4xl md:text-5xl py-10  ">
        <div className="lg:mr-24">
          <div className=" w-fit h-fit py-2 flex gap-2 items-center justify-center">
            <div className="w-2  h-2 md:w-4 md:h-4 bg-[#2b4ae3] rounded-full"></div>
            <h3 className="text-xl md:text-2xl text-[#2b4ae3]">Courses</h3>
          </div>
          <h1 class="text-3xl md:text-6xl font-bold">
            Industry relevent Programs <br />
            to set you apart
          </h1>
          <p class="text-lg font-medium text- mt-3 text-zinc-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aperiam.
          </p>
        </div>
      </div>

      <div class=" w-[85%] md:w-[60%]  mt-4 border-[#1d1e56] p-10 bg-[#1d254b] bg-opacity-50 rounded-xl flex flex-col lg:flex-row items-center justify-normal  border-[1px] h-fit shadow-md">
        <div>
          <h1 class="heading text-2xl font-bold">Full Stack Course</h1>
          <p class="description mt-4 text-zinc-300 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div class="price mt-8">
            <div class="flex gap-2">
              <h3 class="text-2xl">$</h3>
              <h1 class="text-5xl font-bold text-[#2b4ae3]">10</h1>
              <h3 class="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p class="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button class="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div class="font-medium">Get Now</div>
          </button>
          <p class="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>

        <div class="w-full lg:h-[350px] lg:w-[1px] mx-10 lg:my2 bg-zinc-700 h-[1px] my-12 "></div>

        <div>
          <h1 class="heading text-2xl font-bold">Frontent Course</h1>
          <p class="description mt-4 text-gray-400 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div class="price mt-8">
            <div class="flex gap-2">
              <h3 class="text-2xl">$</h3>
              <h1 class="text-5xl font-bold text-[#2b4ae3]">6</h1>
              <h3 class="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p class="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button class="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div class="font-medium">Get Now</div>
          </button>
          <p class="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>
      </div>
    </div>
  );
};
