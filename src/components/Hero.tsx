
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Bubbles from './Bubbles';

const Hero = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -((clientY - top) / height) * 2 + 1;
    mousePos.current = { x, y };
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0" onPointerMove={handlePointerMove}>
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="blue" intensity={2} />
          <pointLight position={[10, 10, 10]} color="cyan" intensity={2} />
          <Bubbles count={200} mousePosRef={mousePos} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-foreground max-w-2xl mx-auto -mt-72 p-8 rounded-2xl">
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
