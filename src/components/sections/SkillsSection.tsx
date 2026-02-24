import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SKILLS = [
  { name: "Blender", color: "#f97316" },
  { name: "Unity", color: "#ffffff" },
  { name: "Unreal", color: "#3b82f6" },
  { name: "Substance", color: "#ef4444" },
  { name: "Maya", color: "#06b6d4" },
  { name: "ZBrush", color: "#8b5cf6" },
  { name: "Photoshop", color: "#3b82f6" },
  { name: "Lighting", color: "#eab308" }
];

export const SkillsSection = ({ onBack }: { onBack: () => void }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group>
      <Text
        position={[0, 4, -2]}
        fontSize={0.8}
        color="white"
        font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
        anchorX="center"
        letterSpacing={0.1}
      >
        SKILLS
      </Text>

      <group ref={groupRef}>
        {/* Holographic Core */}
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#22d3ee"
            speed={2}
            distort={0.4}
            transparent
            opacity={0.1}
            wireframe
          />
        </Sphere>

        {SKILLS.map((skill, i) => {
          const phi = Math.acos(-1 + (2 * i) / SKILLS.length);
          const theta = Math.sqrt(SKILLS.length * Math.PI) * phi;
          const x = 3 * Math.cos(theta) * Math.sin(phi);
          const y = 3 * Math.sin(theta) * Math.sin(phi);
          const z = 3 * Math.cos(phi);

          return (
            <SkillNode
              key={i}
              position={[x, y, z]}
              name={skill.name}
              color={skill.color}
            />
          );
        })}
      </group>

      {/* Back Button */}
      <group position={[0, -4, 0]} onClick={onBack}>
        <mesh>
          <planeGeometry args={[2, 0.5]} />
          <meshBasicMaterial color="white" transparent opacity={0.1} />
        </mesh>
        <Text fontSize={0.2} color="white" position={[0, 0, 0.1]}>
          BACK TO HUB
        </Text>
      </group>
    </group>
  );
};

const SkillNode = ({ position, name, color }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        fillOpacity={hovered ? 1 : 0.5}
      >
        {name}
      </Text>
      {hovered && (
        <pointLight intensity={1} distance={2} color={color} />
      )}
    </group>
  );
};
