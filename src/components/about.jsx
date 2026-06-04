import { motion } from "framer-motion";

export default function About() {
  const tech = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    Backend: ["Java", "Python","Php" ,"Node.js (Basic)"],
    Database: ["MySQL", "MongoDB"],
    "Version Control": ["Git", "GitHub"],
  };

  return (
    <section id = "about" className="w-full py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT - ABOUT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-indigo-400 font-medium mb-5">
            Full Stack Developer | CSE Student
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I am a Computer Science and Engineering student specializing in Full Stack Web Development.
            I focus on building responsive, scalable, and user-friendly web applications using modern technologies.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I have strong knowledge of frontend and backend technologies along with a solid foundation in Data Structures and Algorithms.
            I continuously improve my skills through hands-on project development.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am actively seeking a opportunity to apply my skills, contribute to real-world projects, and grow as a developer.
          </p>
        </motion.div>

        {/* RIGHT - TECH STACK */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
            Tech Stack
          </h3>

          {Object.entries(tech).map(([category, items], index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-indigo-500 transition"
            >
              <h4 className="text-lg font-semibold mb-2 text-white">
                {category}
              </h4>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}