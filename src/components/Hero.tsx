
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import { Mesh } from 'three';
import { Github, Linkedin, Mail } from 'lucide-react';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color="#3b82f6" wireframe />
    </Sphere>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
      <meshStandardMaterial color="#06b6d4" wireframe />
    </Box>
  );
};

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[0.6, 0.2, 16, 32]}>
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </Torus>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere position={[-3, 2, -2]} />
          <AnimatedBox position={[3, -1, -1]} />
          <AnimatedTorus position={[-2, -2, -3]} />
          <AnimatedSphere position={[4, 3, -4]} />
          <AnimatedBox position={[-4, 1, -2]} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Gautam Sachdeva
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-300 animate-fade-in animation-delay-200">
          Data Scientist & Software Engineer
        </p>
        <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
          Passionate about building scalable cloud architectures, implementing ML solutions, 
          and creating robust DevOps pipelines. Experienced in full-stack development with 
          a focus on performance optimization and system reliability.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-600">
          <a 
            href="https://github.com/Gautam4424"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/gautam-sachdeva-0ba4a216/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:gautamsachdeva156@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-slate-400 animate-fade-in animation-delay-800">
          <p>Zirakpur | gautamsachdeva156@gmail.com | +916284217423</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
