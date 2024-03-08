import React from "react";
import { HomeMain } from "../components/Medium/HomeMain";
export const Home = () => {
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
    <div className="bg-gradient-to-t relative items-center justify-center text-white flex-col  from-[#000008] to-[#060617] flex w-full">
      {/* home heading  */}
      <HomeMain/>
      {/* <div class="courses z-10 w-[100vw] mb-24 flex items-center flex-col   h-fit">
        <div class="heading w-[90%] text-4xl md:text-5xl py-10  ">
          <h1 class="text-5xl md:text-6xl font-extrabold text-center">
            industry relevent
            <span class=" leading-tight bg-gradient-to-r from-white via-[#9372FF] to-[#4B69FF] text-transparent bg-clip-text">
              programs
            </span>
            to set you apart
          </h1>
          <p class="text-center text-xl font-bold mt-3 text-zinc-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aperiam.
          </p>
        </div>

        <div class=" w-[85%]  md:w-[80%] lg:w-[60%] mt-16 border-[#1e1827] p-10 bg-[#181622] bg-opacity-70 rounded-xl flex flex-col items-center md:flex-row border-[1px] h-fit shadow-md">
          <div>
            <h1 class="heading text-2xl font-bold">Full Stack Course</h1>
            <p class="description mt-4 text-gray-400 font-medium">
              For individual developers, freelancers, students, and educators
              that want to code faster and happier.
            </p>
            <div class="price mt-8">
              <div class="flex gap-2">
                <h3 class="text-2xl">$</h3>
                <h1 class="text-5xl font-bold text-[#9372FF]">10</h1>
                <h3 class="text-2xl font-medium mt-4">USD</h3>
              </div>
              <p class="text-gray-400 font-medium mt-2">
                per month / $100 USD per year
              </p>
            </div>
            <button class="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
              <div class="font-medium">Start Learning for free</div>
            </button>
            <p class="text-gray-400 font-medium mt-4 text-sm">
              Free for verified students, teachers, and maintainers of popular
              open source projects.
            </p>
          </div>

          <div class="w-full md:w-[1px] md:h-[400px] bg-zinc-700 h-[1px] my-12 md:mx-12 md:my-0"></div>

          <div>
            <h1 class="heading text-2xl font-bold">Frontent Course</h1>
            <p class="description mt-4 text-gray-400 font-medium">
              For individual developers, freelancers, students, and educators
              that want to code faster and happier.
            </p>
            <div class="price mt-8">
              <div class="flex gap-2">
                <h3 class="text-2xl">$</h3>
                <h1 class="text-5xl font-bold text-[#9372FF]">6</h1>
                <h3 class="text-2xl font-medium mt-4">USD</h3>
              </div>
              <p class="text-gray-400 font-medium mt-2">
                per month / $100 USD per year
              </p>
            </div>
            <button class="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
              <div class="font-medium">Start Learning for free</div>
            </button>
            <p class="text-gray-400 font-medium mt-4 text-sm">
              Free for verified students, teachers, and maintainers of popular
              open source projects.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div class="ProblemsFaced mt-24 z-10 w-[100vw] mb-36 flex items-center flex-col   h-fit">
        <div class="heading w-[90%] text-4xl md:text-5xl py-10  ">
          <h1 class="text-5xl md:text-6xl font-extrabold text-center">
            Learning
            <span class=" leading-tight bg-gradient-to-r from-white via-[#9372FF] to-[#4B69FF] text-transparent bg-clip-text">
              Problems
            </span>
            we have all faced
          </h1>
          <p class="text-center text-xl font-bold mt-3 text-zinc-500 ">
            Here's what 30000+ satisfied students have to say about learning
            with codekaro.
          </p>
        </div>

        <div class="flex flex-col gap-4 md:flex-row md:flex-wrap w-[80%] items-center justify-center">
          <div class="problemCard w-fit h-fit p-3 hover:scale-[102%] transition-all cursor-pointer flex items-center  bg-[#181622] rounded-lg r">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">
              No Practical/Hands on Experiance
            </h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">No Personal Guidance</h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">No Practical on Experiance</h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">
              Hard to get across the finish Line
            </h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center  bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">
              No Practical/Hands on Experiance
            </h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">No Personal Guidance</h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">No Practical on Experiance</h1>
          </div>
          <div class="problemCard hover:scale-[102%] transition-all cursor-pointer w-fit h-fit p-3 shadow-lg flex items-center bg-[#181622] rounded-lg ">
            <div class="circle p-3 bg-[#0f0d15] flex items-center justify-center rounded-full">
              <h1 class="text-2xl">😔</h1>
            </div>
            <h1 class="text-xl mx-5 font-medium">
              Hard to get across the finish Line
            </h1>
          </div>
        </div>
      </div> */}
      {/* <div class=" TestimonialSection relative w-[100vw] pb-36  h-fit text-zinc-100  flex flex-col items-center ">
        <div class="w-[90%] flex items-center mt-24 justify-center flex-col">
          <h1 class="text-5xl md:text-6xl font-extrabold text-center">
            Students Love
            <span class=" leading-tight bg-gradient-to-r from-white via-[#9372FF] to-[#4B69FF] text-transparent bg-clip-text">
              CodeKaro
            </span>
          </h1>
          <p class="text-center font-sm text-xl font-bold mt-3 text-zinc-500">
            Here's what 30000+ satisfied students have to say about learning
            with codekaro.
          </p>
        </div>
        <div className="testimonials mt-16 items-center justify-center flex flex-col md:flex-row flex-wrap gap-5">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testicard cursor-pointer z-10 hover:scale-[102%] bg-[#181622] w-[80%] md:w-[29%] bg-opacity-20 hover:border-zinc-800 transition-all border-zinc-900 border-[1px] rounded-xl p-6"
            >
              <div className="text text-xl font-med text-zinc-100">
                <p className="leading-9">{testimonial.quote}</p>
              </div>
              <div className="w-[80%] bg-gradient-to-r from-[#9372FF] to-[#4B69FF] h-[1px] mt-3"></div>
              <div className="reviewer mt-4 flex items-center">
                <div
                  className="image w-14 h-14 bg-zinc-500 rounded-full"
                  style={{
                    backgroundImage: `url(${testimonial.reviewer.image})`,
                  }}
                ></div>
                <div className="name ml-3">
                  <h1 className="text-xl font-bold text-zinc-100">
                    {testimonial.reviewer.name}
                  </h1>
                  <h3 className="text-zinc-400">{testimonial.reviewer.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
