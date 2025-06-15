import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
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

  // Sort experiences to show the most recent first
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getYear = (duration: string) => {
      const parts = duration.split(' ');
      const year = parts[parts.length -1];
      if (year === 'present') return new Date().getFullYear();
      return parseInt(year, 10);
    };
    
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

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-cyan-400/30 transform md:-translate-x-1/2"></div>

          {sortedExperiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-0 mb-16">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card with gradient border */}
                <div className="w-full md:w-[calc(50%-40px)] rounded-xl p-[1.5px] bg-gradient-to-br from-cyan-400/60 to-blue-500/60 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-[10.5px] p-6 h-full">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-cyan-400 font-semibold">{exp.company}</h4>
                    <div className="flex items-center text-slate-400 text-sm mt-1 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Spacer */}
                <div className="w-[80px] hidden md:block"></div>
              </div>

              {/* Timeline Dot and Date */}
              <div className="absolute top-0 left-4 md:left-1/2 w-full transform -translate-x-1/2 flex items-center md:flex-col">
                <div className="bg-slate-900 border-4 border-cyan-400 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                   <Briefcase size={14} className="text-cyan-400" />
                </div>
                 <div className={`text-sm font-semibold text-cyan-400 bg-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap ml-4 md:ml-0 md:mt-4
                  ${index % 2 !== 0 ? 'md:mr-[calc(100%+60px)]' : 'md:ml-[calc(100%+60px)]' }`}>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {exp.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
