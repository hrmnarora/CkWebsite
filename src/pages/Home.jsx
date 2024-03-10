import React from "react";
import { HomeMain } from "../components/Medium/HomeMain";
import { Courses } from "../components/Medium/Courses";
import { Problems } from "../components/Medium/Problems";
import { PlacedCompanies } from "../components/Medium/PlacedCompanies";
import { Testimonials } from "../components/Medium/Testimonials";
import CustomCursor from "../components/Cursor/CustomCurser";

export const Home = () => {
  return (
    <div className=" relative items-center justify-center text-white flex-col  flex w-[100vw] overflow-hidden">
      {/* home heading  */}
      <HomeMain />
      <Courses />
      <Problems/>
      <PlacedCompanies/>
      <Testimonials/>
      <CustomCursor/>
      {/* <div className="bg-black w-full h-fit">
      <svg className="animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 -top-[40rem] left-0 md:left-60 md:-top-[30rem]" xmlns="http://www.w3.org/2000/svg"></svg>
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
