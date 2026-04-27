import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    title: "Mailroom Assistant",
    company: "Boston University Housing",
    location: "Boston, MA",
    period: "Jan 2025 - Present",
    points: [
      "Automated mail return workflow building Python tool generating scannable barcode PDFs reducing processing time by 26%",
      "Replaced manual tracking-number entry with barcode-based scanning, improving accuracy in high-volume periods"
    ]
  },
  {
    title: "Research Intern",
    company: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "Aug 2023 - Jun 2024",
    points: [
      "Built computer vision models using YOLO and OpenCV for vehicle detection enabling automated traffic signal control",
      "Designed and deployed rainwater management system using Raspberry Pi and OCR reducing flood response time by 30%",
      "Developed deep learning models with TensorFlow and PyTorch for computer vision and IoT challenges"
    ]
  },
  {
    title: "Research Intern",
    company: "IIIT Hyderabad",
    location: "Hyderabad, India",
    period: "May 2023 - Aug 2023",
    points: [
      "Developed Python dataset compilation pipeline using NumPy and pandas streamlining data preparation",
      "Isolated vocal and musical components with Spleeter for precise prosody analysis in Speech Processing Lab",
      "Integrated dataset into translation pipeline with Git improving speech accuracy by 8-10%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <div className="exp-meta">
                      <p className="exp-period">{exp.period}</p>
                      <p className="exp-location">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
