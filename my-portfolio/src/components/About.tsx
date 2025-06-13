import React from "react";

const About: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "UI/UX Design",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <p className="section-subtitle">
          Desenvolvedor apaixonado por tecnologia e inovação
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Olá! Sou João Silva, um desenvolvedor full stack com mais de 5
              anos de experiência criando soluções web modernas e eficientes.
              Minha jornada começou com curiosidade sobre como os sites
              funcionam e evoluiu para uma paixão por criar experiências
              digitais que fazem a diferença.
            </p>
            <p>
              Especializo-me em tecnologias como React, Node.js, e Python,
              sempre buscando as melhores práticas e mantendo-me atualizado com
              as tendências do mercado. Acredito que o código limpo e a
              experiência do usuário são fundamentais para o sucesso de qualquer
              projeto.
            </p>
            <p>
              Quando não estou programando, gosto de contribuir com projetos
              open source, ler sobre novas tecnologias e compartilhar
              conhecimento com a comunidade dev.
            </p>

            <div className="skills">
              <h3>Tecnologias & Ferramentas</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="about-placeholder">Foto do Desenvolvedor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
