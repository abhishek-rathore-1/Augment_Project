import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showMobileMenu]);

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                {/* <h1 className='text-3xl font-semibold text-sky-400' id='AugmentLogo'>AUGMENT Infotech</h1> */}

                <div className="flex flex-col items-center justify-center p-3 font-sans">
                    {/* Top Row: AUGMENT INFOTECH */}
                    <div className="flex items-center tracking-tighter sm:tracking-normal">
                        {/* "AUGMENT" with gradient-like blue shift */}
                        <h1 className="text-1xl md:text-1xl font-black italic">
                            <span className="text-[#0B0B3B]">AUG</span>
                            <span className="text-[#1A1A8B]">M</span>
                            <span className="text-[#2D2DBE]">ENT</span>
                        </h1>

                        {/* "INFOTECH" in Charcoal Gray */}
                        <h1 className="text-1xl md:text-1xl font-black italic ml-2 text-[#555555]">
                            INFOTECH
                        </h1>
                    </div>
                </div>

                <ul className='hidden md:flex gap-7 text-white font-medium text-lg'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonails" className='cursor-pointer hover:text-gray-400'>Testimonails</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full text-black text-base' ><a href="#Contact">Contact Us</a></button>

                <CgMenuRightAlt onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' />

            </div>
            {/* ----------mobile menu---------- */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden text-black bg-white transition-all duration-300 ease-in`}>
                <div className='flex justify-end p-6 cursor-pointer'><IoClose onClick={() => setShowMobileMenu(false)} className='w-6' /></div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar