import React from 'react'
import img from '../../Internal_Component_Files/careerwithus.png'
import bgimg from '../../Internal_Component_Files/career-bg.png'
import java from '../../Internal_Component_Files/Java.png'
import Mern from '../../Internal_Component_Files/MERN.png'
import Mean from '../../Internal_Component_Files/MEAN.png'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { CalendarDays, IndianRupee, Monitor, Globe, MapPin, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'

function WorkWithUs() {

    const data = [
        {
            icon: <CalendarDays size={28} />,
            title: "FLEXIBLE WORKING HOURS",
        },
        {
            icon: <IndianRupee size={28} />,
            title: "EXCLUSIVE PAID HOLIDAYS",
        },
        {
            icon: <Monitor size={28} />,
            title: "REWARD PROGRAM",
        },
        {
            icon: <Globe size={28} />,
            title: "A HEALTHY ENVIRONMENT",
        },
        {
            icon: <FaMoneyBill1Wave size={28} />,
            title: "COMPETIVE & ON-TIME SALARY",
        },
        {
            icon: <RiTeamFill size={28} />,
            title: "TEAM BUILDING CAMPS & WORKSHOPS",
        },
    ];

    const jobs = [
        {
            id: 1,
            title: "Java Developer",
            location: "Indore",
            desc: "Experience in core Java advanced programming. Experience in Spring & Hibernate is mandatory. Experience in building mechanisms like Maven. Good knowledge on design patterns and anti-patterns.",
            icon: java,
        },
        {
            id: 3,
            title: "MERN Stack Developer",
            location: "Indore",
            desc: "We are looking for a MERN Stack Developer to produce scalable software solutions. You'll be part of a cross-functional team responsible for the full software development life cycle.",
            icon: Mern,
        },
        {
            id: 2,
            title: "MEAN Stack Developer",
            location: "Indore",
            desc: "Scope and deliver solutions with the ability to design solutions independently based on high-level architecture. Building interactive consumer data from multiple systems.",
            icon: Mean,
        },
    ];

    return (
        <div>
            <>
                {/* ================= HERO SECTION ================= */}
                <div
                    className="pt-24 sm:pt-32 md:pt-25 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 rounded-xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                            Explore
                            <span className="underline underline-offset-4 decoration-1 font-light">
                                {" "}Opportunities
                            </span>
                        </h1>

                        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                            We consider our employees to be our most valuable asset! We strive to provide them with new and challenging opportunities to hone their technology skills and advance their careers in a fast-paced environment.
                        </p>
                    </div>
                </div>

                {/* ================= TECHNOLOGY GRID ================= */}
                <div className="bg-black/80 border-y-2 border-purple-500 py-20 px-6 sm:px-10 lg:px-20">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">
                            About Working Here
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5 bg-white rounded-[40px] p-8 shadow-2xl shadow-purple-300 transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 " >

                                {/* Icon Circle */}
                                <div className="flex items-center flex-shrink-0 justify-center w-16 h-16 rounded-full border-2 border-black">

                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
                                        {item.icon}
                                    </div>

                                </div>

                                {/* Text */}
                                <h3 className="text-md font-medium text-gray-800">
                                    {item.title}
                                </h3>

                            </div>
                        ))}

                    </div>
                </div>
                <div className="py-16 px-6 lg:px-20 bg-cover bg-center bg-no-repeat border-b-2 border-purple-500" style={{ backgroundImage: `url(${bgimg})` }}>

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">
                            Job Openings
                        </h2>
                    </div>

                    {/* Job Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                        {jobs.map((job) => (

                            <div
                                key={job.id}
                                className="bg-white border rounded-md p-8 shadow-md 
            transition duration-300 
            hover:shadow-xl hover:-translate-y-2"
                            >

                                {/* Tags */}
                                <div className="flex gap-3 mb-6">

                                    <span className="text-green-600 bg-gray-200 px-3 py-1 text-sm rounded">
                                        FULL TIME
                                    </span>

                                    <span className="text-white bg-red-500 px-3 py-1 text-sm rounded">
                                        INTERNSHIP
                                    </span>

                                </div>

                                {/* Title + Icon */}
                                <div className="flex items-center gap-4 mb-3">

                                    <img
                                        src={job.icon}
                                        alt="icon"
                                        className="w-10 h-10 object-contain"
                                    />

                                    <h3 className="text-lg font-semibold text-blue-600">
                                        {job.title}
                                    </h3>

                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">

                                    <MapPin size={16} className="text-green-600" />

                                    {job.location}

                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    {job.desc}
                                </p>

                                {/* Apply Button */}
                                <Link
                                    to={`/apply/${job.id}`}
                                    className="flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all"
                                >

                                    Apply Now

                                    <ArrowRight size={16} />

                                </Link>

                            </div>

                        ))}

                    </div>

                    {/* Footer Email */}
                    <div className="text-center mt-14 text-lg bg-white/50 mx-70">

                        Send your resume at{" "}

                        <a href="mailto:hr@augmentinfotech.com" className="text-blue-600 font-medium break-all hover:underline">
                            "hr@augmentinfotech.com"
                        </a>

                    </div>

                </div>
            </>
        </div>
    )
}

export default WorkWithUs
