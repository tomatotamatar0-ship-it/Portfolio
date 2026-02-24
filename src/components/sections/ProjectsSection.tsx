import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Image, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const PROJECTS = [
  {
    title: "Blue Tower Environment",
    description: "A moody, stylized environment with volumetric lighting and custom PBR assets.",
    image: "https://picsum.photos/seed/tower/800/600",
    tags: ["Unity", "Blender", "Substance"]
  },
  {
    title: "Cyberpunk Alleyway",
    description: "High-fidelity real-time environment optimized for mobile game engines.",
    image: "https://picsum.photos/seed/cyber/800/600",
    tags: ["Unreal", "Maya", "PBR"]
  },
  {
    title: "Ancient Ruins",
    description: "Modular environment kit design with focus on high-to-low poly pipeline.",
    image: "https://picsum.photos/seed/ruins/800/600",
    tags: ["ZBrush", "Unity", "Optimization"]
  }
];

export const ProjectsSection = ({ onBack }: { onBack: () => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        PROJECTS
      </Text>

      <group position={[0, 0, 0]}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            position={[(i - activeIndex) * 6, 0, 0]}
            active={i === activeIndex}
            onClick={() => setActiveIndex(i)}
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

const ProjectCard = ({ project, position, active, onClick }: any) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0], 0.1);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, active ? 1 : 0.7, 0.1));
    }
  });

  return (
    <group ref={meshRef} onClick={onClick}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <RoundedBox args={[4, 5, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#111" />
        </RoundedBox>
        <Image
          url={project.image}
          scale={new THREE.Vector3(3.6, 2.5, 1) as any}
          position={new THREE.Vector3(0, 1, 0.1) as any}
          transparent
          opacity={active ? 1 : 0.4}
        />
        <Text
          position={[0, -1, 0.1]}
          fontSize={0.25}
          maxWidth={3}
          textAlign="center"
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          position={[0, -1.8, 0.1]}
          fontSize={0.12}
          maxWidth={3.2}
          textAlign="center"
          color="#888"
        >
          {project.description}
        </Text>
        <group position={[0, -2.3, 0.1]}>
          {project.tags.map((tag: string, i: number) => (
            <Text
              key={i}
              position={[(i - (project.tags.length - 1) / 2) * 0.8, 0, 0]}
              fontSize={0.08}
              color="#22d3ee"
            >
              {tag}
            </Text>
          ))}
        </group>
      </Float>
    </group>
  );
};
