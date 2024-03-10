import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full z-10  flex bg-black items-center flex-col p-5 justify-center rounded-lg shadow pt-10 ">

            <div className='w-[80%] py-20 flex flex-col items-center justify-center  rounded-2xl  my-10'>
            <h1 className="text-5xl select-none md:text-7xl lg:7xl text-center  font-bold tracking-tight ">
            Book Your Free{" "}
            <span className=" leading-tight bg-gradient-to-r to-blue-300 from-white text-transparent mr-3 bg-clip-text">
              MasterClass
            </span>
            Now
          </h1>
          <button className="z-10 w-fit mt-5 select-none rounded-md  h-14 bg-opacity-50 flex items-center px-8 text-xl hover:bg-white hover:text-black transition-all bg-black text-white border-white border-[1px]">
            <div className="font-medium text-xl md:text-2xl">Join Crash Course Now!</div>
          </button>
            </div>

            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/"
                        className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul
                    className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
  )
}
