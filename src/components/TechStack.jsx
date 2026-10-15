import React from 'react';
import { FaPhp, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { Cpu, Code2 } from 'lucide-react';
import './Services.css';
import './Showcase.css';

const showLevels = true; // pon false para ocultar las barras

const skills = [
  { name: 'JavaScript', icon: <Code2 size={22} />, level: 90, label: 'Advanced' },
  { name: 'React', icon: <FaReact size={22} />, level: 90, label: 'Advanced' },
  { name: 'PHP / Laravel', icon: <FaPhp size={24} />, level: 85, label: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs size={22} />, level: 80, label: 'Proficient' },
  { name: 'Python', icon: <FaPython size={22} />, level: 70, label: 'Intermediate' },
  { name: 'MySQL / DBs', icon: <FaDatabase size={20} />, level: 80, label: 'Proficient' },
  { name: 'Linux Servers', icon: <Cpu size={22} />, level: 75, label: 'Proficient' },
  { name: 'Git / GitHub', icon: <FaGitAlt size={22} />, level: 85, label: 'Advanced' },
];

export default function TechStack() {
  return (
    <section id="habilidades" className="section-wrapper">
      <div className="services-header">
        <span className="services-tag">Skills</span>
        <h2 className="services-title">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="services-subtitle">Technologies I use every day.</p>
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="glass-card skill-card">
            <div className="skill-top">
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>

            {showLevels && (
              <>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ '--level': `${s.level}%` }} />
                </div>
                <span className="skill-label">{s.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
