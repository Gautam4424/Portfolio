
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
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
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
      const yearMatch = exp.duration.match(/\d{4}/);
      if (yearMatch) {
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

  const getGlobalIndex = (expToFind: typeof experiences[0]) => {
    return experiences.findIndex(exp => exp.title === expToFind.title && exp.company === expToFind.company);
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute h-full w-1 bg-cyan-400/20 left-4 md:left-1/2 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {years.map((year, yearIndex) => (
              <div key={year} className="relative pl-12 md:pl-0">
                {/* Year Marker on Timeline */}
                <div className="absolute top-1 left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 border-4 border-slate-900 z-10"></div>
                <div className={`md:flex items-center ${activeYear === year ? 'mb-8' : ''}`}>
                  <div className={`w-full md:w-1/2 ${yearIndex % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
                      <button 
                          onClick={() => setActiveYear(prev => prev === year ? null : year)}
                          className="text-2xl font-bold text-white p-2 bg-transparent border-none cursor-pointer hover:text-cyan-400 transition-colors w-full text-left md:text-inherit"
                      >
                          {year}
                      </button>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {activeYear === year && (
                    <div className="animate-fade-in space-y-12">
                        {experiencesByYear[year].map((exp, index) => {
                            const globalIndex = getGlobalIndex(exp);
                            return (
                                <div key={index} className="relative">
                                    {/* Small dot for experience */}
                                    <div className="absolute top-2 left-[-32px] md:left-1/2 w-3 h-3 bg-slate-500 rounded-full transform -translate-x-1/2 border-2 border-slate-900"></div>
                                    <div className={`md:flex ${globalIndex % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-start`}>
                                        <div className="md:w-1/2">
                                            <div className={`${globalIndex % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                                <ExperienceCard {...exp} />
                                            </div>
                                        </div>
                                        <div className="md:w-1/2"></div> {/* Spacer */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
