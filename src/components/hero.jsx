import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative px-6">

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="
        text-6xl
        md:text-7xl
        font-extrabold
        mt-2
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-600
        text-transparent
        bg-clip-text
        "
      >
        Nivashini
      </motion.h1>

      {/* Typewriter */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-2xl md:text-3xl text-gray-300 mt-5 h-10"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Frontend Developer",
            "Java Programmer",
            "Problem Solver",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-2xl mt-6 text-gray-400 leading-8"
      >
        Passionate about building scalable web applications,
        creating intuitive user experiences, and solving real-world
        problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="
          px-7 py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-purple-600
          font-semibold
          hover:scale-105
          transition
          duration-300
          "
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="
          px-7 py-3
          rounded-xl
          border
          border-gray-600
          hover:border-cyan-400
          hover:scale-105
          transition
          duration-200
          "
        >
          View Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mt-10 text-2xl"
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nivashinimuthukumar21@gmail.com"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 text-gray-500"
      >
        ↓ Scroll Down
      </motion.div>

    </section>
  );
};

export default Hero;