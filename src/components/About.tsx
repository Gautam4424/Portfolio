
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="text-lg text-slate-300 leading-relaxed space-y-6 text-left">
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
    </section>
  );
};

export default About;
