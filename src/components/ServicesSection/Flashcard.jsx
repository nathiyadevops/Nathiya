import React from 'react'

export default function Flashcard({ name }) {
    return (
        <div className='flex items-center justify-center content-center h-[110px] w-[110px] lg:h-[200px] lg:w-[200px] md:h-[200px] md:w-[200px] bg-white/50 text-blue-950 hover:bg-white/80 p-5 rounded-lg text-base sm:text-base lg:text-xl '>
            {name}
        </div>
    )
}
