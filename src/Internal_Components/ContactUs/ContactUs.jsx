import React from 'react';
import { toast } from 'react-toastify';
import img from "../../Internal_Component_Files/GetInTouch.jpg"
import flag from "../../Internal_Component_Files/indiaflag.png"
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

function ContactUs() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f4c6ad19-fe35-417e-969a-4993a1cf6277");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <>
            <div
                className="pt-50 sm:pt-32 md:pt-20 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[300px]"
                style={{ backgroundImage: `url(${img})` }} >
                <div className="bg-black/60 mx-4 sm:mx-10 md:mx-50 p-4 sm:p-6 mt-15 rounded-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                        GET
                        <span className="underline underline-offset-4 decoration-1 font-light">
                            {" "}In Touch
                        </span>
                    </h1>

                    <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                        Get in touch with us and discuss the needs and requirements of your development project.
                    </p>
                </div>
            </div>

            <div className='px-30 pt-10 md:pt-0 bg-black/80 border-y-2 border-purple-500 justify-items-center'>

                <div className="grid md:grid-cols-2 items-center">
                    {/* LEFT - MAP */}
                    <div className="w-[400px] h-[400px] rounded-xl overflow-hidden shadow-md">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?q=QVCM+W4V,+Niranjanpur+Kabit+Khedi,+Scheme+No+136,+Indore,+Madhya+Pradesh+452010&z=15&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>


                    <div className='text-center p-6 py-10 w-full overflow-hidden' id='Contact'>
                        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-left'>Let us help your business to move forward.</h1>

                        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-300 pt-3'>
                            <div className='flex flex-wrap'>
                                <div className='w-full md:w-1/2 text-left  md:pb-0 pb-6'>
                                    <input type="text" placeholder='Name' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Name' required />
                                </div>
                                <div className='w-full md:w-1/2 text-left md:pl-4'>
                                    <input type="email" placeholder='E-mail' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Email' required />
                                </div>
                            </div>
                            <div className='flex flex-wrap my-6'>
                                <div className='w-full md:w-1/2 text-left md:pb-0 pb-6'>
                                    <input type="number" placeholder='Phone Number' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Phone Number' required />
                                </div>
                                <div className='w-full md:w-1/2 text-left md:pl-4'>
                                    <input type="website" placeholder='Your Website' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Your Website' required />
                                </div>
                            </div>
                            <div className='my-6 text-left'>
                                Message
                                <textarea placeholder='Your Message' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2 resize-none h-35' name='Message' required></textarea>
                            </div>
                            <div>
                                <button type='submit' className='bg-indigo-500  text-white px-12 py-2 mb-10 rounded cursor-pointer hover:bg-cyan-500 shadow-lg hover:shadow-indigo-500/60'>{result ? result : "Send Message"}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="m-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">

                    {/* INDIA OFFICE */}
                    <div className="w-full bg-black rounded-xl shadow-lg shadow-purple-500 p-6 text-center hover:shadow-xl hover:shadow-blue-500 transition">
                        <img src={flag} alt="" className="w-10 text-center m-auto" />
                        <h3 className="font-semibold text-lg mb-2 text-gray-300">India Office</h3>
                        <p className="text-sm text-gray-600">
                            Niranjanpur - Kabit Khedi, Bulandshahr, Scheme Number 136, Indore, Madhya Pradesh 452010
                        </p>
                    </div>

                    {/* EMAIL */}
                    <div className="w-full bg-black rounded-xl shadow-lg shadow-purple-500 p-6 text-center hover:shadow-xl hover:shadow-blue-500 transition">
                        <IoIosMail className="mx-auto text-blue-500 text-3xl mb-3" />
                        <h3 className="font-semibold text-lg mb-2 text-gray-300">Email Us</h3>
                        <p className="text-sm text-gray-600">
                            sales@augmentinfotech.com <br />
                            info@augmentinfotech.com
                        </p>
                    </div>

                    {/* CALL */}
                    <div className="w-full bg-black rounded-xl shadow-lg shadow-purple-500 p-6 text-center hover:shadow-xl hover:shadow-blue-500 transition">
                        <MdCall className="mx-auto text-blue-500 text-3xl mb-3" />
                        <h3 className="font-semibold text-lg mb-2 text-gray-300">Call Us</h3>
                        <p className="text-sm text-gray-600">
                            +91 76919 03806
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs