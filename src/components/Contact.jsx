import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Clock } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Services.css';
import './Contact.css';

const EMAIL = 'Ide081003@gmail.com';

const socials = [
  { label: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/luis-david-espinal-720487363/' },
  { label: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com/LuisDavid-DeveloperSr' },
  { label: 'Instagram', icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/lespinal_/' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-wrapper">
        <span className="contact-orb contact-orb-left" />
        <span className="contact-orb contact-orb-right" />

        <span className="services-tag">Contact</span>

        <h2 className="services-title">
          Have a <span className="gradient-text">project</span> in mind?
        </h2>

        <p className="contact-text">
          Let's talk about how I can help take your project to the next level.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="contact-btn">
            <Mail size={18} /> {EMAIL}
          </a>

          <button type="button" className="contact-copy" onClick={copyEmail}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <div className="contact-info">
          <span><MapPin size={14} /> Madrid, Spain</span>
          <span><Clock size={14} /> Usually replies within 24h</span>
        </div>

        <div className="contact-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="contact-social"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
