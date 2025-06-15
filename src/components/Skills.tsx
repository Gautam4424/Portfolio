
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';

const FloatingSkill = ({ 
  text, 
  position, 
  color = "#3b82f6" 
}: { 
  text: string; 
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
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.4}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: string;
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C++", "JavaScript", "Python"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: ["Docker", "Kubernetes", "Jenkins", "SonarQube", "CI/CD Pipelines", "Terraform"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "Elastic Search"]
    },
    {
      title: "Web Servers",
      icon: "🖥️",
      skills: ["Nginx", "Apache2"]
    },
    {
      title: "Operating Systems",
      icon: "🐧",
      skills: ["Windows", "Linux"]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
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
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
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
