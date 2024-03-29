import { motion } from 'framer-motion'
import React from 'react'

const Transition = (OgComponent) => {
  return (
    <>
    <OgComponent/>
    <motion.div
    className='slide-in fixed top-0 left-0 w-[100%] h-[100vh] bg-blue-300 origin-bottom z-50 text-blac text-5xl flex items-center justify-center font-bold'
    initial={{scaleY: 0}}
    animate={{scaleY: 0}}
    exit={{scaleY: 1}}
    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
    >Let's Code</motion.div>
    <motion.div
    className='slide-out fixed top-0 left-0 w-[100%] h-[100vh] bg-blue-300 origin-top z-50'
    initial={{scaleY: 1}}
    animate={{scaleY: 0}}
    exit={{scaleY: 0}}
    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
    />
    </>
  )
}
export default Transition