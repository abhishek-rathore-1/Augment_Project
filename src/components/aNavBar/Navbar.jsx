import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [desktopMenu, setDesktopMenu] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

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


    // for bg change on scroll
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between item-center py-4 text-xl px-6 md:px-20 lg:px-5">
                {/* <h1 className='text-3xl font-semibold text-sky-400' id='AugmentLogo'>AUGMENT Infotech</h1> */}

                <a className="flex flex-col items-center justify-center p-3 font-sans" href="/">
                    {/* Top Row: AUGMENT INFOTECH */}
                    <div className="flex items-center tracking-tighter sm:tracking-normal">
                        {/* "AUGMENT" with gradient-like blue shift */}
                        <h1 className="text-1xl md:text-1xl font-black italic">
                            <span className="text-[#1A1A8B]">AUG</span>
                            <span className="text-[#1A1A8B]">M</span>
                            <span className="text-[#2D2DBE]">ENT</span>
                        </h1>

                        {/* "INFOTECH" in Charcoal Gray */}
                        <h1 className="text-1xl md:text-1xl font-black italic ml-2 text-[#555555]">
                            INFOTECH
                        </h1>
                    </div>
                </a>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-0 text-white font-medium text-sm">

                    {/* We Are */}
                    <li
                        className="relative"
                        onMouseEnter={() => setDesktopMenu("weare")}
                        onMouseLeave={() => setDesktopMenu(null)}
                    >
                        <button className="cursor-pointer hover:text-gray-500 flex items-center gap-0 p-4">
                            We Are <span className="text-[10px]"> ▼</span>
                        </button>

                        {desktopMenu === "weare" && (
                            <div className="absolute -mx-4 w-30 bg-black/80 backdrop-blur-md border-t-2 border-purple-400 rounded-md shadow-lg z-50 overflow-hidden">
                                <ul className="text-white text-xs flex flex-col">
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/About Us' className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors p-2">About Us</NavLink>
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/Team' className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors p-2">Team</NavLink>
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/workwithus' className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors p-2">Career</NavLink>
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/LetsConnect' className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors p-2">Contact Us</NavLink>
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/faq' className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors p-2">FAQ</NavLink>
                                </ul>
                            </div>
                        )}
                    </li>

                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/Services' className="cursor-pointer hover:text-gray-500 p-4">Services</NavLink>
                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/Technology' className="cursor-pointer hover:text-gray-500 p-4">Technology</NavLink>
                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/blog' className="cursor-pointer hover:text-gray-500 p-4">Blog</NavLink>

                    {/* Our Work */}
                    <li
                        className="relative"
                        onMouseEnter={() => setDesktopMenu("work")}
                        onMouseLeave={() => setDesktopMenu(null)}
                    >
                        <button className="cursor-pointer hover:text-gray-500 flex items-center gap-0 p-4 px-0">
                            Our Work <span className="text-[10px]"> ▼</span>
                        </button>

                        {desktopMenu === "work" && (


                            <div className="absolute right-0 bg-black/80 backdrop-blur-md w-200 border-t-3 border-purple-400 rounded-md shadow-lg z-50">
                                <div className="max-w-7xl mx-auto px-12 py-10">
                                    <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">

                                        {/* Column 1 */}
                                        <ul className="space-y-0">
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Web Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Software Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">DevOps</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">IT Consulting</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Data Analytics</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Digital Transformation</li>
                                        </ul>

                                        {/* Column 2 */}
                                        <ul className="space-y-0">
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Mobile App Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">AI & Machine Learning</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Blockchain Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Cybersecurity</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Internet of Things (IoT)</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">E-commerce Solutions</li>
                                        </ul>

                                        {/* Column 3 */}
                                        <ul className="space-y-0">
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">UI/UX Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Agile Development</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Cloud Services</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Industry Solutions</li>
                                            <li className="text-sm text-white hover:text-purple-700 hover:bg-purple-100 cursor-pointer transition-colors py-2">Managed IT Services</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
                {/* <button className='hidden md:block bg-white px-8 py-2 rounded-full text-black text-base' ><a href="#Contact">Contact Us</a></button> */}

                {showMobileMenu == false ? (<CgMenuRightAlt onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 m-auto p-auto cursor-pointer  text-white ms-35' />) : (<></>)}

            </div>
            {/* ----------mobile menu---------- */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed' : 'h-0 w-0'} fixed -left-1 right-20 h-150 border-b-5 border-r-1 top-0 overflow-hidden text-white bg-black/80 backdrop-blur-md transition-all duration-600 ease-in z-50 shadow-xl rounded-br-xl`}>
                <div className='flex justify-end p-6 cursor-pointer'><IoClose onClick={() => setShowMobileMenu(false)} className='w-6' /></div>
                <ul className='flex flex-col items-center mt-5 gap-2 px-5 text-lg font-medium'>
                    <div>
                        <a
                            onClick={() =>
                                setMobileDropdown(
                                    mobileDropdown === "weare" ? null : "weare"
                                )
                            }
                            href='#'
                            className="cursor-pointer hover:text-gray-500 flex items-center px-11 py-2 rounded-full">
                            We Are<span className="text-[13px] pl-1"> ▼</span>

                        </a>

                        {mobileDropdown === "weare" && (
                            <div className="text-sm flex flex-col items-center justify-center bg-white rounded-md shadow-lg border-2 border-b-5  border-purple-400 z-50">
                                <ul className="text-black text-xs flex flex-col  w-full">
                                    <a onClick={() => setShowMobileMenu(false)} href="#About" className="py-2">About Us</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="py-2">Team</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="py-2">Career</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="py-2">Contact Us</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="py-2">FAQ</a>
                                </ul>
                            </div>
                        )}
                    </div>

                    <a onClick={() => setShowMobileMenu(false)} href='#Services' className="px-4 py-2 rounded-full inline-block">Services</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#' className="px-4 py-2 rounded-full inline-block">Technology</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#' className="px-4 py-2 rounded-full inline-block">Blog</a>

                    {/* Our Work */}
                    <div>
                        <button
                            onClick={() =>
                                setMobileDropdown(
                                    mobileDropdown === "work" ? null : "work"
                                )
                            }
                            className="cursor-pointer hover:text-gray-500 flex items-center px-18 py-2 rounded-full">
                            Our Work<span className="text-[13px] pl-1"> ▼</span>
                        </button>

                        {mobileDropdown === "work" && (
                            <div className="text-sm flex flex-col items-center justify-center bg-white rounded-md shadow-lg border-2 border-b-5  border-purple-400 z-50">
                                <ul className="text-black text-xs flex flex-col overflow-y-auto h-54 w-full">
                                    <a onClick={() => setShowMobileMenu(false)} href="#About" className="p-3 px-10">Web Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Software Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">DevOps</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="p-3 px-10">IT Consulting</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Data Analytics</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Digital Transformation</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Mobile App Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">AI & Machine Learning</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Blockchain Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Internet of Things (IoT)</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Cybersecurity</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">E-commerce Solutions</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">UI/UX Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Agile Development</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Cloud Services</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Industry Solutions</a>
                                    <a onClick={() => setShowMobileMenu(false)} href="#" className="p-3 px-10">Managed IT Services</a>
                                </ul>
                            </div>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar






//<a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
//<a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
//<a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
//<a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>








// import { useState } from "react";

// const Navbar = () => {





// return (
//     <nav className="w-full bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto px-6">

//             {/* NAV BAR */}
//             <div className="flex items-center justify-between h-16">




//                 {/* MOBILE MENU BUTTON */}
//                 <button
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     className="md:hidden focus:outline-none"
//                 >
//                     <div className="space-y-1">
//                         <span className="block w-6 h-0.5 bg-gray-800"></span>
//                         <span className="block w-6 h-0.5 bg-gray-800"></span>
//                         <span className="block w-6 h-0.5 bg-gray-800"></span>
//                     </div>
//                 </button>
//             </div>

//             {/* MOBILE MENU */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden pb-4">

//                     {/* We Are */}


//                 </div>
//             )}
//         </div>
//     </nav>
// );
// };

// export default Navbar;
