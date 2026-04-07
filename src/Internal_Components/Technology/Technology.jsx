import React from "react";
import { Technology_data, Technology_logo } from "../../assets/ProjectsData";
import img from "../../Internal_Component_Files/technology.jpg"
import bgImage from "../../Internal_Component_Files/technology2.jpg"
import bgImage2 from "../../Internal_Component_Files/technology2.avif"



const TechCards = () => {
  return (
    <>
  {/* ================= HERO SECTION ================= */}
  <div
    className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 rounded-xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
        TECHNOLOGIES
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}We Use
        </span>
      </h1>

      <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Our development process is powered by enterprise-grade technologies
        designed for performance, security, and scalability. We combine modern
        frameworks and cloud platforms to deliver reliable solutions for
        businesses of all sizes.
      </p>
    </div>
  </div>

  {/* ================= TECHNOLOGY GRID ================= */}
  <div
    className="w-full px-5 sm:px-10 md:px-20 lg:px-50 py-12 sm:py-16 md:py-20 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      {Technology_data.map((item, index) => (
        <div
          key={index}
          className="min-h-[380px] sm:min-h-[420px] md:h-110 lg:h-130 bg-cover bg-center text-white rounded-3xl sm:rounded-[40px] px-6 sm:px-10 md:px-15 py-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-black"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6"
          />

          <h3 className="text-lg sm:text-xl font-semibold text-blue-700 text-center mb-4">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ================= MARQUEE SECTION ================= */}
  <div className="relative py-16 sm:py-20 bg-gray-300 overflow-hidden">

    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-black">
        ENGINEERING
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}Digital Excellence
        </span>
      </h1>

      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-10">
        We architect scalable digital ecosystems that transform complex
        business challenges into high-performance, data-driven solutions.
      </p>
    </div>

    {/* Gradient Left */}
    <div className="absolute left-0 top-0 h-full w-10 sm:w-32 md:w-85 bg-gradient-to-r from-black to-transparent z-10" />

    {/* Gradient Right */}
    <div className="absolute right-0 top-0 h-full w-10 sm:w-32 md:w-85 bg-gradient-to-l from-black to-transparent z-10" />

    {/* Marquee Logos */}
    <div className="py-8 sm:py-10 overflow-hidden max-w-full sm:max-w-4xl md:max-w-8xl mx-auto">
      <div className="flex animate-marquee w-max">
        {[...Technology_logo, ...Technology_logo].map((item, index) => (
          <div
            key={index}
            className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
          >
            <img
              src={item.logo}
              alt="tech-logo"
              className="w-full h-20 sm:h-24 md:h-30 object-contain p-2 sm:p-4"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</>
  );
};

export default TechCards;

