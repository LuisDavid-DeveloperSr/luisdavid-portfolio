import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Layers } from 'lucide-react';
import './Services.css';
import './Showcase.css';
import arimcrea from '../assets/arimcrea.png';
import eurostat from '../assets/eurostat.png';
import captura1 from '../assets/captura1.png';
import captura2 from '../assets/captura2.png';
import captura3 from '../assets/captura3.png';




// Rellena `image` con una captura (ej: import shot from '../assets/proyecto1.png')
// y `link` con la URL real del repo o de la demo.
const projectList = [
  {
    title: 'Arimcrea',
    subtitle: 'Brand & design website',
    description: 'Website about design and brand identity, deployed on Vercel.',
    tags: ['React', 'UI/UX', 'Vercel'],
    image: arimcrea,
    link: 'https://arimcrea.vercel.app/', // TODO: URL real del sitio o repo
  },
  {
    title: 'Labour Statistics Dashboard',
    subtitle: 'Eurostat full-stack app',
    description: 'View official unemployment statistics across Europe.',
    tags: ['React', 'Node.js', 'Eurostat API'],
    image: eurostat,
    link: 'https://euro-labor-dashboard.vercel.app/', 
  },
  {
    title: 'University Performance Dashboard',
    subtitle: 'Data analysis',
    description: 'Academic performance and dropout rates in Catalonia from official data.',
    tags: ['Python', 'Streamlit', 'Pandas'],
    image: captura1,
    link: 'https://github.com/LuisDavid-DeveloperSr', // TODO
  },
  {
    title: 'User Management API',
    subtitle: 'REST backend',
    description: 'REST API with JWT authentication and SQL persistence.',
    tags: ['Node.js', 'SQL', 'JWT'],
    image: captura2,
    link: 'https://github.com/LuisDavid-DeveloperSr', // TODO
  },
  {
    title: 'Your next project',
    subtitle: 'Let\'s build it together',
    description: '',
    tags: ['Let\'s talk'],
    image: captura3,
    link: '#contacto',
  },
];

export default function Projects() {
  const track = useRef(null);

  const scroll = (dir) =>
    track.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  return (
    <section id="proyectos" className="section-wrapper">
      <div className="carousel-head">
        <div>
          <span className="services-tag">My work</span>
          <h2 className="services-title" style={{ marginBottom: 0 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="carousel-arrows">
          <button className="carousel-arrow" onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <button className="carousel-arrow" onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="carousel-track" ref={track}>
        {projectList.map((p) => {
          const external = p.link.startsWith('http');
          return (
            <a
              key={p.title}
              href={p.link}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="glass-card project-card"
            >
              <div className="project-thumb">
                {p.image ? <img src={p.image} alt={p.title} /> : <Layers size={42} />}
              </div>

              <div className="project-body">
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.subtitle}</p>
                </div>
                <span className="project-go"><ArrowUpRight size={16} /></span>
              </div>

              {p.description && (
                <p className="project-desc">{p.description}</p>
              )}

              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
