'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Promotional() {
    return (
        <section id='contact' className='text-white bg-blue-950'>
            <div className="container px-5 py-12 mx-auto ">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-center mx-auto" >
                    <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="flex-grow sm:pr-16 text-2xl font-medium title-font">Want to work with us?</motion.h1>
                    <motion.a href='https://wa.me/message/44J2WCWQDJ2UJ1?text="Hey there!"' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="flex-shrink-0 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-none rounded text-lg mt-10 sm:mt-0">Contact us</motion.a>
                </div >
            </div >
        </section >
    )
}
