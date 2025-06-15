
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative group">
              <img 
                src="/lovable-uploads/c3378a3d-837f-4320-9fd0-b14bb0953e4a.png" 
                alt="Futuristic tech interface with hands on keyboard" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-0 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
          <div className="md:col-span-3 text-lg text-slate-300 leading-relaxed space-y-6">
            <p>
              As a passionate and results-driven DevOps and MLOps Engineer, I thrive on architecting and implementing robust, scalable, and automated solutions. My journey in technology is fueled by a relentless curiosity and a desire to solve complex challenges at the intersection of software development, IT operations, and machine learning.
            </p>
            <p>
              My core expertise lies in building resilient cloud infrastructure on platforms like AWS, Linode, and Azure. I leverage Infrastructure as Code (IaC) with tools such as Terraform to ensure every environment is consistent, repeatable, and easily manageable. I have a proven track record of designing and maintaining comprehensive CI/CD pipelines using Jenkins and Docker, enabling zero-downtime deployments and significantly accelerating the software delivery lifecycle. I am particularly skilled in implementing advanced deployment strategies like Blue-Green deployments to minimize risk and ensure seamless updates.
            </p>
            <p>
              I excel at bridging the gap between technical domains, ensuring development and operations are seamlessly integrated. My experience extends to designing both secure multi-tenant and isolated single-tenant architectures for SaaS applications, always prioritizing security, scalability, and performance. I am constantly exploring new technologies to stay at the forefront of the ever-evolving cloud landscape, with a keen interest in applying MLOps principles to streamline machine learning workflows from development to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
