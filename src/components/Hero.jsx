import React from 'react';
import { ShoppingCart, Settings, AppWindow, Layers, Mail } from 'lucide-react';
import {
  FaPhp, FaReact, FaNodeJs, FaPython, FaDatabase, FaLinux,
  FaWhatsapp, FaLinkedin, FaTelegramPlane,
} from 'react-icons/fa';
import avatarImg from '../assets/avatar.png';
import './Hero.css';

export default function Hero() {
  const services = [
    { icon: <ShoppingCart size={20} />, text: '1. E-COMMERCE' },
    { icon: <Settings size={20} />, text: '2. BACKEND API DEVELOPMENT' },
    { icon: <AppWindow size={20} />, text: '3. FRONTEND & UI/UX' },
    { icon: <Layers size={20} />, text: '4. SYSTEMS ARCHITECTURE' },
  ];

  return (
    <div className="hero-bg-full">
      <section id="inicio" className="hero-wrapper-exact">
        {/* Columna izquierda */}
        <div className="hero-left-content">
          <h1 className="hero-main-title">
            LUIS <span className="gradient-text">DAVID</span>
          </h1>

          <div className="hero-sub-title-block">
            <span className="hero-sub-title-1">Expert</span>
            <span className="hero-sub-title-1">Website</span>
            <span className="hero-sub-title-2">Development</span>
            <span className="hero-sub-title-1">Services</span>
          </div>

          <p className="hero-description-exact">
            Transform ideas into high-performance products... with a modern and clean aesthetic.
          </p>

          <div className="hero-services-vertical-box">
            <div className="hero-vertical-label-card">
              <div className="label-line-1">What we do</div>
              <div className="label-line-2">our services</div>
            </div>

            <div className="hero-services-list-exact">
              {services.map((s, i) => (
                <div key={i} className="hero-service-row-exact">
                  <div className="hero-service-icon-sq">{s.icon}</div>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hero-right-container">
          <div className="hero-tech-banner-top">
            <span className="hero-tech-pill" style={{ color: '#f97316' }}>HTML5</span>
            <span className="hero-tech-pill" style={{ color: '#3b82f6' }}>CSS3</span>
            <span className="hero-tech-pill" style={{ color: '#eab308' }}>JS</span>
            <span className="hero-tech-pill" style={{ color: '#c084fc' }}><FaPhp size={18} /></span>
            <span className="hero-tech-pill" style={{ color: '#22d3ee' }}><FaReact size={16} /></span>
            <span className="hero-tech-pill" style={{ color: '#ef4444' }}>Laravel</span>
            <span className="hero-tech-pill" style={{ color: '#22c55e' }}><FaNodeJs size={18} /></span>
            <span className="hero-tech-pill" style={{ color: '#fde047' }}><FaPython size={16} /></span>
            <span className="hero-tech-pill" style={{ color: '#60a5fa' }}><FaDatabase size={14} /> MySQL</span>
            <span className="hero-tech-pill" style={{ color: '#d4d4d8' }}><FaLinux size={14} /> Linux</span>
          </div>

          <div className="hero-role-tag">EXPERT FULL STACK & SYSTEMS ENGINEER</div>

          <div className="hero-avatar-full-wrapper">
            <div className="hero-ring" />
            <div className="hero-halo" />
            <img src={avatarImg} alt="Luis David Avatar 3D" className="hero-avatar-full-img" />
          </div>

          <div className="hero-contact-floating-box">
            <div className="hero-contact-floating-title">Contact Us</div>
            <a href="mailto:Ide081003@gmail.com" className="hero-contact-floating-email">
              <Mail size={16} color="#ffffff" /> Ide081003@gmail.com
            </a>
            <div className="hero-contact-socials-row">
              <FaWhatsapp size={18} />
              <FaLinkedin size={18} />
              <FaTelegramPlane size={18} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
