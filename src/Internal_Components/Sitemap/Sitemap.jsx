import React from "react";
import './Sitemap.css'
import img from '../../Internal_Component_Files/sitemap_bg.jpg'
import img_2 from '../../Internal_Component_Files/Sitemap_img.jpg'
import { NavLink } from "react-router-dom";

const sitemapLinks = [
    "Home",
    "About Us",
    "Services",
    "Technology",
    "Our Work",
    "Blog",
    "Contact Us",
];

const Sitemap = () => {
    return (
        <>
            <div className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"  style={{ backgroundImage: `url(${img})` }}>
                <div className="bg-black/30 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-20 rounded-xl">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white'>SITEMAP <span className='underline underline-offset-4 decoration-1 font-light'>Quick Navigation</span></h1>
                    <p className='text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto'>Fast access to all essential pages in one place.</p>
                </div>
            </div>
            <section className="py-20 px-4 bg-black/80 border-y-2 border-purple-500">

                <div className="max-w-7xl mx-auto px-6">

                    {/* Content */}
                    <div className="grid grid-cols-1 bg-white  lg:grid-cols-2 gap-14 p-20 pt-5 items-center shadow-lg shadow-gray-700">

                        {/* Left – Sitemap Links */}
                        <div className="space-y-5">
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/' className="text-gray-800 font-medium">Home</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/About Us' className="text-gray-800 font-medium">About Us</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/Services' className="text-gray-800 font-medium">Services</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/Technology' className="text-gray-800 font-medium">Technology</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/Our Work' className="text-gray-800 font-medium">Our Work</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/Blog' className="text-gray-800 font-medium">Blog</NavLink>
                            </div>
                            <div className="bg-white shadow-md hover:shadow-lg transition-all
                           border border-gray-100 rounded-md px-6 py-4
                           cursor-pointer hover:translate-x-2" >
                                <NavLink onClick={() => window.scrollTo(0, 0)} to='/LetsConnect' className="text-gray-800 font-medium">Contact Us</NavLink>
                            </div>
                        </div>

                        {/* Right – Illustration */}
                        <div className="flex justify-center">
                            <img
                                src={img_2}
                                alt="Sitemap Illustration"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Sitemap;