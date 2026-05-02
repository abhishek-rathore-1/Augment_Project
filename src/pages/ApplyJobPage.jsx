import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import {
  careerHeroImage,
  getCareerJobById,
} from "../content/careersContent";
import {
  MAX_CAREER_ATTACHMENT_SIZE_BYTES,
  submitCareerApplication,
} from "../utils/submitCareerApplication";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  technology: "",
  resume: null,
};

function ApplyJobPage() {
  const { id } = useParams();
  const job = getCareerJobById(id);
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <PageHero
        eyebrow="Careers"
        title="Role not found"
        description="The role you were looking for is not currently available."
        image={careerHeroImage}
      />
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormState((current) => ({
      ...current,
      resume: event.target.files?.[0] || null,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formState.resume) {
      toast.error("Please attach your resume.");
      return;
    }

    if (formState.resume.size > MAX_CAREER_ATTACHMENT_SIZE_BYTES) {
      toast.error("Please upload a resume smaller than 5 MB.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitCareerApplication({
        ...formState,
        jobTitle: job.title,
      });

      toast.success(
        result.attachmentSent
          ? "Application submitted successfully."
          : "Application details sent. If the resume is missing, please email it to hr@augmentinfotech.com.",
      );
      form.reset();
      setFormState(initialFormState);
    } catch (error) {
      toast.error(
        error.message ||
          "We could not submit the application right now. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Career application"
        title={`Apply for ${job.title}`}
        description={job.summary}
        image={careerHeroImage}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {job.type} • {job.mode}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950">
              {job.title}
            </h2>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
              <MapPin size={16} />
              {job.location}
            </p>
            <p className="mt-6 text-sm leading-8 text-slate-600">
              {job.summary}
            </p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-slate-950">
              Responsibilities
            </h3>
            <ul className="mt-4 space-y-3">
              {job.responsibilities.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-xl font-semibold text-slate-950">
              Technologies
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {job.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="mailto:hr@augmentinfotech.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 transition-colors hover:text-cyan-700"
            >
              <Mail size={16} />
              Prefer email? hr@augmentinfotech.com
            </a>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950 p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold text-white">
              Submit your application
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Include the technology area you are strongest in and attach your
              current resume.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="field-group">
                <span className="field-label">Name</span>
                <input
                  className="field-input"
                  type="text"
                  name="name"
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
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field-group">
                <span className="field-label">Phone</span>
                <input
                  className="field-input"
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field-group">
                <span className="field-label">Technology focus</span>
                <input
                  className="field-input"
                  type="text"
                  name="technology"
                  value={formState.technology}
                  onChange={handleChange}
                  placeholder="Your strongest stack or domain"
                  required
                />
              </label>
              <label className="field-group sm:col-span-2">
                <span className="field-label">Resume</span>
                <input
                  className="field-input"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApplyJobPage;
