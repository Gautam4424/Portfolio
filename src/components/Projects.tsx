
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  achievements,
  links 
}: {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  links?: { github?: string; live?: string; };
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {links && (
        <div className="flex space-x-2">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Github size={16} />
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}
    </div>
    
    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => (
        <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-xs font-medium">
          {tech}
        </span>
      ))}
    </div>
    
    <ul className="space-y-1">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-slate-400 text-xs leading-relaxed">
          <span className="text-cyan-400 mr-2">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Vizo361.ai - Multi-Tenant Cloud Architecture",
      description: "Robust single-tenant cloud architecture utilizing Terraform for full infrastructure automation on Docker for containerized environments.",
      technologies: ["Terraform", "Docker", "CI/CD", "Linode", "Blue-Green Deployment"],
      achievements: [
        "Deployed a fully functional and production-ready website with CI/CD pipelines enabling automatic integration and delivery",
        "Utilized Linode and Docker to ensure highly portable and scalable container-based deployments",
        "Achieved end-to-end automation across the deployment pipeline, ensuring high reliability, rapid deployments, and minimal manual intervention"
      ]
    },
    {
      title: "MaximPro - Online Platform",
      description: "Tools Used: Git, Docker, Jenkins, nginx, linode, terraform, hexar. HireLinode website online.maximpro.ai using CI/CD pipelines for seamless integration and delivery.",
      technologies: ["Git", "Docker", "Jenkins", "NGINX", "Terraform", "CI/CD"],
      achievements: [
        "Deployed a fully functional website using CI/CD pipelines for seamless integration and delivery",
        "Leveraged Linode for cloud-based deployment and utilized Docker for containerization",
        "Implemented load balancing to enhance performance and provide high availability for user traffic"
      ]
    },
    {
      title: "HireLinode - Cloud Deployment Platform",
      description: "Comprehensive cloud deployment solution with advanced CI/CD integration and containerized architecture.",
      technologies: ["Docker", "Jenkins", "Azure", "CI/CD", "Git", "HTML", "CSS", "JavaScript"],
      achievements: [
        "Responsive Portfolio Development: Built and deployed a personal portfolio website using HTML, CSS, and JavaScript",
        "Showcased effective responsive design that ensures seamless functionality across multiple devices and screen sizes",
        "Advanced tools like Git, GitHub, Jenkins, and Nginx for efficient version control and web server management"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
