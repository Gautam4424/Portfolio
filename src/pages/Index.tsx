
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
    <div className="relative min-h-screen bg-professional-bg bg-cover bg-fixed bg-center text-foreground">
      <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10">
        <FloatingNav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
