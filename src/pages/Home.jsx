import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

export default function Home({ theme }) {
  // ✅ body에 테마 클래스(light/dark) 적용
  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <motion.section 
      className={`hero ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Creative Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
      >
        I build responsive, interactive, and beautiful web experiences.
      </motion.p>

      <div className="cta">
        <a href="/projects" className="btn-primary">View Projects</a>
        <a href="/contact" className="btn-secondary">Contact Me</a>
      </div>

      <ul className="tag-list">
        <li>#React</li>
        <li>#감성코딩</li>
        <li>#반응형</li>
        <li>#UX디자인</li>
        <li>#프론트끝판왕</li>
      </ul>
    </motion.section>
  );
}
