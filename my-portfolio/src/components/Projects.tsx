import React, { Fragment, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveDemo: string;
  github: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Uma plataforma completa de e-commerce com design moderno, pagamentos seguros e gerenciamento de estoque em tempo real. Desenvolvida com React e Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicativo colaborativo de gerenciamento de projetos com atualizações em tempo real, recursos de colaboração em equipe e design intuitivo.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description:
        "Dashboard interativo para análise de conjuntos de dados complexos com gráficos bonitos e processamento de dados em tempo real.",
      tags: ["D3.js", "Python", "Flask", "PostgreSQL", "Chart.js"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Aplicativo de previsão do tempo com interface moderna, geolocalização automática e dados meteorológicos detalhados de múltiplas fontes.",
      tags: ["React Native", "TypeScript", "API Integration", "Redux"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Dashboard unificado para gerenciar múltiplas contas de redes sociais, agendar posts e analisar métricas de engajamento.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "OAuth", "Vercel"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "Sistema completo de gestão de aprendizado com cursos online, quiz interativos, progresso do aluno e certificações.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      liveDemo: "#",
      github: "#",
    },
  ];

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle">
          Alguns dos projetos que desenvolvi recentemente
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">Screenshot do Projeto</div>
              <div className="project-content">
                <Fragment>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Fragment>
                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
