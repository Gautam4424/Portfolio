
import React, { useState, useRef, useEffect } from 'react';
import { Home, User, Briefcase, FolderGit2, Wrench, Mail, Move, Sun, Moon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

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
  const [activeLink, setActiveLink] = useState('Home');
  const { theme, setTheme } = useTheme();

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

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current;
          });

          const visibleSection = navLinks.find(
            (link) => `#${mostVisibleEntry.target.id}` === link.href
          );
          if (visibleSection) {
            setActiveLink(visibleSection.name);
          }
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
                className={cn(
                  "p-2 rounded-full transition-colors duration-300",
                  activeLink === link.name
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                )}
              >
                <link.icon size={24} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <div className="pt-2 mt-2 border-t border-border/40">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent"
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-2 left-2 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
