import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Journey Doesn't End Here...
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            From learning to building, from ideas to real projects,
            every step has shaped my journey. If you'd like to collaborate,
            discuss opportunities, or simply connect, let's create the next
            chapter together.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative my-16">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nivashinimuthukumar21@gmail.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{
                scale: 1.05,
                y: -8,
            }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
            <FaEnvelope className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">
                Email Me
            </h3>
            <p className="text-gray-400 text-sm">
                Let's discuss opportunities
            </p>
            </motion.a>
          {/* GitHub */}
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <FaGithub className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">
              GitHub
            </h3>
            <p className="text-gray-400 text-sm">
              Explore my code
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <FaLinkedin className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm">
              Let's connect professionally
            </p>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <FaFileDownload className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">
              Resume
            </h3>
            <p className="text-gray-400 text-sm">
              Download my resume
            </p>
          </motion.a>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-gray-500 italic text-lg">
            "Every project starts with a conversation."
          </p>
        </motion.div>
      </div>
    </section>
  );
}