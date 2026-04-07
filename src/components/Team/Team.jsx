import React, { useEffect, useState, useRef } from 'react'
import { TeamDatas } from '../../assets/ProjectsData'
import './Team.css'


function Team() {


    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const DOTS_COUNT = 9;

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let rafId;
  const speed = 0.5;

  const autoScroll = () => {
    container.scrollLeft += speed;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    const progress =
      container.scrollLeft /
      (container.scrollWidth - container.clientWidth);

    const index = Math.floor(progress * DOTS_COUNT);
    setActiveIndex(index);

    rafId = requestAnimationFrame(autoScroll);
  };

  rafId = requestAnimationFrame(autoScroll);
  return () => cancelAnimationFrame(rafId);
}, []);


    return (


        <div className='w-full overflow-hidden' id='Services'>

            <div id='video-container' className='lg:py-10 py-30 relative' style={{ backgroundImage: `url('${''}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <video autoPlay loop muted className="bg-video">
                    <source src='/Team-bg.mp4' type="video/mp4" />
                </video>
                <h1 className='text-2xl sm:text-4xl font-bold mb-5 text-center'>MEET <span className='underline underline-offset-4 decoration-1 under font-light'>Our Team</span></h1>
                <p className='text-center text-gray-300 mb-10 max-w-full mx-auto'>The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world.</p>


                <section className="py-10 overflow-hidden border-2 border-purple-500 shadow-md shadow-purple-500 lg:w-250 mx-auto">
                    {/* Scrollable Clients */}
                    <div
                        ref={scrollRef}
                        className="flex gap-10 py-20 overflow-x-auto scrollbar-hide relative z-10"
                    >
                        {[...TeamDatas, ...TeamDatas].map((TeamData, index) => (
                            <div key={index} className='min-w-[160px] h-[160px] mb-5 -mt-10 rounded-full bg-gradient-to-br from-black via-purple-500 to-black'>
                                <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:scale-90 transition-transform duration-300 cursor-pointer lg:shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_30px_rgba(236,72,153,0.4)]">
                                    <img src={TeamData.image} alt={TeamData.name} className="object-contain" />
                                </div>
                                <div className="text-center mt-4">
                                    <h1 className='font-bold text-lg'>{TeamData.name}</h1>
                                    <p className='text-sm'>{TeamData.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Dots Indicator */}

                <div className="lg:flex lg:justify-center lg:ms-0 lg:gap-2 lg:mt-2 lg:py-10 lg:relative lg:z-10 mt-10 flex justify-center gap-2 relative">
                    {[...Array(DOTS_COUNT)].map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ease-out
                ${i === activeIndex ? "bg-purple-500 scale-125 shadow-[0_0_8px_#c084fc]" : "bg-white/40"}`} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Team;