import { FaCode } from "react-icons/fa";

const LeetCode = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <FaCode className="text-6xl text-cyan-400 mb-4" />

      <h1 className="text-5xl font-bold mb-4">
        LeetCode Journey
      </h1>

      <p className="text-gray-400">
        My problem solving journey.
      </p>
    </section>
  );
};

export default LeetCode;