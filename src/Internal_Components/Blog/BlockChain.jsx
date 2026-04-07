import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import BlockChainImg from '../../Internal_Component_Files/Blogs/BlockChain.jpg'

function BlockChain() {

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
                            src={BlockChainImg}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                Blockchain Beyond Crypto: Real-World Applications                           </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
Blockchain is best known as the technology behind cryptocurrencies, but its potential reaches far beyond digital coins. Beyond cryptocurrencies, blockchain offers unprecedented potential to decentralize trust, creating systems that are resilient, transparent, and accessible across industries.                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Core Blockchain Features:                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Decentralization and distributed records</li>
                                <li>Transparency and immutability of data</li>
                                <li>Reduced risk of fraud and manipulation</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Supply chain management benefits from blockchain by providing an unbroken, verifiable record of goods from producer to consumer. By enabling tamper-proof records at every stage of distribution, blockchain fundamentally improves traceability and authenticity in supply chains.
                            </p>

                           

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Notable Blockchain Use Cases:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Tagging and tracking food or pharmaceuticals to prevent counterfeiting</li>
                                <li> Secure, portable self-sovereign identity management for individuals</li>
                                <li>Smart contracts for automated, transparent financial transactions</li>
                                <li>Decentralized finance (DeFi) for inclusive banking and investments</li>
                                <li>Medical records management for privacy and secure data sharing</li>
                                <li>NFTs for digital art authentication and royalties</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                               Despite rapid adoption, the technology faces challenges in scalability, energy consumption, and regulatory clarity. Even as adoption accelerates, ongoing innovation is critical to addressing scalability challenges, reducing environmental impact, and working within evolving legal frameworks.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                               The future promises broader, more mainstream blockchain applications transforming trust-based systems and value exchange worldwide. Its adoption will likely continue growing, affecting everything from finance to healthcare, government, and creative sectors.
                            </p>
                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default BlockChain