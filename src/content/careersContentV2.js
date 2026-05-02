import Java from "../Internal_Component_Files/Java.png";
import MeanStack from "../Internal_Component_Files/MEAN.png";
import MernStack from "../Internal_Component_Files/MERN.png";
import CareerHero from "../Internal_Component_Files/careerwithus.png";
import FireHero from "../Internal_Component_Files/Fire.png";
import FireBackground from "../Internal_Component_Files/Fire_b.png";
import FireDetailBackground from "../Internal_Component_Files/Fire_c.png";
import FireClientAarti from "../assets/FireClients/Aarti.png";
import FireClientAditya from "../assets/FireClients/Aditya.png";
import FireClientAlembic from "../assets/FireClients/Alembic.png";
import FireClientAlkem from "../assets/FireClients/Alkem.png";
import FireClientAmbuja from "../assets/FireClients/Ambuja.png";
import FireClientHindustan from "../assets/FireClients/Hindustan.png";
import FireClientJSW from "../assets/FireClients/JSW.png";
import FireClientMahindra from "../assets/FireClients/Mahindra.png";
import FireClientSunPharma from "../assets/FireClients/SunPharma.png";
import FireClientTata from "../assets/FireClients/Tata.png";

export const careerHeroImage = CareerHero;

export const careerBenefits = [
  {
    title: "Structured mentorship",
    description:
      "Regular feedback, technical guidance, and exposure to practical delivery decisions instead of isolated task work.",
  },
  {
    title: "Clear ownership",
    description:
      "Roles are built around accountability, thoughtful execution, and visible contribution across the lifecycle.",
  },
  {
    title: "Flexible work rhythm",
    description:
      "A performance-focused culture that values reliability and communication more than rigid presenteeism.",
  },
  {
    title: "Supportive team culture",
    description:
      "A collaborative environment where people can ask questions, grow confidently, and work without unnecessary friction.",
  },
  {
    title: "Performance-linked growth",
    description:
      "Strong delivery habits, initiative, and quality work are reflected in progression and recognition.",
  },
  {
    title: "Real project exposure",
    description:
      "Opportunities to contribute to production work, client-facing delivery, and the kind of systems that build experience fast.",
  },
];

export const careerHiringSteps = [
  {
    title: "Application review",
    description:
      "We look for fundamentals, communication clarity, and evidence that you care about the quality of your work.",
  },
  {
    title: "Initial conversation",
    description:
      "A practical discussion about your experience, strengths, and the kind of team environment where you do your best work.",
  },
  {
    title: "Technical discussion",
    description:
      "A focused conversation around your stack, problem-solving approach, and readiness for the role you are applying to.",
  },
  {
    title: "Offer and onboarding",
    description:
      "If there is a fit, we keep the next steps straightforward so you can start contributing quickly and confidently.",
  },
];

export const careerJobs = [
  {
    id: 1,
    title: "Java Developer",
    location: "Indore",
    type: "Full-time",
    mode: "On-site / Hybrid",
    image: Java,
    summary:
      "Build and maintain enterprise-grade applications using Java, Spring, and structured engineering practices.",
    responsibilities: [
      "Develop scalable services and business logic using core Java and Spring-based tooling.",
      "Collaborate with front-end, QA, and delivery stakeholders to turn requirements into production-ready features.",
      "Review code quality, support deployments, and improve maintainability across the application lifecycle.",
    ],
    technologies: ["Java", "Spring", "Hibernate", "Maven"],
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    location: "Indore",
    type: "Full-time",
    mode: "On-site / Hybrid",
    image: MernStack,
    summary:
      "Work across React, Node.js, Express, and MongoDB to deliver modern web products and internal platforms.",
    responsibilities: [
      "Implement responsive front-end interfaces and reliable back-end APIs for web applications.",
      "Partner with designers and project stakeholders to move features from planning to release.",
      "Support debugging, optimisation, and structured iteration after launch.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "MEAN Stack Developer",
    location: "Indore",
    type: "Full-time",
    mode: "On-site / Hybrid",
    image: MeanStack,
    summary:
      "Deliver Angular and Node.js applications with clean architecture, maintainable code, and reliable delivery habits.",
    responsibilities: [
      "Build feature-rich business applications using Angular, Node.js, and MongoDB.",
      "Translate high-level architectural direction into secure, scalable implementation.",
      "Contribute to testing, review, and release readiness across the project lifecycle.",
    ],
    technologies: ["Angular", "Node.js", "MongoDB", "TypeScript"],
  },
];

export const getCareerJobById = (jobId) =>
  careerJobs.find((job) => String(job.id) === String(jobId));

export const fireHeroImage = FireHero;
export const fireBackgroundImage = FireBackground;
export const fireDetailImage = FireDetailBackground;

export const fireServices = [
  {
    title: "Fire fighting system installation",
    description:
      "End-to-end installation of dependable fire protection systems for commercial and industrial facilities.",
  },
  {
    title: "Maintenance and AMC",
    description:
      "Preventive maintenance programs that help systems remain compliant, responsive, and operational.",
  },
  {
    title: "System testing",
    description:
      "Structured testing and verification to ensure equipment performs when it matters most.",
  },
  {
    title: "Training programs",
    description:
      "Practical training for teams that need stronger readiness around fire prevention and emergency response.",
  },
  {
    title: "Fire risk assessment",
    description:
      "Site assessments that identify vulnerabilities, exposure, and action items before incidents happen.",
  },
  {
    title: "Fire safety audit",
    description:
      "Detailed audits that support compliance, documentation quality, and operational preparedness.",
  },
];

export const fireHighlights = [
  {
    title: "Site-specific planning",
    description:
      "Assessments and recommendations tailored to facility layout, operational risk, and compliance requirements.",
  },
  {
    title: "Installation through maintenance",
    description:
      "Support across deployment, testing, annual maintenance contracts, and ongoing readiness checks.",
  },
  {
    title: "Industrial client exposure",
    description:
      "Experience working with manufacturing, heavy industry, and large commercial environments where reliability matters.",
  },
];

export const fireClients = [
  { image: FireClientAarti, name: "Aarti Industries" },
  { image: FireClientAditya, name: "Aditya Birla" },
  { image: FireClientAlembic, name: "Alembic" },
  { image: FireClientAlkem, name: "Alkem" },
  { image: FireClientAmbuja, name: "Ambuja Cement" },
  { image: FireClientHindustan, name: "Hindustan" },
  { image: FireClientJSW, name: "JSW Steel" },
  { image: FireClientMahindra, name: "Mahindra" },
  { image: FireClientSunPharma, name: "Sun Pharma" },
  { image: FireClientTata, name: "Tata Steel" },
];
