import React from 'react'
import { testimonialsData } from '../../assets/ProjectsData'
import star_icon from '../../assets/star_icon.svg'
// import { motion } from 'framer-motion'
function Testimonails() {
    return (
        <div

            // initial={{ opacity: 0, x: 100 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}

            className='py-10 lg:px-32 w-full overflow-hidden bg-black/80 border-y-2 border-purple-500' id='Testimonails'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
            <p className='text-center text-gray-300 mb-12 max-w-80 mx-auto'>What our customers are saying</p>

            <div className='flex flex-wrap justify-center gap-8'>
                { /* Testimonails Cards */}
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[280px] shadow-lg rounded-b-2xl border-b-5 border-t-2 border-b-purple-500 px-8 py-8 text-center cursor-pointer lg:shadow-[0_0_15px_rgba(59,85,247,0.6),0_0_30px_rgba(60,72,153,0.4)] hover:shadow-2xl hover:shadow-[0_0_15px_rgba(1680,85,247,0.6),0_0_30px_rgba(236,72,153,0.4)] transition-shadow duration-300'>

                        <div className="w-28 h-28 m-auto mb-5 rounded-full p-[3px] bg-gradient-to-br from-black via-purple-500 to-black shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-duration-300">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                < img key={index} src={star_icon} alt="" className='inline-block w-5 h-5 text-yellow-400' />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>))}
            </div>
        </div>
    )
}

export default Testimonails