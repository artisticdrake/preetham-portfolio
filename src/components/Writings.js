import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import './Writings.css';

const articles = [
  {
    title: "Why Large Language Models Are Not AGI (And Why That Matters)",
    description: "Exploring the fundamental differences between LLMs and Artificial General Intelligence, and the implications for AI development and deployment.",
    date: "Jan 2025",
    readTime: "8 min",
    tags: ["AI", "LLM", "AGI", "Machine Learning"],
    mediumLink: "https://medium.com/@prathipatipreetham/why-large-language-models-are-not-agi-and-why-that-matters-bb831369e8e0"
  },
  // Add more articles here as you publish them
  // {
  //   title: "Your Next Article Title",
  //   description: "Brief description of what the article is about...",
  //   date: "Feb 2025",
  //   readTime: "6 min",
  //   tags: ["Tag1", "Tag2"],
  //   mediumLink: "https://medium.com/@prathipatipreetham/article-slug"
  // }
];

const Writings = () => {
  return (
    <section id="writings" className="writings">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Writings</h2>
          
          <div className="writings-grid">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="article-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="article-header">
                  <span className="article-date">{article.date}</span>
                  <FaMedium className="medium-icon" />
                </div>

                <h3 className="article-title">{article.title}</h3>
                
                <p className="article-description">{article.description}</p>

                <div className="article-meta">
                  <div className="read-time">
                    <FaClock className="clock-icon" />
                    <span>{article.readTime} read</span>
                  </div>
                </div>

                <div className="article-tags">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="article-tag">{tag}</span>
                  ))}
                </div>

                <a 
                  href={article.mediumLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read on Medium <FaExternalLinkAlt className="link-icon" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="https://medium.com/@prathipatipreetham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaMedium /> View All Articles on Medium
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Writings;