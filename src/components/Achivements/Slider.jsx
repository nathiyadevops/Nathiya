'use client'
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    // achivements slider
    const slides = [
        {
            url: './assets/achivementImages/award1.jpg'
        },
        {
            url: './assets/achivementImages/award4.jpg'

        },
        {
            url: './assets/achivementImages/award5.jpg'

        },
        {
            url: './assets/achivementImages/award6.jpg'
        },
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
        <div className='max-w-[500px] h-[500px] w-full m-auto p-4 relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>
            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-black cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-black cursor-pointer'>
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