import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import ArtIntelImg from '../../Internal_Component_Files/Blogs/ArtIntel.webp'

function ArtIntel() {

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
                            src={ArtIntelImg}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                AI in 2025: Where Is Artificial Intelligence Headed?                            </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Artificial intelligence (AI) is now at the heart of innovation. By 2025, it is poised to transform industries, economies, and daily life more dramatically than ever before. AI is shifting from a futuristic concept to a mainstream transformative force, reshaping how we diagnose illness, deliver services, and even create art. Its rapid advances promise to redefine societal norms and economic structures.
                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Key Trends:                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Expansion of autonomous vehicles and delivery drones</li>
                                <li>Advanced machine learning in healthcare for early, accurate diagnosis</li>
                                <li>AI-driven virtual assistants and automation streamlining businesses</li>
                                <li>Generative AI supporting creative industries</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                AI's impact in healthcare is profound. Systems enable earlier, more accurate diagnosis, automate routine assessments, support drug discovery, and make personalized medicine accessible through powerful algorithms. Healthcare is embracing AI innovations such as advanced imaging analysis and personalized treatment plans that evolve according to patient data, marking a new era in medical care.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Businesses use AI to automate tasks, analyze big data, and provide always-on customer support. This frees employees for creative problem-solving and fosters innovation. AI automates previously time-consuming tasks and offers data-driven insights that allow businesses to optimize processes while keeping customer experience seamless and responsive.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Creative professionals now leverage generative AI for art, music, writing, and film—collaborating with intelligent tools to expand their work's quality and reach. Artistic creation is augmented by AI systems capable of co-creating new works in music, literature, and visual media, opening fresh avenues for human-machine collaboration.
                            </p>

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                AI Challenges Ahead:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Ensuring privacy, security, and ethical use of data</li>
                                <li> Educating and upskilling workers for evolving roles</li>
                                <li>Addressing job automation and market disruption</li>
                                <li>Establishing regulations for transparency and fairness</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Society must invest in education, accountability, and clear regulatory guidelines for ethical AI use—ensuring trust, fairness, and human oversight in critical decisions. Ethical, legal, and social frameworks are developing alongside AI technology to ensure responsible usage and minimize unintended consequences.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                By 2025, AI will be ubiquitous—embedded in infrastructure, services, businesses, and creative arts. The pace of change will define not just what AI can do, but what it should do, shaping society’s future. The coming years will be pivotal as AI becomes omnipresent, necessitating governance that includes transparency, fairness, and human-centric values.
                            </p>
                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default ArtIntel