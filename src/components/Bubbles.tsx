
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Bubble = ({ factor, speed, xFactor, yFactor, zFactor }: { factor: number, speed: number, xFactor: number, yFactor: number, zFactor: number }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const position = useMemo(() => {
    const x = xFactor + (Math.random() - 0.5) * 30; // wider spread
    const y = yFactor + Math.random() * -30; // start from further down
    const z = zFactor + (Math.random() - 0.5) * 15;
    return new THREE.Vector3(x, y, z);
  }, [xFactor, yFactor, zFactor]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y += speed * delta;
      if (ref.current.position.y > 20) { // reset when it goes high up
        ref.current.position.y = -20; // reset to the bottom
        ref.current.position.x = (Math.random() - 0.5) * 30; // reset x position
      }
    }
  });

  return (
    <Sphere ref={ref} args={[factor, 32, 32]} position={position}>
      <meshStandardMaterial 
        color="#ccfbf1" 
        transparent 
        opacity={0.6} 
        roughness={0.1} 
        metalness={0.2}
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const Bubbles = ({ count = 100 }) => {
  const bubbles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      key: i,
      factor: 0.1 + Math.random() * 0.4, // bubble size
      speed: 0.5 + Math.random() * 2, // bubble speed
      xFactor: 0,
      yFactor: -10,
      zFactor: 0,
    })), [count]);

  return (
    <>
      {bubbles.map(bubble => <Bubble key={bubble.key} {...bubble} />)}
    </>
  );
};

export default Bubbles;
