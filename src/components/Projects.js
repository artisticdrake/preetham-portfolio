import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "Multimodal Learning Disability Detection",
    description: "Built 45 classification models across 9 algorithms tackling severe class imbalance in NHIS health survey data",
    tech: ["Random Forest", "Python", "Scikit-learn", "Feature Engineering"],
    metrics: ["86.5% balanced accuracy", "86.1% sensitivity", "Clinical-grade detection"],
    github: "https://github.com/artisticdrake/multimodel-learning-disability-detection",
    demo: "https://github.com/artisticdrake/multimodel-learning-disability-detection"
  },
  {
    title: "CHATALOGUE - Intelligent Campus Assistant",
    description: "Context-aware chatbot using RAG combining intent classification, NER, and FAISS vector search with session memory",
    tech: ["LangChain", "FastAPI", "Docker", "Redis", "FAISS", "Jenkins"],
    metrics: ["35% latency reduction", "Fuzzy matching context recall", "CI/CD deployment"],
    github: "https://github.com/artisticdrake/CHATALOGUE",
    demo: "https://github.com/artisticdrake/CHATALOGUE"
  },
  {
    title: "Rainwater Monitoring System",
    description: "Real-time IoT monitoring system using Raspberry Pi and computer vision for automated water level detection",
    tech: ["OpenCV", "Raspberry Pi", "Tesseract OCR", "Python", "Linux"],
    metrics: ["30% faster emergency response", "Campus-wide deployment", "Automated email alerts"],
    github: "https://github.com/artisticdrake/rainwater-monitoring-system",
    demo: "https://drive.google.com/drive/folders/1_4qp1jeSZq3LJOaQYy-eWMiFdkenkanS?usp=sharing"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="metric-badge">{metric}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
