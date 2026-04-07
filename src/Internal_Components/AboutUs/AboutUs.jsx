import React, { useEffect, useState, useRef } from "react";
import { About_Data, Choose_Us } from "../../assets/ProjectsData";
import img from "../../Internal_Component_Files/technology.jpg"
import bgImage from "../../Internal_Component_Files/technology2.jpg"



const AboutUs = () => {

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % About_Data.length);
    }, 5000); // change dot every 2 seconds

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="pt-24 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
        style={{ backgroundImage: `url(${img})` }} >
        <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            ABOUT
            <span className="underline underline-offset-4 decoration-1 font-light">
              {" "}Us
            </span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Augment Infotech is a forward-thinking technology company dedicated to delivering innovative digital solutions that empower businesses to grow, adapt, and succeed in a rapidly evolving digital world. We combine technology expertise, creative thinking, and a client-first approach to build solutions that drive real business value.
          </p>
        </div>
      </div>

      {/* ================= TECHNOLOGY GRID ================= */}
      {/* <div
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
      </div> */}

      {/* ================= MARQUEE SECTION ================= */}
      <div className="relative pt-16 sm:pt-20 bg-gray-800 overflow-hidden border-y-2 border-purple-500">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-black">
            WHO
            <span className="underline underline-offset-4 decoration-1 font-light">
              {" "}We Are
            </span>
          </h1>

          <h1 className="text-3xl font-semibold mt-2 text-purple-500/30 text-center">
            Your Strategic Technology Partner
          </h1>

          <div className="text-center py-5 text-gray-100 text-sm sm:text-base md:text-lg mb-10">
            <p>
              At Augment Infotech, we believe technology should not just support businesses—it should accelerate their growth. Our approach focuses on understanding our clients’ vision and delivering tailored solutions that align with their long-term goals.
            </p>

            <p>
              We specialize in designing and developing reliable digital systems using modern technologies such as Python, Angular, PHP, and advanced web frameworks. Our expertise spans across multiple domains, enabling us to create powerful solutions that are secure, scalable, and future-ready.
            </p>
          </div>
        </div>


        {/* Marquee Logos */}
        <div ref={scrollRef} className="py-8 sm:py-10 overflow-hidden max-w-full sm:max-w-4xl md:max-w-8xl mx-auto bg-gray-800 border-y-2 border-black/500">
          <div className="flex animate-marquee w-max">
            {[...About_Data, ...About_Data].map((item, index) => (
              <div
                key={index}
                className="w-70 md:w-100 h-auto mx-10 bg-transparent text-white shadow-purple-500 px-6 sm:px-10 md:px-15 py-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-full h-full sm:h-24" />

                <h3 className="text-lg sm:text-xl font-semibold text-black text-center mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {About_Data.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-purple-500 scale-125" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>

        <section className="py-20 mt-20 bg-gray-700 border-y-2 border-purple-500 text-center rounded-t-4xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-black">
            WHY
            <span className="underline underline-offset-4 decoration-1 font-light">
              {" "}Choose Us
            </span>
          </h1>

          <h2 className="text-3xl font-semibold mt-2 text-purple-500">
            We help you to increase your product through solutions.
          </h2>

          <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto mt-16 px-6">

            {Choose_Us.map((item, index) => (
              <div key={index} className="text-center">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 mx-auto mb-6 animate-scale"
                />

                <h3 className="text-purple-500 text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-white text-start text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </section>

      </div>


    </>
  );
};

export default AboutUs;

