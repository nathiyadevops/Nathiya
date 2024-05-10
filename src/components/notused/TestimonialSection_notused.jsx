// 'use client'
// import React, { useEffect, useState } from 'react';
// import Testmonial from './Testmonial';

// async function getTestimonials() {
//     const res = await fetch('https://dummyjson.com/products', {
//         cache: 'no-cache',
//         method: 'get',
//     });

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     const data = await res.json();
//     return data.products;
// }

// const TestimonialSection = () => {
//     const [testimonials, setTestimonials] = useState([]);

//     useEffect(() => {
//         const fetchTestimonials = async () => {
//             try {
//                 const data = await getTestimonials();
//                 setTestimonials(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchTestimonials();
//     }, []);

//     return (
//         <div className='my-10'>
//             <h1 className='text-4xl font-bold text-center text-yellow-500 mb-4'>
//                 Hear us from our clients
//             </h1>
//             <div className='flex flex-wrap justify-around items-center gap-10'>
//                 {testimonials.map((testimonial) => (
//                     <Testmonial key={testimonial.id} data={testimonial} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TestimonialSection;