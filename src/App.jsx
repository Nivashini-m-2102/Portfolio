import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import BeyondCoding from "./components/BeyondCoding";
import LeetCode from "./components/LeetCode";
import Events from "./components/Events";
import Certifications from "./components/Certifications";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <BeyondCoding />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leetcode" element={<LeetCode />} />
      <Route path="/events" element={<Events />} />
      <Route path="/certifications" element={<Certifications />} />
    </Routes>
  );
}

export default App;