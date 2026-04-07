import React from 'react'
import CornerImg from '../../assets/CornerImg.png'
import { AboutData } from '../../assets/ProjectsData'

function About() {
    return (
        <div className='flex flex-col item-center justify-center bg-black/80 border-y-2 border-purple-500 p-14 pb-0 md:px-20 lg:px-32 w-full overflow-hidden'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Company</span></h2>
            <p className='text-gray-300 text-center  mb-8'>Passionate About Technologies, Dedicated to Your Vision</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center border-t-2 border-purple-500'>
                    <h3 className='text-xl font-semibold mb-2'>Our Mission</h3>
                    <p className='text-gray-500'>To empower businesses with innovative technology solutions that drive growth and efficiency.</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center border-t-2 border-purple-500'>
                    <h3 className='text-xl font-semibold mb-2'>Our Vision</h3>
                    <p className='text-gray-500'>To be a global leader in technology innovation, transforming industries through cutting-edge solutions.</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6 text-center border-t-2 border-purple-500'>
                    <h3 className='text-xl font-semibold mb-2'>Our Values</h3>
                    <p className='text-gray-500'>Innovation, Integrity, Customer-Centricity
                        diversity, and Excellence.</p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-16">
                < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                {AboutData.map((item, index) => (
                    
                        <div key={index} className=" group relative bg-white rounded-xl p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl overflow-hidden cursor-pointer">
                            {/* Top-right pattern background */}
                            <div className="absolute top-0 right-0 w-35 h-30 bg-no-repeat bg-contain opacity-20 translate-x-10 -translate-y-10 transition-all duration-300 ease-out group-hover:opacity-50 group-hover:translate-x-60 group-hover:translate-y-100"
                                style={{ backgroundImage: `url(${CornerImg})` }}>
                            </div>

                            {/* Icon */}
                            <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4" />

                            {/* Title */}
                            <h3 className="text-lg font-bold mb-3 uppercase">{item.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">{item.description} </p>


                            {/* Bottom-right folded corner */}
                            <span className="corner-fold"></span>
                        </div>
                    
                ))}
                </div >
            </div>

        </div>
    )
}
export default About

