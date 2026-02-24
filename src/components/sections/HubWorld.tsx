import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const HubWorld = ({ onNavigate, active }: { onNavigate: (section: string) => void; active: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && active) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      );
    }
  });

  if (!active) return null;

  return (
    <group ref={groupRef}>
      {/* Center Piece */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1, 15]} />
          <MeshDistortMaterial
            color="#22d3ee"
            speed={3}
            distort={0.3}
            radius={1}
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Floating Lanterns / Particles */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 5
          ]}>
            <boxGeometry args={[0.1, 0.2, 0.1]} />
            <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}

      {/* Navigation Nodes */}
      <NavNode
        position={[-4, 2, 0]}
        label="Projects"
        color="#22d3ee"
        onClick={() => onNavigate('projects')}
      />
      <NavNode
        position={[4, 2, 0]}
        label="Skills"
        color="#f97316"
        onClick={() => onNavigate('skills')}
      />
      <NavNode
        position={[-4, -2, 0]}
        label="Experience"
        color="#a855f7"
        onClick={() => onNavigate('experience')}
      />
      <NavNode
        position={[4, -2, 0]}
        label="About"
        color="#10b981"
        onClick={() => onNavigate('about')}
      />
    </group>
  );
};

const NavNode = ({ position, label, color, onClick }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <mesh>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 2 : 0.5}
            wireframe
          />
        </mesh>
        <Text
          position={[0, -1, 0]}
          fontSize={0.3}
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
          color="white"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.2}
        >
          {label.toUpperCase()}
        </Text>
        {hovered && (
          <pointLight intensity={2} distance={5} color={color} />
        )}
      </group>
    </Float>
  );
};
