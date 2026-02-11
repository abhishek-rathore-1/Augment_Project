import React from 'react'
import AugmentLogo from '/AugmentLogo.png'
import AugmentLogo1 from '/AugmentLogo1.png'

function Footer() {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row items-start justify-between'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <div className='container mx-auto flex flex-row gap-0 items-center'>
                        <img className='w-10 h-10' src={AugmentLogo} alt="" />
                        <img src={AugmentLogo1} alt="" className='h-10'/>
                        {/* <h3 className='text-lg font-bold'></h3> */}
                    </div>
                    <p className='text-gray-400 mt-4'>Augment Technology creates reliable, scalable digital solutions empowering businesses through innovation, design excellence, and cutting-edge technology worldwide.
                    </p>
                </div>
                <div className='md:1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Projects" className='hover:text-white'>Projects</a>
                        <a href="#Testimonails" className='hover:text-white'>Testimonails</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>Stay updated with our latest news and offers. Enter your email below to subscribe to our newsletter.</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto h-10' />
                        <button className='bg-indigo-500  text-white px-12 py-2 mb-10 rounded cursor-pointer hover:bg-cyan-500 shadow-lg hover:shadow-indigo-500/60'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <p className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>&copy; 2024 Augment Tech. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer