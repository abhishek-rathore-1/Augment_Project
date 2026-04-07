import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ApplyJob() {

  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    technology: "",
    resume: null
  });

  // 🟢 Fetch Job
  useEffect(() => {

    const fetchJob = async () => {

      try {

        console.log("Fetching Job ID:", id);

        const res = await fetch(
          `http://localhost:5000/api/jobs/${id}`
        );

        const data = await res.json();

        console.log("Job Data:", data);

        if (!data) {

          setError("Loading...");

        } else {

          setJob(data);

          setFormData(prev => ({
            ...prev,
            position: data.title
          }));

        }

      } catch (err) {

        console.error(err);

        setError("Failed to load job");

      } finally {

        setLoading(false);

      }

    };

    fetchJob();

  }, [id]);



  // 🟢 Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  // 🟢 File Upload
  const handleFileChange = (e) => {

    setFormData({
      ...formData,
      resume: e.target.files[0]
    });

  };



  // 🟢 Submit Form
  const handleSubmit = async (e) => {

  e.preventDefault();

  const data = new FormData();

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("position", formData.position);
  data.append("technology", formData.technology);
  data.append("resume", formData.resume);

  try {

    const response = await fetch(
      "http://localhost:5000/api/apply",
      {
        method: "POST",
        body: data
      }
    );

    const result = await response.json();

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

    console.error("Error submitting form:", error);

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

              {job.description}

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
                value={formData.position}
                readOnly
                className="border rounded-full px-5 py-3"
              />

            </div>


            <input
              type="file"
              required
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
              className="bg-blue-600 text-white px-8 py-3 rounded"
            >

              Submit

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default ApplyJob;