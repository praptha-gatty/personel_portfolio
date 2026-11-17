'use client';

import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">Praptha<span>.</span></a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links show" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-heading">HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Praptha Gatty</span></h1>
          <h2>Computer Science Engineering Student</h2>
          <p className="intro">
            I am a student who enjoys learning new technologies, solving problems
            and building simple web applications. I am currently improving my
            skills in programming and web development.
          </p>
          <div className="buttons">
            <a className="button primary" href="#contact">Contact Me</a>
            <a className="button secondary" href="#about">Know More</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email"><Mail /></a>
          </div>
        </div>

        <div className="profile-placeholder">
  <div className="circle">PG</div>
  <p>Computer Science Student</p>
</div>
      </section>

      <section className="about section" id="about">
        <h2>About Me</h2>
        <p>
          I am currently pursuing Computer Science Engineering. I like exploring
          technology, working on projects and learning through practical experience.
          My goal is to become a skilled developer and create useful solutions.
        </p>
      </section>

      <section className="skills section" id="skills">
        <h2>My Skills</h2>
        <div className="skill-list">
          <span>C</span><span>C++</span><span>Python</span>
          <span>HTML</span><span>CSS</span><span>JavaScript</span>
          <span>React</span><span>Next.js</span><span>Git & GitHub</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h2>Contact</h2>
        <p>I'd be happy to connect and learn together.</p>
        <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a>
      </section>

      <footer>© 2026 Praptha Gatty · Personal Portfolio</footer>
    </main>
  );
}
