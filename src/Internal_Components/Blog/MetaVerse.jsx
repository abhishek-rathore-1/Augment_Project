import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import MetaVerseImg from '../../Internal_Component_Files/Blogs/metaVerse.webp'

function MetaVerse() {

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
                <div className="bg-black/80 border-y-2 border-purple-500 min-h-screen py-12 px-4 sm:px-8 lg:px-20">

                    {/* Container */}
                    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

                        {/* Top Image */}
                        <img
                            src={MetaVerseImg}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover" />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                How AR and VR Are Reshaping the Metaverse
                            </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The metaverse is emerging as a vast digital universe, powered by AR and VR technologies that blur the boundaries between physical and virtual worlds. The metaverse blends the real and virtual worlds, creating immersive experiences and novel social, commercial, and educational opportunities.

                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                How AR & VR Transform Experiences:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>VR creates immersive, interactive environments for work, learning, or creativity</li>
                                <li>AR overlays digital information—enhancing education, retail, and tourism</li>
                                <li>New economic models: digital assets, NFTs, and virtual marketplaces</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Combined, AR and VR anchor persistent spaces—virtual offices, social hubs, and digital twins for real-time monitoring in various industries. This blend is powered by AR and VR technologies that enable users to interact within dynamic digital environments that enhance physical realities.
                            </p>

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Challenges in Metaverse Adoption:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Hardware affordability and comfort</li>
                                <li>Inclusivity and accessibility</li>
                                <li>Privacy, security, and digital well-being</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                As technologies mature, the metaverse will become a pivotal stage for entertainment, work, and human expression in the digital age. The development of digital assets and token economies within the metaverse fosters new ecosystems of creators and consumers.
                            </p>
                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default MetaVerse