import { motion } from "framer-motion";

import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.jpeg";
const certificates = [
  {
    id: 1,
    title: "ReactJS",
    img: cert1,
    desc: "Successfully completed a React JS course on Udemy, developing practical skills in modern frontend development including component-based architecture, React hooks, state management, and real-world project building.",
    link: "https://www.udemy.com/certificate/UC-110d9f9b-53ed-427c-8bda-b46f3c62a059/",
  },
  {
    id: 2,
    title: "LLM",
    img: cert2,
    desc: "Completed the NPTEL certification on Large Language Models (LLMs), covering core concepts of NLP, transformer architecture, attention mechanisms, and applications of AI in text generation and understanding.",
    link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc26-cs88",
  },
  {
    id: 3,
    title: "Python for Data Science",
    img: cert3,
    desc: "Completed the NPTEL course on Python for Data Science, developing skills in Python programming, data preprocessing, exploratory data analysis, and visualization using libraries such as NumPy, Pandas, and Matplotlib.",
    link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc25-cs60",
  },
  {
    id: 4,
    title: "MySQL",
    img: cert4,
    desc: "Completed MySQL training from Scaler, developing practical skills in relational database design, SQL query writing, data manipulation, joins, indexing, and database optimization techniques.",
    link: "https://www.scaler.com/topics/",
  },
  {
    id: 5,
    title: "Agentic AI",
    img: cert5,
    desc: "Successfully completed the Agentic AI training from Creto Systemz, learning concepts of autonomous AI systems and applying them in real-world development by building a web application project..",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Certifications 🏆
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={cert.img}
              alt={cert.title}
              className="h-44 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-xl font-bold">{cert.title}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {cert.desc}
              </p>

              {/* BUTTON */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}