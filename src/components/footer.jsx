import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black py-20 px-6 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Thanks for Visiting
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8"
        >
          Thank you for exploring my portfolio. Every project,
          achievement, and experience shared here represents a step
          in my continuous learning journey as a developer.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-white hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-cyan-400 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Quote */}
        <p className="mt-12 text-gray-500 italic">
          "Learning never stops. Building never ends."
        </p>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 transition"
        >
          <FaArrowUp />
          Back to Top
        </button>

      </div>
    </footer>
  );
}