import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiCplusplus, SiTensorflow, SiPytorch, 
  SiScikitlearn, SiDocker, SiGit, SiPostgresql, SiLinux 
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python",
      "R",
      "SQL",
      "Java",
      "C/C++",
      "JavaScript",
      "Bash"
    ]
  },
  {
    title: "ML / DL Frameworks",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "XGBoost",
      "LightGBM"
    ]
  },
  {
    title: "NLP & AI",
    skills: [
      "LangChain",
      "Hugging Face",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
      "spaCy",
      "NLTK",
      "Sentence Transformers",
      "Embedding Models"
    ]
  },
  {
    title: "Computer Vision",
    skills: [
      "OpenCV",
      "YOLO",
      "Tesseract OCR",
      "Image Processing",
      "Object Detection",
      "CNN Architectures"
    ]
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Feature Engineering",
      "Statistical Analysis",
      "Model Evaluation"
    ]
  },
  {
    title: "MLOps & Backend",
    skills: [
      "FastAPI",
      "REST APIs",
      "Docker",
      "CI/CD",
      "Jenkins",
      "Model Deployment",
      "API Integration"
    ]
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      "Git",
      "Linux",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "GCP"
    ]
  },
  {
    title: "Hardware & Systems",
    skills: [
      "Raspberry Pi",
      "IoT Systems",
      "Stepper Motors",
      "Sensors & Encoders",
      "Hardware-Software Integration"
    ]
  },
  {
    title: "Research & Experimentation",
    skills: [
      "Experimental Design",
      "Psychophysics",
      "Data Collection Pipelines",
      "Reproducible Research",
      "Academic Writing"
    ]
  }
];


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-item">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="expertise-highlights">
            <motion.div
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h4>Production ML</h4>
              <p>Docker, CI/CD, FastAPI, Redis caching, REST API Development, Containerized ML Workflows</p>
            </motion.div>
            <motion.div
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h4>Research</h4>
              <p>Feature engineering, Model Evaluation, Statistical Analysis, Cross-Validation Strategies</p>
            </motion.div>
            <motion.div
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h4>IoT Integration</h4>
              <p>Raspberry Pi, Sensor Integration, Real-Time Systems, GPIO / I2C / SPI Communication</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
