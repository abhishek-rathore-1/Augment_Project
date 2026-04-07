import React from 'react'
import img from '../../Internal_Component_Files/services.avif'
import services_bg from '../../Internal_Component_Files/services_bg.avif'
import { Services_data } from '../../assets/ProjectsData'

function Services() {
  
  return (
    <div>
      <>
        {/* ================= HERO SECTION ================= */}
        <div
          className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 rounded-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              OUR
              <span className="underline underline-offset-4 decoration-1 font-light">
                {" "}Services
              </span>
            </h1>

            <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              We deliver end-to-end digital solutions powered by modern technologies, intelligent systems, and scalable architectures. From strategy and design to development and deployment, we help businesses innovate, optimize, and grow in a rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        {/* ================= TECHNOLOGY GRID ================= */}
        <div
          className="w-full px-5 sm:px-10 md:px-20 lg:px-30 py-12 sm:py-16 md:py-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${services_bg})` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {Services_data.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-[320px] max-w-[320px] bg-black/90 rounded-2xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-t-5 border-purple-700">
                                    <div className='w-full h-44 overflow-hidden border-5 border-purple-700 bg-gray-10 rounded-t-xl flex items-center justify-center'>
                                        <img
                                            src={item.img}
                                            className="w-full object-contain hover:scale-120 transition-transform duration-300"
                                        />
                                    </div>
            
                                    <div className="p-5">
                                        <h3 className="text-lg text-white font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
          </div>
        </div>
      </>
    </div>
  )
}

export default Services