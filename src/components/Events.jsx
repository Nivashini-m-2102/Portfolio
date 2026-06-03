import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import event4 from "../assets/event4.jpeg";

const events = [
  {
    id: 1,
    title: "Techno Summit",
    img: event1,
    desc: "Actively volunteered in a college-level technical symposium with 100+ participants, contributing to event coordination, participant management, and smooth execution of activities.",
    learned:
      "Learned leadership, event coordination, and handling large audience management.",
  },
  {
    id: 2,
    title: "Non-Technical Gaming Quiz",
    img: event2,
    desc: "Coordinated and managed a non-technical gaming quiz event, engaging participants through interactive gaming-related questions and activities.",
    learned:
      "Improved event coordination, communication skills, and participant engagement through interactive quiz management.",
  },
  {
    id: 3,
    title: "Non-Technical Poetry Event",
    img: event3,
    desc: "Coordinated a non-technical poetry event, providing a platform for participants to showcase creativity and expressive communication through poetry.",
    learned:
      "Improved communication, creativity, event coordination, and participant engagement skills.",
  },
  {
    id: 4,
    title: "Brillianzaa Event",
    img: event4,
    desc: "Actively organized in the Brillianzaa event, contributing to coordination and execution of activities while enhancing teamwork and organizational skills.",
    learned:
      "Improved teamwork, coordination, communication, and event management skills through active participation in a large-scale college event.",
  },
];

export default function Events() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Events Organized
      </h1>

      {/* GRID (UP 2 / DOWN 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(event)}
            className="cursor-pointer bg-white/5 rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src={event.img}
              alt={event.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-bold">{event.title}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 max-w-lg w-full rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected?.img}
                className="w-full h-52 object-cover"
                alt={selected?.title}
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {selected?.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {selected?.desc}
                </p>

                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold">
                    What I Learned
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {selected?.learned}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 px-4 py-2 bg-red-500 rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}