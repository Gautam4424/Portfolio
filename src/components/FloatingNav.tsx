
import React, { useState, useRef, useEffect } from 'react';
import { Home, User, Briefcase, FolderGit2, Wrench, Mail, Move } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const FloatingNav = () => {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight / 2 - 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setIsDragging(true);
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      if (navRef.current) {
        const { width, height } = navRef.current.getBoundingClientRect();
        newX = Math.max(0, Math.min(newX, window.innerWidth - width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - height));
      }

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const navClass = "group bg-card/80 backdrop-blur-md p-3 rounded-full flex flex-col items-center gap-4 shadow-2xl shadow-primary/10 border border-border";

  return (
    <div
      ref={navRef}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      className="fixed z-50"
    >
      <div className={navClass}>
        <div 
          className="cursor-grabbing text-muted-foreground hover:text-foreground transition-colors"
          onMouseDown={handleMouseDown}
        >
          <Move size={20} />
        </div>
        {navLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-accent"
              >
                <link.icon size={24} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default FloatingNav;
