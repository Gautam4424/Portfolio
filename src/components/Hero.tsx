
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* New Professional Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#3b82f633,transparent)]"></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center text-foreground max-w-3xl mx-auto p-8 rounded-2xl 
                   bg-slate-900/30 backdrop-blur-md border border-cyan-400/20 
                   shadow-2xl shadow-cyan-500/10 animate-float"
      >
        <h1 
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-gradient-pan drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          style={{ animationFillMode: 'backwards' }}
        >
          Gautam Sachdeva
        </h1>
        <p 
          className="text-xl md:text-2xl mt-6 text-muted-foreground animate-fade-in drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
        >
          DevOps & MLOps Engineer
        </p>
        <div 
          className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <Button asChild size="lg" className="shadow-lg shadow-primary/10">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-cyan-400/10 hover:text-cyan-300 border-cyan-400/50">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in"
        style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
