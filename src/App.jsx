import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutDetail from "./aboutDetails/AboutDetail";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/about-details" element={<AboutDetail />} />
      </Routes>
    </>
  );
}
