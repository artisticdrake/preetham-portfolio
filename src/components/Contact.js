import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p className="contact-text">
                I'm actively seeking ML Engineer, Data Scientist, and Applied Scientist roles. 
                Whether you have an opportunity, want to collaborate on a project, 
                or just want to chat about machine learning, I'd love to hear from you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:preeth@bu.edu">preeth@bu.edu</a>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:617-206-0361">617-206-0361</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Boston, MA</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/artisticdrake" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/prathipatipreetham" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="contact-cta">
              <div className="cta-box">
                <h3>Open to Opportunities</h3>
                <ul className="opportunity-list">
                  <li>✓ ML Engineer roles</li>
                  <li>✓ Applied Scientist positions</li>
                  <li>✓ Data Scientist roles</li>
                  <li>✓ Research collaborations</li>
                </ul>
                <a href="mailto:preeth@bu.edu" className="btn btn-primary">Send a Message</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
