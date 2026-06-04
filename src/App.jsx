import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import BeyondCoding from "./components/BeyondCoding";
import LeetCode from "./components/leetcode";
import Events from "./components/events";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <BeyondCoding />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  // test commit
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