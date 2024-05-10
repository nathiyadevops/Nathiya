'use client'
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    // about slider
    const slides = [
        {
            url: './assets/AboutImages/group4.png'
        },
        {
            url: './assets/AboutImages/group1.jpg'
        },
        {
            url: './assets/AboutImages/group2.jpg'

        },
        {
            url: './assets/AboutImages/group3.jpg'
        },
        {
            url: './assets/AboutImages/group5.jpeg'
        },
        {
            url: './assets/AboutImages/group6.jpeg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[480px] w-full m-auto py-8 px-4 relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>
            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        className='text-2xl cursor-pointer'
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider