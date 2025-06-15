
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Bubble = ({ factor, speed, xFactor, yFactor, zFactor, mousePosRef }: { factor: number, speed: number, xFactor: number, yFactor: number, zFactor: number, mousePosRef: React.RefObject<{ x: number, y: number }> }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  const position = useMemo(() => {
    const x = xFactor + (Math.random() - 0.5) * 30; // wider spread
    const y = yFactor + Math.random() * -30; // start from further down
    const z = zFactor + (Math.random() - 0.5) * 15;
    return new THREE.Vector3(x, y, z);
  }, [xFactor, yFactor, zFactor]);

  useFrame((state, delta) => {
    if (ref.current) {
      if (mousePosRef.current) {
        const { x: mouseX, y: mouseY } = mousePosRef.current;
        const mouse3D = new THREE.Vector3((mouseX * viewport.width) / 2, (mouseY * viewport.height) / 2, 0);
        
        const distance = ref.current.position.distanceTo(mouse3D);
        const repulsionRadius = 4;
        const repulsionStrength = 0.2;

        if (distance < repulsionRadius) {
          const direction = ref.current.position.clone().sub(mouse3D).normalize();
          const force = direction.multiplyScalar(repulsionStrength * (1 - distance / repulsionRadius));
          ref.current.position.add(force);
        }
      }

      ref.current.position.y += speed * delta;
      if (ref.current.position.y > 20) { // reset when it goes high up
        ref.current.position.y = -20; // reset to the bottom
        ref.current.position.x = xFactor + (Math.random() - 0.5) * 30; // reset x position
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[factor, 32, 32]} />
      <meshStandardMaterial 
        color="#ccfbf1" 
        transparent 
        opacity={0.2} 
        roughness={0.1} 
        metalness={0.2}
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Bubbles = ({ count = 100, mousePosRef }: { count?: number, mousePosRef: React.RefObject<{ x: number, y: number }> }) => {
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
      {bubbles.map(bubble => <Bubble key={bubble.key} {...bubble} mousePosRef={mousePosRef} />)}
    </>
  );
};

export default Bubbles;
