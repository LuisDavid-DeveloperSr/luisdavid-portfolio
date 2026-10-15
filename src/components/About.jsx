import React from 'react';
import { Download } from 'lucide-react';
import avatar from '../assets/about-avatar.png';
import './Services.css';
import './Showcase.css';
import Marquee from './Marquee';

export default function About() {
    return (
        <section id="sobre-mi" className="section-wrapper">
            <div className="about-grid">
                <div className="about-photo">
                    <img src={avatar} alt="Luis" />
                </div>

                <div className="about-text">
                    <span className="services-tag">About me</span>
                    <h2 className="services-title">
                        Hi, I'm <span className="gradient-text">Luis David</span>
                    </h2>
                    <p>
                        Full stack developer focused on building fast, clean and reliable
                        web platforms, from the interface to the server.
                    </p>
                    <p>
                        I work with React, PHP/Laravel and Linux servers, and I care about
                        code that is easy to maintain.
                    </p>

                    <div className="about-stats">
                        <div className="glass-card about-stat"><strong>3+</strong><span>Years</span></div>
                        <div className="glass-card about-stat"><strong>10+</strong><span>Projects</span></div>
                    </div>

                    <a className="about-cv" href="/CV_LD.pdf" download>
                        <Download size={16} /> Download CV
                    </a>
                </div>
            </div>
            <div className="about-marquee">
                <Marquee />
            </div>
        </section>
    );
}
