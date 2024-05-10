'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Training() {

    const technical = ["Python",
        "JAVA",
        "Dot Net",
        "Fullstack",
        "Data Science",
        "HTML",
        "CSS",
        "Android App Development",
        "Machine Learning",
        "IOS App Development",
        "AWS",
        "Azure",
        "Cybersecurity",
        "AI",
        "Internet of Things(IoT)",
        "React", "Angular",
        "Vue.Js",
        "Node.Js",
        "PHP",
        "Python-Django",
        "Blockchain Technology",
        "Big Data and Hadoop",
        "Digital Marketing",
        " UI / UX",
        "Networking",
        "CISA", "Embedded Systems",
        "Software Testing",
        "Quality Assurance(QA)"
    ]
    const nonTechnical = [
        "Digital Marketing",
        "HR",
        "Management Skill Training",
        "Soft Skill Training",
        "Business Communication Training",
        "Placement Trainings",
        "Interview Skill Training"
    ]



    const [content, setContent] = useState('');
    const [selectedButton, setSelectedButton] = useState('Technical');
    const handleButton1 = () => {
        setSelectedButton('Technical');
        setContent('Default content for Button 1');
    }

    const handleButton2 = () => {
        setSelectedButton('Non-Technical');
        setContent('Default content for Button 2');
    }

    return (
        <section id='training' className='lg:py-4 lg:px-20 py-5 px-4 bg-blue-950'>
            <div className="m-8 text-center">
                <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className='text-2xl sm:text-4xl pb-4 font-bold text-yellow-500 text-center'>Trainings</motion.h1>
            </div>
            <div className=' flex flex-col flex-wrap m-2 lg:m-3'>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease: 'easeInOut' }} className='w-full flex px-2'>
                    <div onClick={handleButton1} className={`w-[50%] py-5 mx-2 ${selectedButton === 'Technical' ? 'bg-white/80 text-blue-950' : 'text-white'} text-2xl font-bold text-center cursor-pointer`}>
                        Technical
                    </div>
                    <div onClick={handleButton2} className={`w-[50%] py-5 mx-2 ${selectedButton === 'Non-Technical' ? 'bg-white/80 text-blue-950' : 'text-white'} text-2xl font-bold text-center cursor-pointer`}>
                        Non-Technical
                    </div>
                </motion.div>
                <motion.hr initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }}></motion.hr>
                <motion.div className='w-full py-2'>
                    <div className='w-full text-blue-950 flex flex-wrap text-center items-center content-center justify-center'>
                        {selectedButton === 'Technical' ?
                            technical.map((t, index) => (
                                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1, ease: 'easeInOut' }} id='service-card' className='w-36 p-8 m-2 rounded-xl  bg-slate-50/50 flex flex-wrap text-center items-center content-center justify-center' key={index}>
                                    <a href='https://forms.gle/ndxTbi3MwnvFXeqZ8'><span>{t}</span></a>
                                </motion.div>
                            )) :
                            nonTechnical.map((t, index) => (
                                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1, ease: 'easeInOut' }} id='service-card' className="w-36 p-8 m-2 md:m-3 lg:m-4 rounded-xl bg-slate-50/50 flex flex-wrap text-center items-center content-center justify-center" key={index}>
                                    <a href='https://forms.gle/ndxTbi3MwnvFXeqZ8'><span>{t}</span></a>
                                </motion.div>
                            ))
                        }
                    </div>

                </motion.div>
            </div>
        </section >
    );
}

export default Training