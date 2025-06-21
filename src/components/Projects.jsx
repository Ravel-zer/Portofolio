import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

// Import ikon dari React Icons
import { FiExternalLink } from "react-icons/fi";
import jawaTimurImage from "../assets/jawa-timur.png";
import JoyVentImage from "../assets/JoyVent.png";
import MerconImage from "../assets/Mercon.png";

// Data untuk proyek-proyek Anda. Lebih mudah dikelola dalam bentuk array.
const projectsData = [
  {
    title: "Joyfent",
    description: "An event discovery platform where users can explore upcoming concerts, festivals, and shows, and purchase tickets with ease. Designed for seamless scheduling and quick access to entertainment.",
    imageUrl: JoyVentImage,
    projectLink: "Joyfent.site",
  },
  {
    title: "Nasi Bebek Mercon Mama Aisyah",
    description: "A culinary website for a popular spicy duck rice brand. Showcases the menu, customer reviews, and online ordering via WhatsApp, helping customers find and enjoy their favorite dishes easily.",
    imageUrl: MerconImage, // Ganti dengan path gambar Anda
    projectLink: "https://merconmamaaisya.com.vitovisualmedia.com/",
  },
  {
    title: "Jawa Timur",
    description: "Explore East Java, a land of breathtaking contrasts. From Mount Bromo's majestic sunrise and Ijen's mystical blue fire to serene beaches and a vibrant culture. Find guides and plan your unforgettable trip here.",
    imageUrl: jawaTimurImage,
    projectLink: "https://jawa-timur.vercel.app/",
  },
];

// Varian animasi untuk Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Memberi jeda animasi antar card
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animasi berjalan sekali saat 20% terlihat
        >
          {projectsData.map((project, index) => (
            <motion.div className="project-card" key={index} variants={cardVariants}>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link-wrapper">
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  {/* Overlay yang muncul saat hover */}
                  <div className="project-hover-overlay">
                    <FiExternalLink className="project-icon" />
                  </div>
                </div>
              </a>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
