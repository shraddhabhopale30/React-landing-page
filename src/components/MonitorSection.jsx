import React from 'react'
import MonitorCardImage from '../assets/monitor-card.webp';
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const MonitorSection = () => {
  return (
        <motion.section 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 py-16 md:py-24 '>
          <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 '>

            {/*Left */}

             <motion.div 
             variants={fadeIn('right', 0.3)}
             className='md:w-1/2 w-full '> 
                <motion.span 
                variants={fadeIn('up', 0.4)}
                className='text-green-500 font-semibold'>Monitor</motion.span>
                <motion.h2 
                variants={textVariant(0.5)}
                className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>Introducing best mobile <br /> carousels</motion.h2>
                <motion.p
                variants={fadeIn('up', 0.6)}
                className='text-gray-600 mb-8 '>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</motion.p>
    
                <motion.a
                variants={fadeIn('up', 0.7)}
                href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-6 transition-all'>
                  Learn more about monitoring <TbArrowBigRightLinesFilled className='w-5 h-5 '/>
                </motion.a>
            </motion.div> 

                {/*Right */}
                <motion.div 
                variants={fadeIn('up', 0.5)}
                className='md:w-1/2 w-full '>
                <motion.img 
                variants={fadeIn('up', 0.5)}
                src={MonitorCardImage} alt="Schedule" className='w-full h-auto'/>
                </motion.div>     
          </div>
        </motion.section>
  )
}

export default MonitorSection
