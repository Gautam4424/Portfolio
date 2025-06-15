import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Code, Globe, Cloud, Database, Server, TerminalSquare } from 'lucide-react';
import { useTheme } from 'next-themes';

const FloatingSkill = ({ 
  text, 
  position, 
  color: propColor = "#3b82f6" 
}: { 
  text: string; 
  position: [number, number, number];
  color?: string;
}) => {
  const meshRef = useRef<Mesh>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  if (!mounted) return null;

  const lightColorMap = {
    "#61dafb": "#7dd3fc", // React
    "#2496ed": "#38bdf8", // Docker
    "#3776ab": "#60a5fa", // Python
    "#ff9900": "#fbbf24", // AWS
    "#d33833": "#f87171", // Jenkins
    "#326ce5": "#818cf8", // K8s
  };

  const color = resolvedTheme === 'dark' ? propColor : (lightColorMap[propColor] || propColor);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 0.3, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={
        resolvedTheme === 'dark'
        ? "bg-card/40 backdrop-blur-lg rounded-xl p-6 border border-border/40 hover:bg-accent/30 transition-all duration-300"
        : "bg-card rounded-xl p-6 border border-border hover:bg-accent transition-all duration-300"
    }>
      <div className="flex items-center mb-4">
        <span className="text-primary mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors"
          >
            {skill}
          </span>
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
      skills: ["C++", "JavaScript", "Python"]
    },
    {
      title: "Web Development",
      icon: <Globe size={28} />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={28} />,
      skills: ["Docker", "Kubernetes", "Jenkins", "SonarQube", "CI/CD Pipelines", "Terraform"]
    },
    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: ["MySQL", "MongoDB", "Elastic Search"]
    },
    {
      title: "Web Servers",
      icon: <Server size={28} />,
      skills: ["Nginx", "Apache2"]
    },
    {
      title: "Operating Systems",
      icon: <TerminalSquare size={28} />,
      skills: ["Windows", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <FloatingSkill text="React" position={[-4, 2, -2]} color="#61dafb" />
          <FloatingSkill text="Docker" position={[4, -1, -1]} color="#2496ed" />
          <FloatingSkill text="Python" position={[-3, -2, -3]} color="#3776ab" />
          <FloatingSkill text="AWS" position={[3, 3, -4]} color="#ff9900" />
          <FloatingSkill text="Jenkins" position={[-5, 1, -2]} color="#d33833" />
          <FloatingSkill text="K8s" position={[5, -3, -5]} color="#326ce5" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
