
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { 
  Code, Globe, Cloud, Database, Server, TerminalSquare,
  Braces, FileCode2, Paintbrush, Atom, Container, Wrench, Search, Workflow, CloudCog, Monitor, Terminal 
} from 'lucide-react';

const FloatingSkill = ({ 
  position, 
  color = "#3b82f6" 
}: { 
  position: [number, number, number];
  color?: string;
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.1}
        metalness={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  icon,
  animationDelay
}: { 
  title: string; 
  skills: { name: string; icon: React.ReactNode }[]; 
  icon: React.ReactNode;
  animationDelay: string;
}) => {
  return (
    <div 
      className="bg-slate-900/30 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 animate-fade-in"
      style={{ animationDelay, animationFillMode: 'backwards' }}
    >
      <div className="flex items-center mb-4">
        <span className="text-primary mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index} 
            className="flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/20 transition-all duration-200"
          >
            <span className="text-primary">{skill.icon}</span>
            <span className="text-foreground text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      skills: [
        { name: "C++", icon: <Braces size={16} /> },
        { name: "JavaScript", icon: <Braces size={16} /> },
        { name: "Python", icon: <Braces size={16} /> }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe size={28} />,
      skills: [
        { name: "HTML", icon: <FileCode2 size={16} /> },
        { name: "CSS", icon: <Paintbrush size={16} /> },
        { name: "JavaScript", icon: <Braces size={16} /> },
        { name: "React.js", icon: <Atom size={16} /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={28} />,
      skills: [
        { name: "Docker", icon: <Container size={16} /> },
        { name: "Kubernetes", icon: <Container size={16} /> },
        { name: "Jenkins", icon: <Wrench size={16} /> },
        { name: "SonarQube", icon: <Search size={16} /> },
        { name: "CI/CD Pipelines", icon: <Workflow size={16} /> },
        { name: "Terraform", icon: <CloudCog size={16} /> }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: [
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "Elastic Search", icon: <Search size={16} /> }
      ]
    },
    {
      title: "Web Servers",
      icon: <Server size={28} />,
      skills: [
        { name: "Nginx", icon: <Server size={16} /> },
        { name: "Apache2", icon: <Server size={16} /> }
      ]
    },
    {
      title: "Operating Systems",
      icon: <TerminalSquare size={28} />,
      skills: [
        { name: "Windows", icon: <Monitor size={16} /> },
        { name: "Linux", icon: <Terminal size={16} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <FloatingSkill position={[-4, 2, -2]} color="#61dafb" />
          <FloatingSkill position={[4, -1, -1]} color="#2496ed" />
          <FloatingSkill position={[-3, -2, -3]} color="#818cf8" />
          <FloatingSkill position={[3, 3, -4]} color="#a855f7" />
          <FloatingSkill position={[-5, 1, -2]} color="#3b82f6" />
          <FloatingSkill position={[5, -3, -5]} color="#326ce5" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} animationDelay={`${index * 150}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
