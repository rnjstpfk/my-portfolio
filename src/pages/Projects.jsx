import React from 'react';
import { Link } from "react-router-dom"; 
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "React + Firebase 포트폴리오",
    tech: ["React", "API" ,"Firebase"],
    image: "/images/portfolio.jpg",
    link: "https://team1-2c9b9.web.app"  // 외부 배포 주소
  },
  {
    id: 2,
    title: "Movie Finder App",
    description: "TMDB API 영화 검색",
    tech: ["React", "API"],
    image: "/images/movie.png",
    link: "https://movie-fxvtkywmt-seras-projects-52241270.vercel.app/"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "OpenWeather + Chart.js",
    tech: ["React", "Swiper"],
    image: "/images/weather.png",
    link: "https://rnjstpfk.github.io/shop2/"
  },
  {
    id: 4,
    title: "OK Drugs Clone",
    description: "OK Drugs 브랜드 웹사이트 클론",
    tech: ["React", "SCSS"],
    image: "/images/okdrugs.png",
    link: "https://ok1-phi.vercel.app/"   // ← 여기 진짜 배포 링크
  }
];




export default function Projects({ theme }) {
  return (
    <section className={`projects-section ${theme}`}>
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <a href={p.link} className="project-card" key={p.id}>
            <div className="project-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech-list">
                {p.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
