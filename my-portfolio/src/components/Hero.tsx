import React from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Thais Nara</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Apaixonada por criar experiências digitais incríveis. Especializada em
          desenvolvimento web moderno com foco em performance, usabilidade e
          código limpo.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("projects")}
          >
            Ver Projetos
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
