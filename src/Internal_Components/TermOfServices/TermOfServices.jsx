import React from 'react';
import img from "../../Internal_Component_Files/TermsOfServices.webp"

function TermsOfServices() {

    return (
        <>
            <div
                className="pt-45 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                style={{ backgroundImage: `url(${img})` }} >
                <div className="bg-black/30 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-10 rounded-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                        TERMS
                        <span className="underline underline-offset-4 decoration-1 font-light">
                            {" "}Of Services
                        </span>
                    </h1>

                    <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                        We use our website to communicate with the valuable customers about our products & services and to take in personal information by customers and people who wish to connect with us
                    </p>
                </div>
            </div>

            <div className="bg-black/80 border-y-2 border-purple-500 py-10 px-4 flex justify-center">

                {/* MAIN CONTAINER */}
                <div className="max-w-4xl w-full text-center">

                    {/* TITLE */}
                    <h1 className="text-2xl font-semibold mb-2">
                        Terms of Service
                    </h1>

                    {/* CONTENT */}
                    <div className="text-gray-300 text-sm leading-7 text-left space-y-6">

                        <p>
                            By accessing and using this website ("Website"), you agree to comply with
                            the terms and conditions set by <strong>AUGMENT INFOTECH</strong>. If you do
                            not agree with any part of these terms, please do not use this Website.
                        </p>

                        <p>
                            AUGMENT INFOTECH reserves the right to update or modify these Terms of
                            Service at any time without prior notice. Continued use of the Website will
                            be considered as acceptance of those changes.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Right to Use
                        </h2>

                        <p>
                            You are granted a limited, non-exclusive, and non-transferable right to
                            access and use this Website for lawful purposes related to our services.
                            Any misuse, unauthorized copying, or distribution of content is strictly
                            prohibited.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Intellectual Property Rights
                        </h2>

                        <p>
                            All content on this Website, including text, graphics, logos, and design,
                            is the property of AUGMENT INFOTECH and is protected under applicable
                            intellectual property laws. You may not copy, reproduce, or distribute any
                            content without written permission.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Third-Party Content
                        </h2>

                        <p>
                            This Website may contain links to third-party websites. AUGMENT INFOTECH
                            is not responsible for the content, accuracy, or policies of these external
                            sites. Accessing third-party websites is at your own risk.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            No Warranties
                        </h2>

                        <p>
                            All information provided on this Website is offered "as is" without any
                            warranties, expressed or implied. AUGMENT INFOTECH does not guarantee the
                            accuracy, completeness, or reliability of the content.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Limitation of Liability
                        </h2>

                        <p>
                            AUGMENT INFOTECH shall not be held liable for any direct, indirect, or
                            incidental damages arising from the use or inability to use this Website
                            or its services.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Data Privacy
                        </h2>

                        <p>
                            We value your privacy. Any personal information collected through this
                            Website will be handled in accordance with our Privacy Policy.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Jurisdiction & Law
                        </h2>

                        <p>
                            These Terms shall be governed by the laws of India. Any disputes arising
                            shall be subject to the jurisdiction of the courts in Indore, Madhya Pradesh.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default TermsOfServices