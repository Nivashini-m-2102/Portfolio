import { motion } from "framer-motion";

import {
  FaCode,
  FaCalendarAlt,
  FaCertificate,
  FaRocket,
  FaTrophy,
  FaStar,
  FaBullseye,
  FaMedal,
  FaBook,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

const cards = [
  {
    title: "LeetCode Journey",
    description:
      "Track my problem-solving journey, coding progress, and DSA learning.",
    icon: <FaCode />,
    link: "https://leetcode.com/u/nivashini_muthukumar/",
    external: true,
  },

  {
    title: "Events Organized",
    description:
      "Technical and non-technical events organized during college.",
    icon: <FaCalendarAlt />,
    link: "/events",
    external: false,
  },

  {
    title: "Certifications",
    description:
      "Professional certifications and completed learning programs.",
    icon: <FaCertificate />,
    link: "/certifications",
    external: false,
  },

  {
    title: "Learning Journey",
    description:
      "A timeline of my growth from beginner to developer.",
    icon: <FaRocket />,
    link: "/journey",
    external: false,
  },
];

const BeyondCoding = () => {
  return (
    <section
      id="beyond"
      className="
      relative
      min-h-screen
      py-24
      px-6
      overflow-hidden
      bg-gradient-to-b
      from-black
      via-gray-950
      to-black
      text-white
      "
    >
      {/* Glow Background */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />

    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full" />

      {/* Floating Icons */}

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <motion.div
        animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 10, 0],
        }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
        className="absolute top-10 left-10"
    >
        <FaTrophy className="text-yellow-500/10 text-9xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.2, 1],
        y: [0, -30, 0],
        }}
        transition={{
        duration: 6,
        repeat: Infinity,
        }}
        className="absolute top-24 right-16"
    >
        <FaCertificate className="text-cyan-400/10 text-9xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -10, 0],
        }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
        className="absolute bottom-20 left-20"
    >
        <FaRocket className="text-purple-500/10 text-9xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.2, 1],
        y: [0, 20, 0],
        }}
        transition={{
        duration: 4,
        repeat: Infinity,
        }}
        className="absolute bottom-10 right-10"
    >
        <FaCode className="text-pink-500/10 text-9xl" />
    </motion.div>

    <motion.div
        animate={{
        rotate: [0, 360],
        }}
        transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        }}
        className="absolute top-1/2 left-8"
    >
        <FaStar className="text-yellow-400/10 text-8xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.4, 1],
        }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
        className="absolute top-1/3 right-8"
    >
        <FaBullseye className="text-red-500/10 text-8xl" />
    </motion.div>

    <motion.div
        animate={{
        y: [0, -25, 0],
        }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
        className="absolute top-16 left-1/2"
    >
        <FaMedal className="text-orange-500/10 text-8xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.3, 1],
        }}
        transition={{
        duration: 6,
        repeat: Infinity,
        }}
        className="absolute bottom-1/3 left-1/3"
    >
        <FaBook className="text-blue-500/10 text-8xl" />
    </motion.div>

    <motion.div
        animate={{
        y: [0, -20, 0],
        scale: [1, 1.2, 1],
        }}
        transition={{
        duration: 4,
        repeat: Infinity,
        }}
        className="absolute top-2/3 right-1/3"
    >
        <FaLightbulb className="text-yellow-300/10 text-8xl" />
    </motion.div>

    <motion.div
        animate={{
        scale: [1, 1.25, 1],
        rotate: [0, 8, 0],
        }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2"
    >
        <FaGraduationCap className="text-green-500/10 text-8xl" />
    </motion.div>

    </div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          Beyond Coding
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Explore my coding journey, leadership experiences,
          certifications, and continuous learning path.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {cards.map((card, index) => (
          <motion.a
            key={index}
            href={card.link}
            target={card.external ? "_blank" : "_self"}
            rel="noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="
            block
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            <div className="text-5xl text-cyan-400 mb-6">
              {card.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {card.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {card.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BeyondCoding;