import React, { useEffect, useState, useRef } from 'react';
import Fire_t from "../../Internal_Component_Files/Fire.png"
import Fire_b from "../../Internal_Component_Files/Fire_b.png"
import Fire_c from "../../Internal_Component_Files/Fire_c.png"
import { Fire_clients } from '../../assets/ProjectsData'
import { Flame, Wrench, CheckCircle, Plus, AlertTriangle, FileText } from "lucide-react";

function Fire() {

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const DOTS_COUNT = 10;

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let rafId;
        let speed = 0.5; // smooth continuous speed

        const autoScroll = () => {
            container.scrollLeft += speed;

            if (
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth
            ) {
                container.scrollLeft = 0;
            }


            // Update active dot based on scroll
            const progress =
                container.scrollLeft /
                (container.scrollWidth - container.clientWidth);

            const index = Math.floor((progress * DOTS_COUNT) % DOTS_COUNT);
            setActiveIndex(index);



            rafId = requestAnimationFrame(autoScroll);
        };


        rafId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(rafId);
    }, []);

    //--------------------------------------------------------------

    const services = [
        {
            icon: <Flame size={28} />,
            title: "Fire Fighting System Installation",
            desc: "Reliable and effective fire protection solutions for your peace of mind - choose our fire fighting installation systems.",
        },
        {
            icon: <Wrench size={28} />,
            title: "Maintenance/AMC",
            desc: "Keep your fire protection systems in top condition with our comprehensive maintenance and AMC services.",
        },
        {
            icon: <CheckCircle size={28} />,
            title: "Testing Of Fire Fighting System",
            desc: "Our rigorous testing procedures ensure your fire protection system is fully operational when you need it the most.",
        },
        {
            icon: <Plus size={28} />,
            title: "Trainings",
            desc: "Equip yourself with the knowledge and skills needed to prevent and manage fire emergencies through our expert training.",
        },
        {
            icon: <AlertTriangle size={28} />,
            title: "Fire Risk Assessment",
            desc: "Get peace of mind knowing that your fire risks have been identified and managed with our comprehensive services.",
        },
        {
            icon: <FileText size={28} />,
            title: "Fire Safety Audit",
            desc: "Don’t wait until it’s too late. Schedule a fire safety audit with our expert team today.",
        },
    ];

    return (
        <>
            <div
                className="pt-95 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat h-screen"
                style={{ backgroundImage: `url(${Fire_t})` }} >
                <div className="bg-black/30 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-20 rounded-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white flex flex-col">
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
                        <span className="underline underline-offset-4 decoration-1 text-gray-400">
                            {" "}STAY PREPARED FOR THE UNEXPECTED WITH OUR FIRE SOLUTIONS
                        </span>
                    </h1>

                </div>
            </div>

            <section className="border-t-2 border-purple-500 py-10 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Fire_c})` }} >
                <div className="max-w-6xl mx-auto text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 pb-10">
                        Featured Fire Services
                    </h2>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-2"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-50 rounded-full text-orange-500 shadow-inner">

                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-5">
                                    {service.desc}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <div style={{ backgroundImage: `url('${Fire_b}')` }} className="relative bg-cover bg-center overflow-hidden bg-black/80 border-y-2 border-purple-500 pt-5 mx-auto">


                <h1 className='text-2xl sm:text-4xl font-bold mb-5 text-center'>OUR <span className='underline underline-offset-4 decoration-1 under font-light'>Clients</span></h1>
                <p className='text-center text-gray-400 mb-10 max-w-full mx-auto'>Trusted By The World’s Best Companies.</p>


                <section className="py-15 pt-0 overflow-hidden w-150 mx-auto">




                    {/* Scrollable Clients */}
                    <div
                        ref={scrollRef}
                        className="flex gap-10 px-10 py-10 overflow-x-auto scrollbar-hide relative z-10"
                    >
                        {Fire_clients.map((client, index) => (
                            <div
                                key={index}
                                className="min-w-[100px] h-[100px] bg-white rounded-full 
                                       flex items-center justify-center 
                                       shadow-lg hover:scale-90 transition-transform duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_30px_rgba(236,72,153,0.4)]">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-[100px] rounded-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}

                    <div className="lg:flex lg:justify-center lg:ms-0 lg:gap-2 lg:mt-8 lg:relative lg:z-10 mt-10 -ms-100 flex justify-center gap-2 relative">
                        {[...Array(DOTS_COUNT)].map((_, i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ease-out
                                ${i === activeIndex
                                        ? "bg-black scale-125 shadow-[0_0_8px_#c084fc]"
                                        : "bg-gray-400"
                                    }
                              `}
                            />
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Fire