import React, { useEffect, useState, useRef } from 'react'
import { ServicesData } from '../../assets/ProjectsData';


function Services() {


    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const DOTS_COUNT = 9;

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


    return (

        <div className='py-10 lg:px-32 w-full overflow-hidden bg-black/80 border-y-2 border-purple-500'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-5 text-center'>OUR <span className='underline underline-offset-4 decoration-1 under font-light'>SERVICES</span></h1>
            <p className='text-center text-gray-300 mb-10 max-w-full mx-auto'>We provide industry-specific and need-based services, which allows us to deliver tailor-made solutions. We serve customers ranging from small individual startups to big corporate houses.</p>

            <div ref={scrollRef} onMouseEnter={() => clearInterval(window.autoScroll)}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {ServicesData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-t-5 border-purple-500">
                        <div className='w-full h-44 bg-gray-10 rounded-t-2xl flex items-center justify-center'>
                            <img
                                src={item.image}
                                className="w-full h-44 object-contain p-4 hover:scale-120 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-8 relative z-10">
                {[...Array(DOTS_COUNT)].map((_, i) => (
                    <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ease-out
                ${i === activeIndex
                                ? "bg-black scale-125 shadow-[0_0_8px_#c084fc]"
                                : "bg-gray-500/40"
                            }
              `}
                    />
                ))}
            </div>
        </div >
    )
}

export default Services