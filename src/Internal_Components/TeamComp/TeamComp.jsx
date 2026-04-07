import React from "react";
import { teamMembers } from "../../assets/ProjectsData";
import img from '../../Internal_Component_Files/Team_bg.webp'

const Team = () => {
  return (
    <>
      <div
        className="pt-50 sm:pt-32 md:pt-15 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
        style={{ backgroundImage: `url(${img})` }} >
        <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-15 rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            MEET
            <span className="underline underline-offset-4 decoration-1 font-light">
              {" "}Our Team
            </span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world.
          </p>
        </div>
      </div>
      <section className="bg-gray-100 py-20">

        <div className="px-40 mx-auto px-6">

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">

                {/* Circular Image with Ring */}
                <div className="group text-center mx-auto">

                  {/* Ring Container */}
                  <div className="relative w-56 h-56 md:mx-auto -ms-10">

                    {/* Gray Base Ring */}
                    <div className="absolute inset-0 rounded-full border-[10px] border-black"></div>

                    {/* Blue Animated Ring */}
                    <div
                      className="absolute inset-0 rounded-full border-[10px] border-purple-900  border-t-transparent border-l-transparent transition-transform duration-700 group-hover:rotate-[360deg]" ></div>
                    {/* Image */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover p-3"
                    />
                  </div>

                </div>

                {/* Name */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-gray-900 mx-auto my-2"></div>

                {/* Role */}
                <p className="text-purple-900 uppercase text-sm tracking-wider">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Team;