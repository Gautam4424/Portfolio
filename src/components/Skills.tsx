
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { 
  Code, Globe, Cloud, Database, Server, TerminalSquare,
  Braces, FileCode2, Paintbrush, Atom, Container, Wrench, Search, Workflow, CloudCog, DatabaseSearch, Monitor, Terminal 
} from 'lucide-react';
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
  skills: { name: string; icon: React.ReactNode }[]; 
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
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index} 
            className="flex items-center gap-2 bg-secondary/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50 hover:bg-secondary transition-all duration-200"
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
        { name: "Elastic Search", icon: <DatabaseSearch size={16} /> }
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
