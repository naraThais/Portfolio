import React, { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const socialLinks: SocialLink[] = [
    { icon: "📧", url: "mailto:joao@email.com", label: "Email" },
    { icon: "💼", url: "https://linkedin.com/in/joaosilva", label: "LinkedIn" },
    { icon: "🐙", url: "https://github.com/joaosilva", label: "GitHub" },
    { icon: "🐦", url: "https://twitter.com/joaosilva", label: "Twitter" },
  ];

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("Enviando...");

    // Simular envio do formulário
    setTimeout(() => {
      setSubmitStatus("Mensagem enviada com sucesso!");
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
        setContactForm({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Vamos conversar sobre seu próximo projeto
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos trabalhar juntos!</h3>
            <p>
              Estou sempre interessado em novos projetos e oportunidades. Seja
              para discutir uma ideia, uma colaboração ou apenas para trocar uma
              ideia sobre tecnologia, ficarei feliz em conversar!
            </p>
            <p>
              Respondo a todos os emails dentro de 24 horas. Você também pode me
              encontrar nas redes sociais abaixo.
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleContactFormChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactFormChange}
                required
                rows={5}
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>

            {submitStatus && (
              <div className="submit-status">{submitStatus}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
