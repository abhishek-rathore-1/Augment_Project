import React from 'react'
import Navbar from '../aNavBar/Navbar'
import './Header.css'
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className="relative z-30 text-2xl text-white  bg-opacity-50 " id='Header'>
            <div className="video-container">
                <video autoPlay loop muted className="bg-video">
                    <source src='/bg.mp4' type="video/mp4" />
                </video>
                <div className="content">
                    < Navbar />
                    <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    
                    className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                        <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Welcome to Augment Tech</h1>
                        <div className='space-x-6 mt-16'>
                            <a href="#Projects" className='border border-white px-8 py-3 rounded  md:px-6'>projects</a>
                            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded md:px-6'>Contact Us</a>
                        </div>
                    </motion.div>
                </div>
            </div>


        </header>
    )
}

export default Header

