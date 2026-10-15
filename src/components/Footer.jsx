import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const links = [
  { label: 'About', href: '#sobre-mi' },
  { label: 'Services', href: '#servicios' },
  { label: 'Projects', href: '#proyectos' },
  { label: 'Skills', href: '#habilidades' },
  { label: 'Contact', href: '#contacto' },
];

const socials = [
  { label: 'LinkedIn', icon: <FaLinkedin size={17} />, href: 'https://www.linkedin.com/in/luis-david-espinal-720487363/' },
  { label: 'GitHub', icon: <FaGithub size={17} />, href: 'https://github.com/LuisDavid-DeveloperSr' },
  { label: 'Instagram', icon: <FaInstagram size={17} />, href: 'https://www.instagram.com/lespinal_/' },
];

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.svg" alt="Luis David" className="footer-logo-img" />
          <p className="footer-tagline">Building modern web experiences.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Luis David. All rights reserved.
        </p>
        <a href="#" className="footer-top" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
