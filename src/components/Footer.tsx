import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/thallam-venkata-eswar",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/thallam-venkata-eswar",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:eswar@example.com",
    },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Name and Title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Thallam Venkata Eswar</h3>
            <p className="text-background/80">Software Engineer | Full-Stack & AI-ML Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 text-center">
            <p className="text-background/60 flex items-center justify-center gap-2">
              © {currentYear} Made by Thallam Venkata Eswar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;