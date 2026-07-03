import { useEffect } from "react";
import "../styles/about.css";

function About() {
  useEffect(() => {
    document.title = "About | Portfolio";
  }, []);

  return (
    <section className="page-wrapper about-page">
      <div className="container">
        <div className="about-header">
          <span className="section-tag">About Me</span>
          <h1 className="about-title">Simple, polished web applications with strong React foundations.</h1>
          <p className="about-subtitle">
            I build responsive interfaces and clean backend workflows using React, Node.js, and modern JavaScript. My focus is on clarity, performance, and elegant design.
          </p>
        </div>

        <div className="about-body">
          <div className="about-card">
            <h2>What I do</h2>
            <p>
              I create web applications that feel professional and easy to use. Every project is built to load quickly, adapt across devices, and remain easy to maintain.
            </p>
            <ul className="about-list">
              <li>React interfaces with clean component structure</li>
              <li>Node.js APIs and data handling</li>
              <li>Responsive pages that work on desktop and mobile</li>
            </ul>
          </div>

          <div className="about-card secondary-card">
            <div className="about-stat">
              <strong>Focus</strong>
              <span>Fast, usable, and readable code</span>
            </div>
            <div className="about-stat">
              <strong>Experience</strong>
              <span>React, Vite, Node.js, MongoDB</span>
            </div>
            <div className="about-stat">
              <strong>Goal</strong>
              <span>Build projects that feel clear, modern, and reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
