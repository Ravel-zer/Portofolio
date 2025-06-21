import React from "react";
import { motion } from "framer-motion";
import "./../styles/Home.css";
import profileImg from "../assets/profile.png";

export default function Home() {
  return (
    <motion.section id="home" className="home" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className="home-left">
        <h5>MUHAMMAD REZA ALFARIDZI</h5>
        <h1>
          Full Stack <br /> Developer
        </h1>
        <p>Hi! I’m Reza, A junior fullstack developer specializing in modern Web Development.</p>
        <div className="home-buttons">
          <a href="/CV Reza.pdf" className="btn primary" download>
            Download CV
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-right">
        <motion.img src={profileImg} alt="Profile" className="profile-img" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
      </div>
    </motion.section>
  );
}
