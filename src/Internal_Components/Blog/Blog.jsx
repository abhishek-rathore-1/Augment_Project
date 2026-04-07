import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import { blogData } from '../../assets/ProjectsData'
import { NavLink } from 'react-router-dom'

function Blog() {

    return (
        <div>
            <>
                {/* ================= HERO SECTION ================= */}
                <div
                    className="pt-24 sm:pt-32 md:pt-35 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 rounded-xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                            Creative
                            <span className="underline underline-offset-4 decoration-1 font-light">
                                {" "}Ideas - Blogs
                            </span>
                        </h1>

                        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                            Most creative ideas in blog post of Cloud services , Designing , Development.
                        </p>
                    </div>
                </div>

                {/* ================= TECHNOLOGY GRID ================= */}
                <div className="bg-black/80 border-y-2 border-purple-500 py-16 px-6 sm:px-10 lg:px-20">

                    <div
                        className=" max-w-7xl mx-auto flex flex-wrap justify-center gap-10 ">

                        {blogData.map((blog, index) => (

                            <div
                                key={index}
                                className="  bg-white  rounded-xl  shadow-lg  overflow-hidden  hover:shadow-2xl  transition duration-300 w-full  sm:w-[45%]  lg:w-[30%]  max-w-sm">

                                {/* Image */}
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">

                                    <h3 className="font-bold text-md mb-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {blog.desc}
                                    </p>

                                    {/* Button */}
                                    <NavLink onClick={() => window.scrollTo(0, 0)} to={`/blog/${blog.path}`}>
                                        <button
                                            className=" w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition" >
                                            View more...
                                        </button>
                                    </NavLink>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </>
        </div>
    )
}

export default Blog