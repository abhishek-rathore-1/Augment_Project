import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import web3Img from '../../Internal_Component_Files/Blogs/web3.webp'

function Web3() {

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
                            src={web3Img}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                Web3 Explained: What It Means for the Future of the Internet                          </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Web3 seeks to create a decentralized, user-empowered internet where control and value flow back to individuals, not central platforms. The vision of Web3 centers on restoring digital sovereignty to individuals by eliminating central points of control, thereby fostering greater privacy and equitable participation.

                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Web Evolution Overview:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li> Web1: Static pages and read-only content</li>
                                <li>Web2: Interactive platforms (social media, cloud), data held by big tech</li>
                                <li>Web3: User-controlled data, assets, and identity with cryptography and blockchain</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Digital ownership becomes possible with blockchain tokens—users can directly own digital assets, transact via smart contracts, and join decentralized finance. This new internet paradigm enables actual ownership of digital goods, financial autonomy through decentralized platforms, and the emergence of governance models rooted in collective agreement.                            </p>

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Central Web3 Principles:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Digital ownership and tokenized assets</li>
                                <li>Decentralized finance (DeFi)</li>
                                <li>Self-sovereign identity</li>
                                <li>Trustless, automated collaboration via DAOs</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Challenges persist around user accessibility, scalability, energy use, and regulatory oversight. Despite challenges including technological hurdles and regulatory questions, Web3 carries the promise of a more open, user-controlled online experience.                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Web3’s vision is a transparent, privacy-protecting, community-owned, and participatory internet—impacting finance, gaming, and social experiences alike. Its advancement signals a shift towards an internet governed by its participants, not gatekeepers, redefining the digital landscape across sectors.                            </p>
                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default Web3