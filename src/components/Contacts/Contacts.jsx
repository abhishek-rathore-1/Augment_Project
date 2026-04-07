import React from 'react'
import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';

function Contacts() {

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
        <div

            // initial={{ opacity: 0, x: -200 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}

            className='text-center p-6 py-10 lg:px-32 w-full overflow-hidden bg-black/80 border-y-2 border-purple-500' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Get In <span className='underline underline-offset-4 decoration-1 under font-light'>Touch</span>
            </h1>
            <p className='text-center text-gray-300 mb-12 max-w-80 mx-auto'>
                Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-300 pt-3'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input type="text" placeholder='Your Name' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input type="email" placeholder='Your Email' className='w-full outline outline-purple-500 focus:outline-blue-500 rounded px-4 py-3 mt-2' name='Email' required />
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
    )
}

export default Contacts