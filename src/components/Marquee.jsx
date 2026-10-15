import React from 'react';
import { FaReact, FaPhp, FaNodeJs, FaPython, FaDatabase, FaLinux, FaGitAlt } from 'react-icons/fa';
import './Showcase.css';

const items = [
  { name: 'React', icon: <FaReact size={22} /> },
  { name: 'Laravel / PHP', icon: <FaPhp size={26} /> },
  { name: 'Node.js', icon: <FaNodeJs size={22} /> },
  { name: 'Python', icon: <FaPython size={22} /> },
  { name: 'MySQL', icon: <FaDatabase size={20} /> },
  { name: 'Linux', icon: <FaLinux size={22} /> },
  { name: 'Git', icon: <FaGitAlt size={22} /> },
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i} className="marquee-item">{it.icon}{it.name}</span>
        ))}
      </div>
    </div>
  );
}
