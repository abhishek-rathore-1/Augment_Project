import React from 'react';
import img from "../../Internal_Component_Files/TermsOfServices.webp"

function PrivacyPolicy() {

    return (
        <>
            <div
                className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                style={{ backgroundImage: `url(${img})` }} >
                <div className="bg-black/30 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-20 rounded-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                        PRIVACY
                        <span className="underline underline-offset-4 decoration-1 font-light">
                            {" "}Policy
                        </span>
                    </h1>

                </div>
            </div>

            <div className="bg-black/80 border-y-2 border-purple-500 py-10 px-4 flex justify-center">

                {/* MAIN CONTAINER */}
                <div className="max-w-4xl w-full text-center">

                    {/* TITLE */}
                    <h1 className="text-2xl font-semibold mb-2">
                        What kind of data do we collect?
                    </h1>

                    {/* CONTENT */}
                    <div className="text-gray-300 text-sm leading-7 text-left space-y-6">

                        <p className="text-center">
                            At <strong>AUGMENT INFOTECH</strong>, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information. This Privacy Policy explains how we handle your data when you use our website, services, and digital platforms.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Information We Collect
                        </h2>

                        <p>
                            We may collect personal information that you voluntarily provide when you interact with our website, including but not limited to your name, email address, phone number, company name, and any other details submitted through forms, inquiries, or service requests.
                        </p>

                        <p>
                            In addition, we automatically collect certain non-personal information such as your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs to improve our website performance and user experience.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Use of Information
                        </h2>

                        <p>
                            AUGMENT INFOTECH uses the collected information to operate, maintain, and improve our services. This includes responding to inquiries, processing requests, delivering services, and providing customer support.
                        </p>

                        <p>
                            We may also use your information to send important updates, service-related communications, promotional content, and newsletters, where permitted by applicable laws.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Cookies and Tracking Technologies
                        </h2>

                        <p>
                            Our website uses cookies and similar tracking technologies to enhance user experience, analyze trends, and administer the website. Cookies help us understand user behavior and improve functionality.
                        </p>

                        <p>
                            You can choose to disable cookies through your browser settings; however, this may affect certain features and functionality of the website.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Data Sharing and Disclosure
                        </h2>

                        <p>
                            We do not sell, rent, or trade your personal information. However, we may share your data with trusted third-party service providers who assist us in operating our business, such as hosting providers, analytics services, and payment processors.
                        </p>

                        <p>
                            We may also disclose information if required by law, regulation, or legal process, or to protect the rights, property, or safety of AUGMENT INFOTECH, our users, or others.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Data Security
                        </h2>

                        <p>
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include technical, administrative, and physical safeguards.
                        </p>

                        <p>
                            While we strive to protect your data, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Data Retention
                        </h2>

                        <p>
                            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Your Rights and Choices
                        </h2>

                        <p>
                            You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications by following the unsubscribe instructions in our emails.
                        </p>

                        <p>
                            Depending on your location, you may have additional rights under applicable data protection laws.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Third-Party Links
                        </h2>

                        <p>
                            Our website may contain links to third-party websites. AUGMENT INFOTECH is not responsible for the privacy practices or content of those external sites. We encourage you to review their policies before providing any information.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            International Data Transfers
                        </h2>

                        <p>
                            Your information may be processed and stored in locations outside your country of residence. We take appropriate measures to ensure that your data remains protected in accordance with this Privacy Policy.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Children’s Privacy
                        </h2>

                        <p>
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If such data is identified, we will take appropriate steps to delete it.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Updates to This Policy
                        </h2>

                        <p>
                            AUGMENT INFOTECH reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date.
                        </p>

                        {/* SECTION */}
                        <h2 className="text-purple-500 text-lg font-semibold">
                            Contact Information
                        </h2>

                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
                        </p>

                        <p>
                            📧 Email: hr@augmentinfotech.com
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
