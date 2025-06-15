
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, innovative projects, 
          or just having a conversation about technology and software development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a 
              href="mailto:gautamsachdeva156@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
            >
              gautamsachdeva156@gmail.com
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Phone className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a 
              href="tel:+916284217423"
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
            >
              +91 628 421 7423
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <MapPin className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <span className="text-slate-300 text-sm">Zirakpur, India</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Gautam4424"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Github size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/gautam-sachdeva-0ba4a216/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            © 2024 Gautam Sachdeva. Built with React, Three.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
