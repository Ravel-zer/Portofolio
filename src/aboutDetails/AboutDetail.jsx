import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/detailAbout.css";
import Navbar from "../components/Navbar";

// Images
import img1 from "../assets/profile.png";
import eduImg1 from "../assets/edc1.JPG";
import eduImg2 from "../assets/edc2.JPG";
import eduImg3 from "../assets/edc3.JPG";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ExperienceData = [
  {
    date: { start: "Feb 2025", end: "Present" },
    location: "Kab Tanggerang, Indonesia",
    title: "Starlight",
    role: "Website Coordinator",
    type: "Organizations",
    description:
      "Developed and managed the organization’s website to ensure functionality, performance, and user engagement. Worked closely with designers and content teams to build visually appealing and user-friendly web pages. Implemented updates, new features, and improvements to enhance the overall site experience.",
    tags: ["PHP", "Laravel", "MySql", "Teamwork"],
  },
  {
    date: { start: "Feb 2025", end: "Present" },
    location: "Kab Tanggerang, Indonesia",
    title: "Universitas Multimedia Nusantara",
    role: "Laboratory Assistant",
    type: "Part-time",
    description:
      "Assisted in teaching and mentoring students in Operating Systems, emphasizing hands-on experience and real-world system concepts. Contributed to the development of learning materials and offered guidance during lab sessions.",
    tags: ["C", "Algorithms", "Mentoring"],
  },
].reverse();

const SkillsData = {
  main: [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications using frontend and backend technologies.",
    },
  ],
  languages: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Bootstrap", "Node.js", "Laravel"],
  tools: ["Visual Studio Code", "Git", "GitHub", "Figma", "Vite"],
};

const AboutDetail = () => {
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { threshold: 0.3 });
  const [animateQuote, setAnimateQuote] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isInView) {
      setAnimateQuote(true);
    } else {
      setAnimateQuote(false);
    }
  }, [isInView]);

  return (
    <>
      <Navbar />
      <div className="about-detail-container">
        <motion.div className="section-divider" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: "easeInOut" }} />
        <motion.section className="section-container whoami-section" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div className="whoami-images" variants={itemVariants}>
            <img src={img1} alt="Collage 1" className="img-1" />
          </motion.div>
          <motion.div className="whoami-text" variants={itemVariants}>
            <h2>Who Am I?</h2>
            <h3>Muhammad Reza Alfaridzi</h3>
            <p>
              Hi, I'm Muhammad Reza Alfaridzi—a dedicated <strong>Web Developer</strong> with a growing interest in <strong>Artificial Intelligence</strong>. Hailing in South Jakarta, Indonesia, I'm currently pursuing a degree in{" "}
              <strong>Computer Science</strong> at <strong>Universitas Multimedia Nusantara</strong>. I specialize in merging modern web technologies with intelligent systems to build responsive and scalable web solutions. As a strong
              believer in <strong>lifelong learning</strong>, I'm always eager to grow and explore the exciting intersection between web development and AI. Let’s connect and create something impactful together!
            </p>
          </motion.div>
        </motion.section>

        <motion.div className="section-divider" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: "easeInOut" }} />

        <motion.section className="section-container skills-section" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          <motion.p variants={itemVariants}>Explore my technical skills and tools I work with.</motion.p>

          <motion.div className="skills-grid" variants={containerVariants}>
            {SkillsData.main.map((skill, index) => (
              <motion.div className="skill-card" key={index} variants={itemVariants}>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="skills-tags-container">
            <motion.h3 variants={itemVariants}>Languages & Frameworks</motion.h3>
            <motion.div className="tags-wrapper" variants={containerVariants}>
              {SkillsData.languages.map((lang, index) => (
                <motion.div className="tag" key={index} variants={itemVariants}>
                  {lang}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="skills-tags-container">
            <motion.h3 variants={itemVariants}>Tools & Technologies</motion.h3>
            <motion.div className="tags-wrapper" variants={containerVariants}>
              {SkillsData.tools.map((tool, index) => (
                <motion.div className="tag" key={index} variants={itemVariants}>
                  {tool}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.div className="section-divider" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: "easeInOut" }} />

        <motion.section className="section-container experience-section">
          <div className="timeline">
            {ExperienceData.map((job, index) => (
              <motion.div className="timeline-item" key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <div className="timeline-date">
                  {job.date.start} - {job.date.end} | {job.location}
                </div>
                <div className="timeline-content">
                  <h3>
                    {job.role} <span className="job-type">({job.type})</span>
                  </h3>
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <div className="tags-wrapper">
                    {job.tags.map((tag, i) => (
                      <div className="tag" key={i}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div className="section-divider" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: "easeInOut" }} />

        <motion.section className="section-container education-section" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="education-details" variants={slideLeft}>
            <h2>Education</h2>
            <p className="date">2023 - Present</p>
            <h3>Universitas Multimedia Nusantara </h3>
            <p>S1 Teknik Informatika | Computer Science</p>
            <div className="education-gallery">
              <img src={eduImg1} alt="Education gallery 1" />
              <img src={eduImg2} alt="Education gallery 2" />
              <img src={eduImg3} alt="Education gallery 3" />
            </div>
            <p>
              I'm an aspiring developer currently pursuing a Bachelor's degree in Computer Science at Universitas Multimedia Nusantara. Fueled by curiosity and a passion for innovation, I enjoy building web applications while exploring the
              practical applications of Artificial Intelligence. My goal is to grow into a well-rounded software engineer who bridges intelligent systems with impactful user experiences.
            </p>
          </motion.div>
        </motion.section>

        <motion.div className="section-divider" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: "easeInOut" }} />

        <section ref={quoteRef} className="section-container quote-section">
          <h2 className="quote-heading">
            {"Learning never exhausts the mind.".split("").map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={animateQuote ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: animateQuote ? i * 0.04 : 0 }}>
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.p className="quote-author" initial={{ opacity: 0, y: 10 }} animate={animateQuote ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 1.5 }}>
            — Leonardo da Vinci
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
