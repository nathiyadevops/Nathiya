'use client';
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from "react-slick";
import { jobs } from "@/data/JobsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"; // Make sure to import or define Card
import { motion } from "framer-motion";
import axios from "axios";

export function JobSection() {
    // const [jobs, setJobs] = useState([]);

    // async function getJobs() {
    //     const url = "http://cshr.us-east-1.elasticbeanstalk.com/api/jobs";
    //     const res = await fetch(url, { cache: 'no-cache' });
    //     if (!res.ok) {
    //         throw new Error('Failed to fetch data');
    //     }
    //     const data = await res.json();
    //     console.log("data", data);

    //     return data;
    // }

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         try {
    //             const data = await getJobs();
    //             setJobs(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchJobs();
    // }, []);

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <AiOutlineArrowLeft size={30} className="arrows" style={{ color: "blue" }} />
            </div>
        )
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <AiOutlineArrowRight size={30} className="arrows" style={{ color: "blue" }} />
            </div>
        )
    }

    const settings = {
        slidesToShow: jobs.length < 4 ? jobs.length : 4,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section id="jobs" className="bg-white/10 flex items-center justify-center py-4">
                <div className="w-full mx-auto flex flex-col text-center content-center justify-center m-2 md:m-4 lg:m-4">
                    <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="text-center text-blue-950 text-2xl font-bold sm:text-3xl">
                        Jobs
                    </motion.h1>
                    <div className="px-14">
                        <div className="lg:w-full mx-auto my-2">

                            {
                                jobs.length === 0 ? (
                                    <p className="text-center text-gray-500">No Jobs Available for now</p>
                                ) :

                                    <Slider {...settings}>
                                        {jobs.map((job, index) => (
                                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{
                                                duration: 0.5, delay: 0.1
                                            }}
                                                key={index} className="lg:m-2 lg:p-2 p-2 m-2" >
                                                <Card job={job} />
                                            </motion.div>
                                        ))}
                                    </Slider>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
