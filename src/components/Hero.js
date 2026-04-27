import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <img src="/profile.jpg" alt="Preetham Prathipati" className="hero-image" />
            <div className="image-border"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-greeting">HI, I'M</div>
          <h1 className="hero-name">Preetham Prathipati</h1>
          <h2 className="hero-title">Machine Learning Engineer</h2>
          <p className="hero-description">
            MS Computer Science @ Boston University '26 | Specializing in Computer Vision, NLP & Production ML Systems
          </p>
          <p className="stats-header">Deployed systems with</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">86.5%</span>
              <span className="stat-label">Balanced Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35%</span>
              <span className="stat-label">Latency Reduction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Faster Response</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://drive.google.com/file/d/1FLBhu8gdasL43In63Jc4NolN79alVtiS/view?usp=sharing" className="btn btn-secondary" download>
              <FaFileDownload /> Resume
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/artisticdrake" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/prathipatipreetham" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:preeth@bu.edu">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
