import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/joaosilva" },
    { label: "GitHub", href: "https://github.com/joaosilva" },
    { label: "Twitter", href: "https://twitter.com/joaosilva" },
    { label: "Email", href: "mailto:joao@email.com" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>João Silva</h3>
            <p>
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis e soluções inovadoras.
            </p>
          </div>

          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <div className="footer-links">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      const element = document.getElementById(
                        link.href.substring(1)
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="footer-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} João Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
