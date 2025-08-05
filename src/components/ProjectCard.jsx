import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <img src={project.img} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <ul className="tech-list">
        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </motion.div>
  );
}