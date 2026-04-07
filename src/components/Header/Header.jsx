import React from 'react'
import './Header.css'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
    return (
        <header className="relative z-30 text-2xl text-white  bg-opacity-50 overflow-hidden" id='Header'>
            <div className="video-container">
                <video autoPlay loop muted className="bg-video">
                    <source src='/bg.mp4' type="video/mp4" />
                </video>
                <div className="content">
                    <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                        <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Welcome to Augment Infotech</h1>
                        <div className="mt-16 flex justify-center">
                            <a
                                href="#Contact"
                                className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-lg" >
                                Contact Us
                                <FaArrowRightLong size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header

