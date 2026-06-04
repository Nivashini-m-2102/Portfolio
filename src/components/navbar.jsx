import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const navLink =
    "cursor-pointer px-4 py-2 rounded-lg font-medium hover:text-cyan-400 hover:bg-white/10 hover:scale-105 transition-all duration-300";

  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center sticky top-0 z-50">

      <div className="flex items-center gap-3">
        <FaReact className="text-3xl text-cyan-400" />

        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Nivashini
        </h1>
      </div>

      <ul className="flex gap-4">

        <a href="#about" className={navLink}>
          About
        </a>

        <a href="#about" className={navLink}>
          Skills
        </a>

        <a href="#projects" className={navLink}>
          Projects
        </a>

        <a href="#beyond" className={navLink}>
          Achievements
        </a>

        <a href="#contact" className={navLink}>
          Contact
        </a>

      </ul>

    </nav>
  );
};

export default Navbar;