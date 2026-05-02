import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  website: "",
  message: "",
};

function ContactForm({
  title = "Tell us what you are building",
  description = "Share your goals, timeline, and technical context. We will follow up with the most sensible next step.",
  subject = "New website enquiry",
  includePhone = true,
  includeWebsite = false,
}) {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "f4c6ad19-fe35-417e-969a-4993a1cf6277");
    formData.append("subject", subject);
    formData.append("from_name", formState.name);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("company", formState.company);
    formData.append("phone", formState.phone);
    formData.append("website", formState.website);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      toast.success("Your message has been sent.");
      setFormState(initialState);
    } catch (error) {
      toast.error(error.message || "Something went wrong while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="font-heading text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
        {description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <label className="field-group">
          <span className="field-label">Name</span>
          <input
            className="field-input"
            type="text"
            name="name"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field-group">
          <span className="field-label">Email</span>
          <input
            className="field-input"
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field-group">
          <span className="field-label">Company</span>
          <input
            className="field-input"
            type="text"
            name="company"
            placeholder="Company name"
            value={formState.company}
            onChange={handleChange}
          />
        </label>

        {includePhone ? (
          <label className="field-group">
            <span className="field-label">Phone</span>
            <input
              className="field-input"
              type="tel"
              name="phone"
              placeholder="Contact number"
              value={formState.phone}
              onChange={handleChange}
            />
          </label>
        ) : null}

        {includeWebsite ? (
          <label className="field-group sm:col-span-2">
            <span className="field-label">Website</span>
            <input
              className="field-input"
              type="url"
              name="website"
              placeholder="https://your-site.com"
              value={formState.website}
              onChange={handleChange}
            />
          </label>
        ) : null}

        <label className="field-group sm:col-span-2">
          <span className="field-label">Project context</span>
          <textarea
            className="field-input min-h-36 resize-y"
            name="message"
            placeholder="Tell us what you need, what is blocking you, and what timeline you are working with."
            value={formState.message}
            onChange={handleChange}
            required
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
