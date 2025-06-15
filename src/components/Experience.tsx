import React, { useState, useMemo } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ 
  title, 
  company, 
  location, 
  duration, 
  achievements 
}: {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <h4 className="text-lg text-cyan-400 font-semibold">{company}</h4>
      </div>
      <div className="flex flex-col md:items-end mt-2 md:mt-0">
        <div className="flex items-center text-slate-400 mb-1">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center text-slate-400">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-slate-300 text-sm leading-relaxed">
          <span className="text-cyan-400 mr-2">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

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

  const experiencesByYear = useMemo(() => {
    const grouped: Record<string, typeof experiences> = {};
    experiences.forEach(exp => {
      const yearMatch = exp.duration.match(/\d{4}/g); // Use global match to find all years
      if (yearMatch) {
        // Handle duration spanning multiple years if needed, for now using first year
        const year = yearMatch[0];
        if (!grouped[year]) {
          grouped[year] = [];
        }
        grouped[year].push(exp);
      }
    });
    return grouped;
  }, []);

  const years = useMemo(() => 
    Object.keys(experiencesByYear).sort((a, b) => Number(b) - Number(a)),
    [experiencesByYear]
  );

  const [activeYear, setActiveYear] = useState<string | null>(years[0] || null);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="flex justify-center items-center flex-wrap gap-4 mb-12">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105
                ${activeYear === year 
                  ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/30' 
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`
              }
            >
              {year}
            </button>
          ))}
        </div>

        {activeYear && (
            <div className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiencesByYear[activeYear].map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
