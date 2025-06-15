import React from 'react';
import { ExternalLink, Github, ServerCog, Workflow, CloudCog, Code2 } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  achievements,
  links,
  icon
}: {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  links?: { github?: string; live?: string; };
  icon: React.ReactNode;
}) => {
  
  const cardClass = "bg-card rounded-xl p-6 border border-border hover:bg-accent transition-all duration-300 hover:scale-105 flex flex-col h-full dark:bg-card/40 dark:backdrop-blur-lg dark:border-border/40 dark:hover:bg-accent/30";
  
  return (
    <div className={cardClass}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-primary">{icon}</span>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        {links && (
          <div className="flex space-x-2">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <Github size={16} />
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      
      <ul className="space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-muted-foreground text-xs leading-relaxed">
            <span className="text-primary mr-2">•</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Vizo361.ai - Multi-Tenant Cloud Architecture",
      description: "Enterprise-grade multi-tenant SaaS platform with automated infrastructure provisioning and zero-downtime deployments using Infrastructure as Code principles.",
      technologies: ["Terraform", "Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins", "Monitoring"],
      achievements: [
        "Architected scalable multi-tenant infrastructure supporting 100+ concurrent users",
        "Implemented Infrastructure as Code using Terraform for consistent environment provisioning",
        "Achieved 99.9% uptime through automated health checks and self-healing infrastructure",
        "Reduced deployment time by 80% through fully automated CI/CD pipelines"
      ],
      icon: <ServerCog size={24} />,
      links: {
        github: "https://github.com/Gautam4424",
        live: "https://www.vizo361.ai"
      }
    },
    {
      title: "MaximPro - DevOps Pipeline Platform",
      description: "Comprehensive DevOps platform featuring automated testing, continuous integration, and production deployment with advanced monitoring and alerting systems.",
      technologies: ["Jenkins", "Docker", "NGINX", "Terraform", "Git", "SonarQube", "Prometheus"],
      achievements: [
        "Built end-to-end CI/CD pipeline with automated testing and code quality gates",
        "Implemented blue-green deployment strategy reducing deployment risks by 95%",
        "Configured advanced monitoring and alerting using Prometheus and Grafana",
        "Achieved zero-downtime deployments through load balancer integration"
      ],
      icon: <Workflow size={24} />,
      links: {
        github: "https://github.com/Gautam4424",
        live: "https://www.maximpro.ai"
      }
    },
    {
      title: "hireii.com - Cloud Infrastructure Management",
      description: "Cloud-native deployment platform with automated scaling, cost optimization, and comprehensive infrastructure monitoring for enterprise applications.",
      technologies: ["Linode", "Docker", "Kubernetes", "Azure", "Git", "Helm", "Terraform"],
      achievements: [
        "Designed auto-scaling infrastructure reducing cloud costs by 40%",
        "Implemented container orchestration using Kubernetes for high availability",
        "Built infrastructure monitoring dashboard with real-time metrics and alerts",
        "Established disaster recovery procedures with automated backup strategies"
      ],
      icon: <CloudCog size={24} />,
      links: {
        github: "https://github.com/Gautam4424",
        live: "https://hireii.com/"
      }
    },
    {
      title: "Personal Portfolio - Full-Stack DevOps Showcase",
      description: "Modern responsive portfolio website showcasing DevOps expertise with advanced CI/CD integration, performance optimization, and security best practices.",
      technologies: ["React", "TypeScript", "Docker", "GitHub Actions", "Nginx", "SSL/TLS"],
      achievements: [
        "Developed responsive single-page application with optimal performance metrics",
        "Implemented automated testing and deployment using GitHub Actions",
        "Configured web server with SSL/TLS encryption and security headers",
        "Achieved 100% Lighthouse performance score through optimization techniques"
      ],
      icon: <Code2 size={24} />,
      links: {
        github: "https://github.com/Gautam4424",
        live: "https://techgs.tech/"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          DevOps & Engineering <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
