import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import "../styles/home.css";

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="hero-copy">
          <span className="hero-tag">👋 Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight">Hussain Haider</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer and Software Engineering student building fast, scalable, and elegant web applications using modern JavaScript, React, and Node.js.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Hussain Haider" className="hero-image" />
            </div>
            <div className="hero-detail">
              <h3>Full Stack Developer</h3>
              <p>Turning ideas into polished web experiences with clean code, interactive UI, and fast performance.</p>
              <div className="hero-list">
                <span className="hero-tag-pill">React</span>
                <span className="hero-tag-pill">JavaScript</span>
                <span className="hero-tag-pill">Node.js</span>
                <span className="hero-tag-pill">MongoDB</span>
                <span className="hero-tag-pill">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;