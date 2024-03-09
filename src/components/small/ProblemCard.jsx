import React from 'react'
import { motion } from 'framer-motion'
export const ProblemCard = () => {
    
  return (
    <motion.div
    initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8}}
      className="card w-fit h-18 bg-zinc-900] uppercase text-5xl py-4 rounded-xl px-6 text-white border-[1px] border-zinc-800"
    >
      <h1>its too difficult</h1>
    </motion.div>
  )
}
