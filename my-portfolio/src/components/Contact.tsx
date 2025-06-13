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
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleContactFormChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleContactFormChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={contactForm.subject}
              onChange={handleContactFormChange}
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={handleContactFormChange}
              required
              rows={5}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitStatus && (
              <div className="submit-status">{submitStatus}</div>
            )}
          </form>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
