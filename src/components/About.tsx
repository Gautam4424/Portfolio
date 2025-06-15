
import React from 'react';
import { Rocket, Cloud, Cog, Wrench, Layers, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const aboutPoints = [
  {
    icon: <Rocket className="h-8 w-8 text-primary shrink-0" />,
    title: "DevOps & MLOps Specialist",
    description: "Architecting and implementing robust, scalable, and automated solutions at the intersection of software development, IT operations, and machine learning."
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary shrink-0" />,
    title: "Cloud Infrastructure Expert",
    description: "Building resilient cloud infrastructure on platforms like AWS, Linode, and Azure, leveraging Infrastructure as Code with tools like Terraform for consistency and manageability."
  },
  {
    icon: <Cog className="h-8 w-8 text-primary shrink-0" />,
    title: "CI/CD & Automation",
    description: "Designing and maintaining comprehensive CI/CD pipelines using Jenkins and Docker, enabling zero-downtime deployments and accelerating the software delivery lifecycle."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary shrink-0" />,
    title: "Advanced Deployment Strategies",
    description: "Skilled in implementing advanced deployment strategies like Blue-Green deployments to minimize risk and ensure seamless application updates."
  },
  {
    icon: <Layers className="h-8 w-8 text-primary shrink-0" />,
    title: "SaaS Architecture Design",
    description: "Experienced in designing secure multi-tenant and isolated single-tenant architectures for SaaS applications, prioritizing security, scalability, and performance."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary shrink-0" />,
    title: "Security Focused",
    description: "Bridging the gap between technical domains to ensure development and operations are seamlessly and securely integrated, with a constant focus on best practices."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutPoints.map((point, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur-lg border-border/40 text-muted-foreground hover:bg-accent/30 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {point.icon}
                <CardTitle className="text-xl text-foreground">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
