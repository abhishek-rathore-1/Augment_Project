import React, { useState } from "react";
import faq from "../../Internal_Component_Files/faq.avif"
import Faq2 from "../../Internal_Component_Files/Faq2.jpg"
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";


const faqData = [
    {
        question: "What does AUGMENT INFOTECH do?",
        answer:
            "AUGMENT INFOTECH is an Information Technology company that provides web development, mobile app development, software solutions, and digital transformation services to businesses of all sizes.",
    },
    {
        question: "What types of technology do you support overall??",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <p>We have skilled programmers on a wide spectrum of technologies.</p>
                <li>Core PHP, Laravel, CodeIgniter, Magento, WordPress, OpenCart, Shopify</li>
                <li>HTML/HTML5, CSS, Bootstrap</li>
                <li>Python, Django, Ember, Kubernetes</li>
                <li>Java, J2EE, Spring Boot, MVC, Hibernate, Core Java</li>
                <li>Javascript/JQuery, Node.js, AngularJS, DOJO, ArcGIS, ReactJS</li>
                <li>NET, C# ,PHP, IoT </li>
                <li>React Native , Kafka ,Terraform , Microsoft Azure</li>
                <li>Android (Android Studio/Eclipse)</li>
                <li>iOS (Native), Swift</li>
                <li>Aws Cloud Services,</li>
                <li>Firebase, BaasBox, PostgreSQL, ArangoDB , MongoDB ,Mysql, DBMS</li>
            </ul>
        ),
    },
    {
        question: "Why should you go forward with AUGMENT INFOTECH?",
        answer:
            <ul>
                <p>Because we keep our promises.</p>
                <br />
                <p>Our dedication to quality ensures that everything we deliver to you is analyzed, validated, and rigorously tested for functionality and user experience.</p>
                <br />
                <p>Our dedication to time. We understand how important your clients are, so your deadlines become our deadlines. We go above and beyond to meet your expectations.</p>
                <br />
                <p>Our dedication to establishing mutual benefits ensures that you receive more than what you invest in us.</p>
            </ul>,
    },
    {
        question: "What is your method of the development?",
        answer:
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    The Agile technique is what we use to carry out projects.
                </li>
                <li>
                    At the beginning of the project, a project plan with many sprints is created and provided to the client. We have Scrum meetings to monitor daily progress, spot hazards, and make sure the deliverables adhere to the original project plan.
                </li>
                <li>
                    A functional specification document, which includes wireframes and descriptions of each workflow, field definitions, and use cases for all necessary functionalities, is the initial step in the execution of any project.
                </li>
                <li>
                    After this has been approved, the designing phase starts, during which we initially suggest 2-3 theme variations. The theme is made up on the fly based on client input. The remainder of the project's screens is then designed using the selected theme.</li>
                <li>
                    As a result, it is simple to picture the finished product at this very early stage.
                </li>
                <li>
                    The actual development then starts and is broken down into milestones. Testing is completed at the conclusion of each milestone, and only then is it shared with the client for review.
                </li>
                <li>
                    Regression and final acceptance testing are conducted at the end of the cycle.
                </li>
                <li>
                    Deployment takes place only after receiving approval from the client and the internal QA team.
                </li>
            </ul>,
    },
    {
        question: "Why Choose AUGMENT INFOTECH as a software development service provider?",
        answer:
            <ul>
                <p>
                    AUGMENT INFOTECH is a well-known software and mobile app development company when it comes to custom software development. Numerous businesses have benefited from our long-term experience and expertise in providing diverse custom software development services in accordance with the most recent technological standards.
                </p>
                <br />
                <p>
                    Our software developers are experts in agile team deployment, custom-centric engagement models, strict quality measures, in-depth technical and domain expertise, and an understanding of various software development frameworks, programming languages, and platforms to deliver the best web software solutions.
                </p>
            </ul>,
    },
    {
        question: "As a software development firm, what software development services do you offer?",
        answer:
            <ul>
                <p>
                    We offer full-service software development, including custom software development, web app development, mobile app development, software testing, and other related services. Our robust software development services are completed in a clean manner to provide high-quality services.
                </p>
            </ul>,
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState('');

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div
                className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                style={{ backgroundImage: `url(${faq})` }} >
                <div className="bg-black/30 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-20 rounded-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                        FREQUENTLY
                        <span className="underline underline-offset-4 decoration-1 font-light">
                            {" "}Asked Questions
                        </span>
                    </h1>

                </div>
            </div>

            <div className="py-16 px-4 bg-black/80 border-y-2 border-purple-500">

                {/* HEADER */}
                <div className="max-w-4xl mx-auto h-100 text-center bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${Faq2})`}}>
                    <h2 className="text-3xl font-semibold pt-5 text-gray-100">
                        How can we help you?
                    </h2>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="overflow-hidden shadow">

                            {/* QUESTION */}
                            <div
                                onClick={() => toggle(index)}
                                className="cursor-pointer bg-blue-500 text-white px-4 py-3 flex justify-between items-center"
                            >
                                <span>Q. {item.question}</span>
                                <span>{activeIndex === index ? <BsFillCaretDownFill />
 : <BsFillCaretRightFill /> }</span>
                            </div>

                            {/* ANSWER */}
                            {activeIndex === index && (
                                <div className="bg-white text-gray-700 px-4 py-4 text-sm leading-6">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ;