import React, { useEffect, useState, useRef } from 'react'
import Client_bg from '../../assets/Client_bg.png'
import {clients} from '../../assets/ProjectsData'


function OurClients() {


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


    <div className='   pt-10  w-full overflow-hidden bg-black/80 border-y-2 border-purple-500'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-5 text-center'>OUR <span className='underline underline-offset-4 decoration-1 under font-light'>Clients</span></h1>
      <p className='text-center text-gray-300 mb-10 max-w-full mx-auto'>Trusted By The World’s Best Companies.</p>

      <div style={{ backgroundImage: `url('${Client_bg}')` }} className="relative bg-cover bg-center overflow-hidden border-b-4 border-black inset-shadow-sm inset-shadow-blue-300 mx-auto">

        <section className="py-20 overflow-hidden inset-shadow-sm inset-shadow-purple-500 w-200 mx-auto">




          {/* Scrollable Clients */}
          <div
            ref={scrollRef}
            className="flex gap-10 px-10 py-5 overflow-x-auto scrollbar-hide relative z-10"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="min-w-[160px] h-[160px] bg-white rounded-full 
                       flex items-center justify-center 
                       shadow-lg hover:scale-90 transition-transform duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_30px_rgba(236,72,153,0.4)]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[130px] rounded-full object-contain"
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
                    ? "bg-purple-300 scale-125 shadow-[0_0_8px_#c084fc]"
                    : "bg-white/40"
                  }
              `}
              />
            ))}
          </div>

        </section>

        {/* Curvy Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none">
            <path
              fill="#A855F7 50%"
              d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default OurClients