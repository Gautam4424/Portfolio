import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

const Contact = () => {
  const { resolvedTheme } = useTheme();
  
  const cardClass = resolvedTheme === 'dark'
    ? "bg-card/40 backdrop-blur-lg rounded-xl p-6 border border-border/40 hover:bg-accent/30 transition-all duration-300"
    : "bg-card rounded-xl p-6 border border-border hover:bg-accent transition-all duration-300";

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, innovative projects, 
          or just having a conversation about technology and software development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className={cardClass}>
            <Mail className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:gautamsachdeva156@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              gautamsachdeva156@gmail.com
            </a>
          </div>

          <div className={cardClass}>
            <Phone className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a 
              href="tel:+916284217423"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              +91 628 421 7423
            </a>
          </div>

          <div className={cardClass}>
            <MapPin className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <span className="text-muted-foreground text-sm">Zirakpur, India</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Gautam4424"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 group"
          >
            <Github size={24} className="text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/gautam-sachdeva-0ba4a216/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={24} className="text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 Gautam Sachdeva. Built with React, Three.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
