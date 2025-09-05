import React from 'react';
import './Footer.css';

export default function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
}
