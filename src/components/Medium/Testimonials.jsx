import React from "react";
import { SubHeading } from "../small/SubHeading";

export const Testimonials = () => {
  return (
    <div className="bg-black z-50 w-full h-fit flex items-center justify-center  flex-col">
      <div className="courses pt-32 bg-black w-[80%] z-10  flex lg:justify-center flex-col  h-fit lg:flex-col">
        <SubHeading
          type={"Testimonials"}
          title={"What students said about codekaro"}
          description={
            "Lorem ipsum Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
          }
        />
      </div>

      <div className="w-[80%] mt-10 md:w-[80%] h-[200vh] md:h-[80vh] flex-col md:flex-row rounded-3xl flex gap-4">
        <div className="md:w-[33%]  md:h-full h-fit w-full gap-5 flex flex-col">
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 rounded-xl">
            <div>
              <p className="text-xl ">“A lot of advanced web dev topics taught at codekaro taught by ashish sir gave me an edge over my peers, and I ultimately absorbed more here than I ever did anywhere else.”</p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Abhishek Bajpayee</h3>
                <p className="text-zinc-500">Student</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 rounded-xl">
            <div>
              <p className="text-xl "><span className="bg-blue-200 font-semibold text-black mx-1 pl-1">"It was great learnig with codekaro. </span> It helped in gaining enough experience to get my internship”</p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Bhanu Pratap Singh Rathore</h3>
                <p className="tex3-zinc-500">Student</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[33%] md:h-full h-fit w-full gap-5 flex flex-col">
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 font rounded-xl">
            <div>
              <p className="text-xl ">“The course is well designed and assignments are quite exciting. It has all the levels of problems beginning from easy to hard, evenly distributed to motivate you. <br /><span className="bg-blue-200  font-semibold text-black pl-1"> I would say that it was the best decision to choose an online course at Codekaro”</span></p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Vipul Reddy</h3>
                <p className="text-zinc-500">Student</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 rounded-xl">
            <div>
              <p className="text-xl ">“I have completed two courses with Codekaro. The faculty were awesome and highlighted every important aspect of the course and the subject in general. Their focus was to solve all my doubts so that I can level up my coding journey.”</p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Akash Sharma</h3>
                <p className="text-zinc-500">Student</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[33%]  md:h-full h-fit w-full gap-5 flex flex-col">
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 rounded-xl">
            <div>
              <p className="text-xl ">“The course is very well organized.And as a front-end developer, I am much confident now.”</p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Saurav Gupta</h3>
                <p className="text-zinc-500">Student</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 h-fit bg-zinc-950 border-[1px] border-zinc-900 rounded-xl">
            <div>
              <p className="text-xl ">“Python course was well designed, easy to learn even if you are new to coding. Great value for money.”</p>
            </div>
            <div className="w-[90%] h-[1px] bg-zinc-700 mt-3"></div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-400">
              </div>
              <div className="flx flex-col gap-1">
                <h3 className="font-semibold text-lg tracking-wide text-zinc-300">Vinay Prajapati</h3>
                <p className="text-zinc-500">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
