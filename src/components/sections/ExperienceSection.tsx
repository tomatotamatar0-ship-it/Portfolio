import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const EXPERIENCE = [
  {
    company: "Markhor Games",
    role: "3D Environment Artist",
    period: "2025 - Present",
    details: "Leading stylized environment design for upcoming AA titles."
  },
  {
    company: "BRIC Games",
    role: "3D Environment Artist",
    period: "2024 - 2025",
    details: "Focused on PBR asset creation and Unity scene optimization."
  },
  {
    company: "Freelance Artist",
    role: "3D Modeler",
    period: "2022 - 2024",
    details: "Collaborated with indie studios on high-to-low poly pipelines."
  }
];

export const ExperienceSection = ({ onBack }: { onBack: () => void }) => {
  const points = EXPERIENCE.map((_, i) => new THREE.Vector3(0, (i - 1) * -3, 0));

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
        EXPERIENCE
      </Text>

      <group position={[0, 1, 0]}>
        <Line
          points={points}
          color="#22d3ee"
          lineWidth={2}
          transparent
          opacity={0.3}
        />
        
        {EXPERIENCE.map((exp, i) => (
          <ExperienceNode
            key={i}
            position={[0, (i - 1) * -3, 0]}
            data={exp}
            index={i}
          />
        ))}
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

const ExperienceNode = ({ position, data, index }: any) => {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} wireframe />
        </mesh>
        
        <group position={[1, 0, 0]}>
          <Text
            fontSize={0.3}
            color="white"
            anchorX="left"
            font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
          >
            {data.company.toUpperCase()}
          </Text>
          <Text
            position={[0, -0.4, 0]}
            fontSize={0.15}
            color="#22d3ee"
            anchorX="left"
          >
            {data.role}
          </Text>
          <Text
            position={[0, -0.7, 0]}
            fontSize={0.12}
            color="#666"
            anchorX="left"
          >
            {data.period}
          </Text>
          <Text
            position={[0, -1.1, 0]}
            fontSize={0.14}
            color="#aaa"
            anchorX="left"
            maxWidth={4}
          >
            {data.details}
          </Text>
        </group>
      </Float>
    </group>
  );
};
