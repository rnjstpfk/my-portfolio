import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'React Art Gallery',
    img: '/images/art-gallery.jpg',
    desc: 'React와 SCSS를 사용하여 구현한 반응형 아트 갤러리 웹사이트. Swiper 슬라이더와 검색 기능이 포함되어 있습니다.',
    tech: ['React', 'SCSS', 'Framer Motion'],
    link: 'https://github.com/sera/art-gallery'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    img: '/images/portfolio.jpg',
    desc: '개인 포트폴리오 사이트. Vite + React 기반으로 제작했으며 Firebase Auth 연동을 포함합니다.',
    tech: ['React', 'Firebase', 'Vite'],
    link: 'https://sera-portfolio.netlify.app'
  },
  {
    id: 3,
    title: 'E-commerce UI',
    img: '/images/shop-ui.jpg',
    desc: '가상의 쇼핑몰 UI를 구현. 장바구니와 필터링 기능을 추가하여 사용자 경험을 강화했습니다.',
    tech: ['React', 'Context API', 'Styled Components'],
    link: 'https://github.com/sera/shop-ui'
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}