import React from 'react'
import img from '../../Internal_Component_Files/Blog.png'
import SmartHomeImg from '../../Internal_Component_Files/Blogs/SmartHome.jpg'

function SmartHome() {


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
                            src={SmartHomeImg}
                            alt="IoT Smart Home"
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">

                            {/* Title */}
                            <h1 className="text-2xl font-bold mb-6">
                                Smarter Homes: How IoT Is Revolutionizing Daily Living
                            </h1>

                            {/* Paragraph */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The concept of home has evolved dramatically in recent years, thanks to the emergence of the Internet of Things (IoT). The 2020s have ushered in an era where lighting, security, entertainment, and even kitchen appliances connect, communicate, and collaborate to create truly smart environments—making daily life more seamless, efficient, secure, and even predictive. Not long ago, household convenience was associated merely with remote controls and simple timers. Now, the 2020s have brought about a transformation where everyday appliances, lighting, security, and entertainment systems all work in unison, creating environments that anticipate your needs and adapt dynamically to your routines.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Imagine waking up as your blinds gently rise, your heating system adjusts automatically, your coffee maker brews your favorite blend, and the fridge reminds you that you're out of milk—all coordinated by interconnected devices. Imagine the synergy of devices that intuitively communicate, learning your preferences and adjusting settings seamlessly to provide comfort, save energy, and enhance your lifestyle like never before.
                            </p>

                            {/* Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Benefits of IoT in Smart Homes:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Automation of daily routines</li>
                                <li>Energy saving through intelligent management</li>
                                <li>Enhanced security and peace of mind</li>
                                <li>Personalized settings for each family member</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Smart lighting adapts to your activity and presence.
                                Lights turn off when rooms are empty, and can dim
                                automatically for movie nights—all easily controlled
                                by voice or smartphone.
                            </p>

                            {/* Security Section */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                IoT Security Features:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Connected cameras and motion sensors</li>
                                <li>Smart locks with remote access</li>
                                <li>Real-time alerts and monitoring via smartphone</li>
                            </ul>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                IoT automates schedules based on your behavior.
                                Heating, locks, and appliances adjust automatically
                                when you leave the house, while advanced AI refines
                                routines for comfort and cost savings.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Smart thermostats, plugs, and appliances reduce electricity
                                consumption, track trends, and integrate renewable energy
                                sources for optimum efficiency.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                In the kitchen, connected appliances monitor expiration dates, suggest recipes, and reorder groceries autonomously. Ovens and microwaves can be managed remotely for greater convenience.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Entertainment systems now sync across rooms and devices; smart assistants integrate music, reminders, and scheduling—all responsive to your voice.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                For those with accessibility needs, IoT can be life-changing: devices coordinate to simplify everyday tasks and improve overall quality of life.
                            </p>

                            {/* Considerations */}
                            <h2 className="text-lg font-semibold mt-6 mb-2">
                                Considerations:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Privacy and data security challenges</li>
                                <li>Need for reputable vendors and software updates</li>
                                <li>Importance of strong encryption and authentication</li>
                            </ul>

                            <p className="text-gray-700 mt-6 leading-relaxed">
                                The future of IoT in the home promises deeper AI-driven personalization and adaptation, ultimately creating homes that are not just smart, but empathetic and responsive to our needs.
                            </p>

                        </div>

                    </div>

                </div>
            </>
        </div>
    )
}

export default SmartHome