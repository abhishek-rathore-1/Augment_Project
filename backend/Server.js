const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// 🟢 Job Data
const jobs = [
  {
    id: 1,
    title: "Java Developer",
    description:
      "Experience in core Java advanced programming. Experience in Spring & Hibernate is mandatory."
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    description:
      "We are looking for a MERN Stack Developer to produce scalable software solutions."
  },
  {
    id: 3,
    title: "MEAN Stack Developer",
    description:
      "Scope and deliver solutions with the ability to design architecture."
  }
];


// 🟢 File Storage Setup
const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  }

});

const upload = multer({ storage });


// 🟢 Get All Jobs  (VERY IMPORTANT)
app.get("/api/jobs", (req, res) => {

  res.json(jobs);

});


// 🟢 Get Single Job
app.get("/api/jobs/:id", (req, res) => {

  const job = jobs.find(
    j => j.id == req.params.id
  );

  res.json(job);

});


// 🟢 Submit Application
app.post(
  "/api/apply",
  upload.single("resume"),
  (req, res) => {

    console.log("Candidate Data:");
    console.log(req.body);

    console.log("Resume File:");
    console.log(req.file);

    res.json({
      success: true,
      message: "Application Submitted Successfully"
    });

  }
);


// 🟢 Start Server
app.listen(5000, () => {

  console.log(
    "Server running at http://localhost:5000"
  );

});