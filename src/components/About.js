import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                ✦ I'm a Machine Learning Engineer pursuing my MS in Computer Science at Boston University, 
                with a proven track record of deploying production ML systems that deliver measurable business impact.
              </p>
              <p>
                ✦ Built practical ML systems end to end: data prep, feature engineering, model training, evaluation, and deployment.
              </p>
              <p>
                ✦ Experience with Docker, FastAPI, Redis, CI/CD, and deploying models that are actually used in production.
              </p>
              <p>
                ✦ What drives me is transforming complex data into actionable intelligence. Whether it's 
                achieving 86.5% balanced accuracy on health survey data or reducing query latency by 35% 
                through architectural optimization, I focus on solutions that solve real problems.
              </p>
              <p>
                ✦ Currently seeking ML Engineer or Applied Scientist roles where I can leverage my skills 
                in computer vision, NLP, and production systems to build impactful AI solutions.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>𓂃✍︎ Education</h3>
                <p><strong>Boston University</strong></p>
                <p>MS Computer Science</p>
                <p className="date">Aug 2024 - May 2026</p>
              </div>

              <div className="highlight-card">
                <h3>𖣠 Focus Areas</h3>
                <ul>
                  <li>Machine Learning & Deep Learning</li>
                  <li>MLOps & Deployment</li>
                  <li>Computer Vision & IoT Systems</li>
                  <li>Intelligent Systems & Chatbots</li>
                </ul>
              </div>

              <div className="highlight-card">
                <h3>⚲ Location</h3>
                <p>Boston, MA</p>
                <p>Open to relocation</p>
                <p>STEM OPT authorized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
