import React, { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useTheme } from 'next-themes';

const Experience = () => {
  const { resolvedTheme } = useTheme();
  const experiences = [
    {
      title: "Data Scientist",
      company: "Allheartweb Pvt Ltd",
      location: "Chandigarh",
      duration: "Jan 2024 – Sept 2024",
      achievements: [
        "Led the development of three impactful projects, showcasing strong problem-solving and technical skills",
        "Creation of comprehensive data visualization tool for WHOIS data, contributing to domain security initiatives",
        "Successfully integrated domain lookup functionalities with ChatGPT Lookup, available on the Chrome Web Store under the domain whoisnamecenter.com",
        "Effectively utilized Microsoft Azure and AWS EC2 services to develop and deploy cloud solutions"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Proeffico Solutions Pvt Ltd",
      location: "Noida",
      duration: "Jan 2025 – present",
      achievements: [
        "Designed and implemented Multi-Tenant Architecture: Developed and deployed a scalable multi-tenant architecture on Linode Cloud using Terraform, enabling the allocation of dedicated instances for each user in a Software-as-a-Service (SaaS) model",
        "Designed a scalable Single-Tenant Architecture: Built a secure and isolated single-tenant environment for app, utilizing Terraform for infrastructure automation and Docker for containerized deployments",
        "Developed and maintained a comprehensive CI/CD Pipeline with Docker containers to ensure zero-downtime releases",
        "Applied Blue-Green deployment strategies within Docker containers during application updates",
        "Continuous Integration/continuous Deployment (CI/CD) Pipeline: Designed and implemented a robust Jenkins pipeline integrated with Docker"
      ]
    }
  ];

  const getYear = (duration: string) => {
    const parts = duration.split(' ');
    const yearStr = parts[parts.length - 1];
    if (yearStr === 'present') return new Date().getFullYear();
    return parseInt(yearStr, 10);
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    const getMonth = (duration: string) => {
        const parts = duration.split(' ');
        const monthStr = parts[0];
        if (duration.toLowerCase().includes('present')) return new Date().getMonth();
        return new Date(Date.parse(monthStr +" 1, 2012")).getMonth();
    };

    const yearB = getYear(b.duration);
    const yearA = getYear(a.duration);

    if (yearB !== yearA) {
        return yearB - yearA;
    }
    
    return getMonth(b.duration) - getMonth(a.duration);
  });

  const uniqueDurations = useMemo(() => {
    return Array.from(new Set(sortedExperiences.map(exp => exp.duration)));
  }, [sortedExperiences]);

  const [selectedDuration, setSelectedDuration] = useState(uniqueDurations[0]);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | 'auto'>('auto');

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0, handleY: 0 });
  const [handleY, setHandleY] = useState(4);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [selectedDuration]);
  
  // Sync handle position when selectedDuration changes (e.g., by button click)
  useEffect(() => {
    if (isDragging || !timelineContainerRef.current) return;

    const timelineHeight = timelineContainerRef.current.offsetHeight;
    if (timelineHeight === 0) return;

    const currentIndex = uniqueDurations.indexOf(selectedDuration);
    if (currentIndex === -1) return;

    const numDurations = uniqueDurations.length;
    const handleHeight = 32;
    const segmentHeight = timelineHeight / numDurations;
    const newY = currentIndex * segmentHeight + (segmentHeight / 2) - (handleHeight / 2);
    
    setHandleY(newY);

  }, [selectedDuration, containerHeight, isDragging, uniqueDurations]);

  const handleDurationClick = (duration: string) => {
    if (isTransitioning || duration === selectedDuration) {
      return;
    }
    
    setIsTransitioning(true);
    
    const currentIndex = uniqueDurations.indexOf(selectedDuration);
    const newIndex = uniqueDurations.indexOf(duration);
    const isMovingToNewer = newIndex < currentIndex;

    // Set exit animation
    setAnimationClass(isMovingToNewer ? 'animate-slide-out-down' : 'animate-slide-out-up');

    // After exit animation, update content and set enter animation
    setTimeout(() => {
      setSelectedDuration(duration);
      setAnimationClass(isMovingToNewer ? 'animate-slide-in-down' : 'animate-slide-in-up');
    }, 500); // Duration of exit animation

    // Unlock clicks after the full transition is complete
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Total duration (exit + enter)
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTransitioning) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
        y: e.clientY,
        handleY: handleY,
    });
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !timelineContainerRef.current) return;
        
        e.preventDefault();

        const rect = timelineContainerRef.current.getBoundingClientRect();
        const timelineHeight = rect.height;
        
        const deltaY = e.clientY - dragStart.y;
        let newY = dragStart.handleY + deltaY;
        
        const handleHeight = 32;
        newY = Math.max(0, Math.min(newY, timelineHeight - handleHeight));
        setHandleY(newY);
        
        const numDurations = uniqueDurations.length;
        if (numDurations === 0 || timelineHeight === 0) return;

        const segmentHeight = timelineHeight / numDurations;
        let newIndex = Math.floor((newY + handleHeight / 2) / segmentHeight);
        newIndex = Math.max(0, Math.min(newIndex, numDurations - 1));
        
        const newDuration = uniqueDurations[newIndex];
        
        if (newDuration && newDuration !== selectedDuration) {
            handleDurationClick(newDuration);
        }
    };

    const handleMouseUp = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        setIsDragging(false);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
    };

    if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, selectedDuration, uniqueDurations, handleDurationClick]);

  const filteredExperiences = useMemo(() => {
    return sortedExperiences.filter(exp => exp.duration === selectedDuration);
  }, [selectedDuration, sortedExperiences]);

  const experienceCardClass = resolvedTheme === 'dark'
    ? "bg-card/40 backdrop-blur-lg rounded-xl p-6 border border-border/40 hover:bg-accent/30 transition-all duration-300 h-full"
    : "bg-card rounded-xl p-6 border border-border hover:bg-accent transition-all duration-300 h-full";

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-20">
          Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Duration Selector */}
          <div className="flex flex-row md:flex-col gap-4 justify-center md:justify-start flex-wrap">
            {uniqueDurations.map(duration => (
              <button
                key={duration}
                onClick={() => handleDurationClick(duration)}
                className={`w-auto text-sm font-bold p-2 px-4 text-center rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedDuration === duration
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-muted-foreground bg-card border border-border hover:text-foreground hover:border-primary'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div ref={timelineContainerRef} className="relative flex-1" style={{ height: containerHeight, transition: 'height 0.5s ease-in-out' }}>
            <div className="absolute left-4 top-2 w-0.5 h-full bg-primary/30"></div>
            
            <div
              style={{ top: `${handleY}px` }}
              onMouseDown={handleMouseDown}
              className="absolute left-4 w-8 h-8 transform -translate-x-1/2 flex items-center justify-center cursor-ns-resize z-20"
            >
              <div className="bg-background border-4 border-primary rounded-full h-8 w-8 z-10 flex items-center justify-center">
                <Briefcase size={14} className="text-primary" />
              </div>
            </div>

            <div ref={containerRef} key={selectedDuration} className={animationClass}>
              {filteredExperiences.map((exp, index) => (
                <div key={index} className="relative pl-16 pb-12">
                  <div className="absolute top-1 left-4 w-8 h-8 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-background border-4 border-primary rounded-full h-8 w-8 z-10 flex items-center justify-center">
                      <Briefcase size={14} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className={experienceCardClass}>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                    <div className="flex items-center text-muted-foreground text-sm mt-1 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                          <span className="text-primary mr-2 mt-1 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
