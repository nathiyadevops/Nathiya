"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { testimonials } from "@/data/TestData";
import CenterAligner from "./CenterAligner";
import { motion } from "framer-motion";

const Testimonial = () => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <CenterAligner>
            <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="text-center text-blue-950 text-2xl font-bold sm:text-3xl pb-8">
                Hear from our students
            </motion.h1>

            <section className="max-w-[1100px] mx-auto w-full rounded-xl relative overflow-hidden">
                <Slider {...settings} ref={sliderRef}>
                    {testimonials.map((single, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="h-full">
                            <section className="mx-auto  p-5 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">

                                <div className="space-y-5 text-center">
                                    <div className="border-8 inline-block rounded-full border-yellow-500 p-2.5">
                                        <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                                            <img
                                                src={single.img}
                                                alt="Boy"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-medium">{single.name}</h2>
                                        <p className="text-gray-600">{single.profession}</p>
                                    </div>
                                </div>

                                <div className="text-[16px] sm:text-[18px] space-y-3">
                                    <div className="text-blue-950 text-[25px] lg:text-[40px]">
                                        <FaQuoteLeft />
                                    </div>
                                    <p className="leading-[30px] font italic">{single.testimonial}</p>
                                    <div className="text-blue-950 text-[25px] lg:text-[40px]">
                                        <FaQuoteRight className="ml-auto" />
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    ))}
                </Slider>

                <button
                    className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600"
                    onClick={() => sliderRef?.current?.slickPrev()}
                >
                    <MdOutlineArrowBackIos />
                </button>

                <button
                    className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600"
                    onClick={() => sliderRef?.current?.slickNext()}
                >
                    <MdOutlineArrowForwardIos />
                </button>
            </section>
        </CenterAligner>
    );
};

export default Testimonial;
