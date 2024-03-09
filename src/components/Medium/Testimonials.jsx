import React from 'react'
import { SubHeading } from '../small/SubHeading'
import { TestimonialCard } from '../small/TestimonialCard'
import { testimonialsData } from '../../tes'

export const Testimonials = () => {
  return (
    <div className='bg-black w-full h-fit flex items-center  flex-col
     j'>
        <div className="courses  pt-32 bg-black w-full z-10  flex items-center lg:justify-center flex-col  h-fit lg:flex-col" >
        <SubHeading
        type={"Testimonials"}
        title={"what students said about codekaro"}
        description={
          "Lorem ipsum Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
        }
      />
        </div>

        <div className="testimonials mt-5 w-[80%] justify-center z-[10] py-4  flex flex-wrap md:flex-row gap-12 flex-row">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
       
    </div>
  )
}
