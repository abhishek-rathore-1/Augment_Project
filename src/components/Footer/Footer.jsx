import React from 'react'
import AugmentLogo from '/AugmentLogo.png'
import AugmentLogo1 from '/AugmentLogo1.png'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto gap-10 flex flex-col md:flex-row items-start justify-between'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <div className='container mx-auto flex flex-row gap-0 items-center'>
                        <img className='w-10 h-10' src={AugmentLogo} alt="" />
                        <img src={AugmentLogo1} alt="" className='h-10' />
                        {/* <h3 className='text-lg font-bold'></h3> */}
                    </div>
                    <p className='text-gray-400 mt-4'>Augment Technology creates reliable, scalable digital solutions empowering businesses through innovation, design excellence, and cutting-edge technology worldwide.
                    </p>
                </div>
                <div className='md:1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/' className='hover:text-white'>Home</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/About Us' className='hover:text-white'>About Us</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/Services' className='hover:text-white'>Services</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/Technology' className='hover:text-white'>Technology</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/Team' className='hover:text-white'>Team</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/Sitemap' className='hover:text-white'>Sitemap</NavLink>
                    </ul>
                </div>
                <div className='md:1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>General Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/termsofservices' className='hover:text-white'>Terms of Services</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/Privacy' className='hover:text-white'>Privacy Policy</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/faq' className='hover:text-white'>FAQ</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/LetsConnect' className='hover:text-white'>Contact Us</NavLink>
                        <NavLink onClick={() => window.scrollTo(0, 0)} to='/fire' className='hover:text-white'>Augment Fire Safety Solution</NavLink>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>Stay updated with our latest news and offers. Enter your email below to subscribe to our newsletter.</p>
                   
                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/fire' className="flex justify-left relative mb-5">
                        <div className="relative cursor-pointer px-5 py-2 flex items-center gap-3 rounded-4xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:border-1 border-yellow-300 shadow-[0_0_5px_rgba(255,120,0,0.8)] hover:shadow-[0_0_10px_rgba(255,180,0,1)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
                            {/* 🔥 SVG Flame */}
                            <svg width="28" height="34" viewBox="0 0 64 64" className=" z-10">
                                <defs>
                                    <linearGradient id="fireGradientPro" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#fff176" />
                                        <stop offset="40%" stopColor="#ff9800" />
                                        <stop offset="80%" stopColor="#ff5722" />
                                        <stop offset="100%" stopColor="#b71c1c" />
                                    </linearGradient>
                                </defs>

                                <path d="M32 2  C28 12,18 18,18 30  C18 44,26 52,32 62  C38 52,46 44,46 30  C46 18,36 12,32 2 Z" fill="url(#fireGradientPro)">
                                    <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="0.6s" repeatCount="indefinite"/>
                                </path>
                            </svg>

                            {/* Text */}
                            <span className="relative z-10 text-black font-bold text-sm tracking-wide">
                                Augment Fire Safety Solution
                            </span>
                        </div>
                    </NavLink>

                    <div className='gap-5 flex flex-col items-start'>
                        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto h-10' />
                        <button className='bg-indigo-500  text-white px-12 py-2 rounded cursor-pointer hover:bg-cyan-500 shadow-lg hover:shadow-indigo-500/60'>Subscribe</button>
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