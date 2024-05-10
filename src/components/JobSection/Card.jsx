import React from 'react'

export default function Card({ job }) {
    return (
        <div className="bg-blue-950 text-white card rounded-md overflow-hidden w-[250px] min-h-[300px] lg:w-auto items-center text-center content-center justify-between m-1 p-4">
            <div className="px-3 py-2">
                <div className="font-bold text-xl mb-2">{job.role}</div>
                <p className="text-white text-base">{job.salary} </p>
            </div>
            <div className="relative flex flex-col items-center justify-center mt-auto">
                <div className="px-3 py-2">
                    <span className="inline-block bg-gray-200 rounded-full m-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{job.location}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{job.experience}</span>
                </div>
                <button type="button" className='fixed bottom-10 mx-auto bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'><a href="https://forms.gle/urHu7LBUyFpv25Xj8">Apply</a></button>
            </div>
        </div>
    )
}