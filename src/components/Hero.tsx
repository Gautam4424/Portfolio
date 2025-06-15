
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 bg-background dark:stars-bg" />

      {/* Content */}
      <div 
        className="relative z-10 text-center max-w-4xl mx-auto p-8"
      >
        <h1 
          className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-slate-900 to-slate-600 dark:from-slate-50 dark:to-slate-300 bg-clip-text text-transparent animate-fade-in drop-shadow-md"
          style={{ animationFillMode: 'backwards' }}
        >
          Gautam Sachdeva
        </h1>
        <p 
          className="text-xl md:text-2xl mt-6 text-slate-700 dark:text-slate-400 animate-fade-in max-w-2xl mx-auto"
          style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
        >
          DevOps & MLOps Engineer Crafting Digital Experiences with Passion and Precision.
        </p>
        <div 
          className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <Button asChild size="lg" className="rounded-full font-semibold shadow-lg dark:shadow-white/10 transition-all duration-300 hover:scale-105">
            <a href="#projects">View My Work <ArrowRight className="inline ml-2 h-5 w-5"/></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full transition-all duration-300 hover:scale-105">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
