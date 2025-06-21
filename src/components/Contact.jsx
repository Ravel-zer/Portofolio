// components/Contact.jsx

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../styles/Contact.css";

import { FiMail, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

import contactImage from "../assets/cntc.png";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const form = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDiscordClick = () => {
    const discordUsername = "xravel";
    navigator.clipboard.writeText(discordUsername);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sending Message...",
      text: "Please wait a moment.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const serviceID = "service_8ksangw";
    const templateID = "template_ka2lc3g";
    const publicKey = "nbXwR7M1QiZHqjrS1";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon.",
        });
        closeModal();
        form.current.reset();
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      }
    );
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: (direction) => ({ x: direction === "left" ? -60 : 60, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const modalOverlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modalContentVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <>
      <motion.section id="contact" className="contact-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="contact-container">
          <motion.div className="contact-info" variants={itemVariants} custom="left">
            <h1 className="contact-title">Get In Touch</h1>
            <div className="title-underline-contact"></div>
            <p className="contact-subtitle">Let’s connect. Questions, collaborations, or a quick hello—drop me a line!</p>
            <motion.button className="email-link" onClick={openModal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              rezaskkm@gmail.com
            </motion.button>
            <div className="social-icons">
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                whileHover={{ y: -3 }}
              >
                <FiMail />
              </motion.a>
              <motion.a href="https://github.com/Ravel-zer" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}>
                <FiGithub />
              </motion.a>
              <motion.a href="https://www.instagram.com/rezaa.rvl/?g=5" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}>
                <FiInstagram />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/m-reza-alfaridzi-434509331/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}>
                <FiLinkedin />
              </motion.a>

              {/* UBAH: Mengganti <a> dengan <button> untuk Discord */}
              <div className="discord-wrapper">
                <motion.button className="discord-btn" onClick={handleDiscordClick} whileHover={{ y: -3 }}>
                  <FaDiscord />
                </motion.button>
                {copied && <span className="copy-notification">Copied!</span>}
              </div>
            </div>
          </motion.div>
          <motion.div className="contact-image" variants={itemVariants} custom="right">
            <motion.img src={contactImage} alt="Contact Workspace" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="modal-overlay" onClick={closeModal} variants={modalOverlayVariants} initial="hidden" animate="visible" exit="hidden">
            <motion.div className="modal-content" onClick={(e) => e.stopPropagation()} variants={modalContentVariants} initial="hidden" animate="visible" exit="exit">
              <h2 className="modal-title">Send a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                <input type="hidden" name="time" value={new Date().toLocaleString("id-ID", { dateStyle: "full", timeStyle: "long" })} />
                <button type="submit" className="submit-btn">
                  Send Email
                </button>
              </form>
              <button onClick={closeModal} className="close-btn">
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
