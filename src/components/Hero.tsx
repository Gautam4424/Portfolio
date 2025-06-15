import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useTheme } from 'next-themes';

const AnimatedWavyPlane = () => {
  const meshRef = useRef<Mesh>(null!);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.elapsedTime;
      const positions = meshRef.current.geometry.attributes.position;
      
      // Store original positions on the geometry's user data if not already present
      if (!meshRef.current.geometry.userData.originalPosition) {
        meshRef.current.geometry.userData.originalPosition = positions.clone();
      }
      
      const originalPosition = meshRef.current.geometry.userData.originalPosition;

      for (let i = 0; i < positions.count; i++) {
        const x = originalPosition.getX(i);
        const y = originalPosition.getY(i);
        const z = (Math.sin(x * 0.2 + time * 0.3) + Math.cos(y * 0.2 + time * 0.3)) * 1;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  if (!mounted) return null;

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry args={[50, 30, 70, 70]} />
      <meshStandardMaterial
        color={resolvedTheme === 'dark' ? '#ffffff' : '#3b82f6'}
        wireframe
      />
    </mesh>
  );
};


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedWavyPlane />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-6 max-w-4xl mx-auto pb-60">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-gradient-pan drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
          Gautam Sachdeva
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-muted-foreground animate-fade-in animation-delay-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          DevOps & MLOps Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
