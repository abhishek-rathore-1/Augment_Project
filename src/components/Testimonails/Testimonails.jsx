import React from 'react'
import { testimonialsData } from '../../assets/ProjectsData'
import star_icon from '../../assets/star_icon.svg'
import { motion } from 'framer-motion'
function Testimonails() {
    return (
        <motion.div

            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonails'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>What our customers are saying</p>

            <div className='flex flex-wrap justify-center gap-8'>
                { /* Testimonails Cards */}
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[280px] shadow-lg rounded px-8 py-12 text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
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
        </motion.div>
    )
}

export default Testimonails