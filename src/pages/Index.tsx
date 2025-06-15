
import React from 'react';
import FloatingNav from '../components/FloatingNav';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-foreground">
      <FloatingNav />
      <Hero />
      <About />
      <div className="min-h-screen flex items-center justify-center">
        <Experience />
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
