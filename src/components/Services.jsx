import React from 'react';
import { Code2, Server, Wrench } from 'lucide-react';
import './Services.css';
import './Showcase.css';

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Web & App Development',
    text: 'Dynamic websites, dashboards and custom platforms built with React, PHP and Laravel.',
  },
  {
    icon: <Server size={24} />,
    title: 'Servers & Databases',
    text: 'Linux/VPS deployments, MySQL/MongoDB optimization and technical setup.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Maintenance & Fixes',
    text: 'Bug fixing, speed optimization and ongoing support to keep your platform at 100%.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-wrapper">
      <div className="services-header">
        <span className="services-tag">How can I help you?</span>
        <h2 className="services-title">
          Professional <span className="gradient-text">Services</span>
        </h2>
        <p className="services-subtitle">
          Complete web, backend and systems solutions to boost your brand.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <article key={s.title} className="glass-card services-card">
            <div className="services-icon-box">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
