import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import EthicsOfRoboticsImg from '../../Internal_Component_Files/Blogs/EthicsOfRobotics.jpg'

function EthicsOfRobotics() {

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
                            src={EthicsOfRoboticsImg}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                The Ethics of Robotics: What Lines Shouldn’t Be Crossed?                           </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Robots are now entering daily life, raising ethical questions about control, safety, privacy, and fairness as they interact with humans in diverse settings. As robots become integral to daily life, ethical considerations about autonomy, accountability, and human dignity are increasingly important.

                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Ethical Questions for Robotics:                           </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>How much autonomy is safe?</li>
                                <li>Who is responsible for robotic actions?</li>
                                <li>What data is collected—and who owns it?</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Safety protocols, transparent oversight, and multiple fail-safes are essential as robots increasingly share our homes, hospitals, and streets. Safety requires built-in protections, transparent data gathering practices, and adherence to strict oversight, especially as robots operate alongside vulnerable populations.                            </p>

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Other Critical Concerns:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Bias and fairness in robot decision-making</li>
                                <li>Impact of job displacement and automation</li>
                                <li>Emotional and psychological boundaries in human-robot interaction</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Addressing these concerns requires robust guidelines, ongoing dialogue, and adaptive practices that evolve with technological change. Incorporating fairness and bias mitigation into robotic decision-making is vital to prevent harm and social inequality.                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Only through openness, oversight, and collective responsibility can the benefits of robotics be realized without compromising core human values. Psychological impacts of human-robot interaction raise complex questions requiring ongoing societal reflection and interdisciplinary collaboration.                            </p>
                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default EthicsOfRobotics