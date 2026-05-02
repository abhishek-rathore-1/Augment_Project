import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getCareerJobById } from "../../content/careersContent";
import {
  MAX_CAREER_ATTACHMENT_SIZE_BYTES,
  submitCareerApplication,
} from "../../utils/submitCareerApplication";

function ApplyJob() {

  const { id } = useParams();
  const job = getCareerJobById(id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    technology: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loading = false;
  const error = job ? "" : "Role not found.";

  // 🟢 Fetch Job
  



  // 🟢 Handle Input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };



  // 🟢 File Upload
  const handleFileChange = (event) => {
    setFormData((current) => ({
      ...current,
      resume: event.target.files?.[0] || null,
    }));
  };



  // 🟢 Submit Form
  const handleSubmit = async (event) => {

    event.preventDefault();
    const form = event.currentTarget;

    if (!formData.resume) {
      toast.error("Please attach your resume.");
      return;
    }

    if (formData.resume.size > MAX_CAREER_ATTACHMENT_SIZE_BYTES) {
      toast.error("Please upload a resume smaller than 5 MB.");
      return;
    }

    setIsSubmitting(true);

  try {

    const result = await submitCareerApplication({
      ...formData,
      jobTitle: job.title,
    });

    if (result.success) {

      alert("Application Submitted Successfully! ✅");

      // ✅ RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: job.title, // keep job title
        technology: "",
        resume: null
      });

      // ✅ Clear file input manually
      document.querySelector('input[type="file"]').value = "";

    }

  } catch (error) {

    toast.error(
      error.message ||
        "We could not submit the application right now. Please try again or email us directly."
    );

  } finally {

    setIsSubmitting(false);

  }

};



  // 🟡 Loading State
  if (loading) {

    return (
      <h2 className="text-center mt-20">
        Loading job details...
      </h2>
    );

  }

  // 🔴 Error State
  if (error) {

    return (
      <h2 className="text-center mt-20 text-red-600">
        {error}
      </h2>
    );

  }



  return (

    <div className="bg-gray-100 py-16 px-6">

      <div className="max-w-6xl mx-auto bg-white p-10 rounded-md shadow">

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-10">

          Apply For {job.title}

        </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {/* Description */}
          <div>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">

              {job.summary}

            </p>

          </div>


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border rounded-full px-5 py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-full px-5 py-3"
              />

            </div>


            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                required
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-full px-5 py-3"
              />

              <input
                type="text"
                value={job.title}
                readOnly
                className="border rounded-full px-5 py-3"
              />

            </div>


            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="border rounded-full px-5 py-3 w-full"
            />


            <input
              type="text"
              name="technology"
              placeholder="Technology"
              required
              value={formData.technology}
              onChange={handleChange}
              className="border rounded-full px-5 py-3 w-full"
            />


            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded disabled:cursor-not-allowed disabled:opacity-70"
            >

              {isSubmitting ? "Submitting..." : "Submit"}

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default ApplyJob;
