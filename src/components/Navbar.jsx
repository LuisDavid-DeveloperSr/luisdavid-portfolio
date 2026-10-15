import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { id: 'inicio', label: 'Home' },
  { id: 'sobre-mi', label: 'About' },
  { id: 'servicios', label: 'Services' },
  { id: 'proyectos', label: 'Portfolio' },
  { id: 'habilidades', label: 'Skills' },
  { id: 'contacto', label: 'Contact' },
];


export default function Navbar() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar-container">
      <a href="#inicio" className="navbar-logo">
        <img src="/logo.svg" alt="Luis David" className="navbar-logo-img" />
      </a>

      <div className="navbar-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'active' : ''}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contacto" className="navbar-btn">Let's Talk</a>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="navbar-mobile">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
