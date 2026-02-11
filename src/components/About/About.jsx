import React from 'react'
import OfficeImage from '../../assets/OfficeImage.png'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div 
                    initial={{ opacity: 0, x: 200 }}
                    transition={{ duration: 1 }}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true}}

        className='flex flex-col item-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Company</span></h2>
            <p className='text-gray-500 text-center  mb-8'>Passionate About Technologies, Dedicated to Your Vision</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
                    <h3 className='text-xl font-semibold mb-2'>Our Mission</h3>
                    <p className='text-gray-500'>To empower businesses with innovative technology solutions that drive growth and efficiency.</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
                    <h3 className='text-xl font-semibold mb-2'>Our Vision</h3>
                    <p className='text-gray-500'>To be a global leader in technology innovation, transforming industries through cutting-edge solutions.</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
                    <h3 className='text-xl font-semibold mb-2'>Our Values</h3>
                    <p className='text-gray-500'>Innovation, Integrity, Customer-Centricity
                        diversity, and Excellence.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-statr md:gap-20'>
                <img src={OfficeImage} alt="" className='w-full h-full mt-10 sm:w1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>2+</p>
                            <p className='text-gray-400'>Years of Experience</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>50+</p>
                            <p className='text-gray-400'>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>30+</p>
                            <p className='text-gray-400'>Happy Clients</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-400'>Awards Won</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>Augment Tech is a cutting-edge technology company dedicated to revolutionizing the way businesses operate through innovative solutions. Our mission is to empower organizations with advanced tools and technologies that enhance efficiency, productivity, and overall performance. We specialize in developing state-of-the-art software applications, leveraging artificial intelligence, machine learning, and data analytics to deliver tailored solutions that meet the unique needs of our clients. At Augment Tech, we are committed to driving digital transformation and helping businesses stay ahead in an ever-evolving technological landscape.
                    </p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
                </div>
            </div>
        </motion.div>
    )
}
export default About


