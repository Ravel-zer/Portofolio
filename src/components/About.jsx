import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/about.css";
import profilePic from "../assets/aboutme.png";

export default function About() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about-details");
  };

  // Variants untuk animasi teks dan gambar
  const textVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <motion.section id="about" className="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {/* TEKS - KIRI */}
      <motion.div className="about-left" variants={textVariant}>
        <h2>About Me</h2>
        <p>A brief introduction about me and my interest. I enjoy building web applications and exploring modern web technologies.</p>
        <div className="about-buttons">
          <button className="btn primary" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </motion.div>

      {/* GAMBAR - KANAN */}
      <motion.div className="about-right" variants={imageVariant}>
        <img src={profilePic} alt="Profile" className="about-image" />
      </motion.div>
    </motion.section>
  );
}
