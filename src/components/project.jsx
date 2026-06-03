import { motion } from "framer-motion";

import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    title: "Digital Restaurant Management System",
    description:
      "QR-code based restaurant platform allowing customers to browse menus, place orders, track food status, and make payments digitally.",
    tech: "HTML • CSS • JavaScript • PHP • MySQL",
    github: "https://github.com/Nivashini-m-2102/Smart-Qr-Restaurant-Website",
    live: "https://nivashini-m-2102.github.io/Smart-Qr-Restaurant-Website/",
  },

  {
    title: "Personal Knowledge Graph",
    description:
      "AI-powered learning platform that enables users to upload PDFs, extract concepts, build knowledge connections, track learning progress, and generate personalized quizzes.",
    tech: "React • Node.js • AI • PDF Processing",
    github: "https://github.com/Nivashini-m-2102/personal-knowledge-graph-linker",
    live: "#",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "Modern responsive portfolio website showcasing projects, technical skills, achievements, and contact information with smooth animations.",
    tech: "React • Tailwind CSS • Framer Motion",
    github: "https://github.com/Nivashini-m-2102/portfolio",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Grid Background */}
      <div
        className="
        absolute inset-0
        opacity-5
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">

        <FaReact className="absolute top-20 left-20 text-cyan-500/20 text-8xl animate-bounce" />

        <FaHtml5 className="absolute top-32 right-24 text-orange-500/20 text-8xl animate-pulse" />

        <FaCss3Alt className="absolute bottom-32 left-24 text-blue-500/20 text-8xl animate-bounce" />

        <FaJs className="absolute bottom-20 right-32 text-yellow-400/20 text-8xl animate-pulse" />

        <SiTailwindcss className="absolute top-1/2 left-1/4 text-cyan-400/20 text-8xl animate-bounce" />

        <SiMysql className="absolute top-1/2 right-1/4 text-blue-400/20 text-8xl animate-pulse" />

        <FaNodeJs className="absolute top-72 left-10 text-green-500/20 text-8xl animate-bounce" />

        <FaJava className="absolute top-40 left-1/2 text-orange-400/20 text-7xl animate-pulse" />

        <FaGitAlt className="absolute bottom-40 left-1/2 text-red-500/20 text-7xl animate-bounce" />

        <FaPhp className="absolute bottom-72 right-10 text-indigo-500/20 text-8xl animate-pulse" />

        <SiFirebase className="absolute bottom-1/4 left-1/3 text-yellow-400/20 text-7xl animate-bounce" />

        <SiSpringboot className="absolute top-1/4 right-1/3 text-green-500/20 text-7xl animate-pulse" />

        <SiMongodb className="absolute top-1/3 left-2/3 text-green-500/20 text-7xl animate-bounce" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <h2 className="text-5xl font-bold text-center mb-4">
           Projects
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          This is my collection of projects showcasing full-stack development,
          AI-powered learning systems, and modern web technologies.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-6
            hover:border-cyan-400
            hover:-translate-y-3
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition-all
            duration-500
          "
          >
            <div className="text-cyan-400 text-sm font-bold mb-3">
              PROJECT 0{index + 1}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-7 mb-5">
              {project.description}
            </p>

            <p className="text-cyan-400 text-sm mb-6">
              {project.tech}
            </p>

            <div className="flex gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                hover:scale-105
                transition-all
              "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                px-4 py-2
                rounded-lg
                border
                border-white/20
                hover:border-cyan-400
                transition-all
              "
              >
                Live Demo
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;