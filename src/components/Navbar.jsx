import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';

const Navbar = () => {

    const [ismenuOpen, setIsMenuopen] = useState(false)

    const [activeLinks , setActiveLink] = useState('#home')

    const navLinks = [
        {href: "#home" , label:"Home"},
        {href: "#about" , label:"About"},
        {href: "#services" , label:"Our Services"},
        {href: "#testimonials" , label:"testimonials"},

    ]

  return (
    < motion.nav
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true}}
     className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50  border-b  border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* Log */}
            <motion.div
            variants={fadeIn('right', 0.3)}
             className='flex items-center gap-1 cursor-pointer'>
                <motion.div 
                whileHover={{ scale: 1.1 }}
                className='w-4 h-4 bg-blue-700 rounded-full opacity-75 hover:opacity-100 transition-opacity'></motion.div>
                <motion.div 
                whileHover={{ scale: 1.1 }}
                className='w-4 h-4 bg-red-700 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></motion.div>
            </motion.div>

            {/*Mobile menu button  */}
            <motion.button 
             variants={fadeIn('left', 0.3)}
            onClick={() => setIsMenuopen(!ismenuOpen)} className='md:hidden p-2  '>
                {
                    ismenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
                }
            </motion.button>

            {/* desktop navitems */}
            <motion.div 
            variants={fadeIn('down', 0.3)}
            className='hidden md:flex items-center gap-10'>
                {
                    navLinks.map((link, index) =>(
                        <motion.a
                        key={index} 
                        variants={fadeIn('down', 0.1 * (index + 1))}
                        href={link.href} 
                        onClick={() =>setActiveLink(link.href)}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLinks === link.href ?   "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                        {link.label}</motion.a>
                    ))
                }
            </motion.div >

            {/* get in touch button button */}
            <motion.button 
            variants={fadeIn('left', 0.3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                <a href="#NewsletterSection"> Get in touch</a>
            </motion.button>
        </div>
        
        {/* Mobile menu items*/}
             {
                ismenuOpen && (
                    <motion.div 
                    variants={fadeIn('down', 0.3)}
                    className='md:hidden bg-white border-t border-gray-100 py-4 '>
                        <div className='container mx-auto px-4 space-y-3'>
                            {navLinks.map((link, index) =>(
                                <motion.a 
                                key={index}
                                 variants={fadeIn('right', 0.1 * (index + 1))}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMenuopen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLinks === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"  }`} href={link.href}>{link.label}</motion.a>
                            ))}
                            <motion.button
                            variants={fadeIn('up', 0.4)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                            <a href="#newsletter"> Get in touch</a>
                            </motion.button>
                        </div>
                    </motion.div>
                )
             }
    </motion.nav>
    
  )
}

export default Navbar
