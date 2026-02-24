import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial, useScroll, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { HubWorld } from './sections/HubWorld';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AboutSection } from './sections/AboutSection';

export const Experience = ({ started }: { started: boolean }) => {
  const { camera } = useThree();
  const [activeSection, setActiveSection] = useState('hub');

  useEffect(() => {
    if (started) {
      // Cinematic camera intro
      gsap.to(camera.position, {
        z: 15,
        y: 2,
        duration: 3,
        ease: "power3.inOut"
      });
    }
  }, [started, camera]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#44aaff" />
      <spotLight
        position={[-10, 20, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        color="#ff8844"
      />

      <group visible={started}>
        <HubWorld onNavigate={setActiveSection} active={activeSection === 'hub'} />
        
        {activeSection === 'projects' && <ProjectsSection onBack={() => setActiveSection('hub')} />}
        {activeSection === 'skills' && <SkillsSection onBack={() => setActiveSection('hub')} />}
        {activeSection === 'experience' && <ExperienceSection onBack={() => setActiveSection('hub')} />}
        {activeSection === 'about' && <AboutSection onBack={() => setActiveSection('hub')} />}

        {/* Distant City Skyline */}
        <group position={[0, -10, -50]}>
          {[...Array(50)].map((_, i) => (
            <mesh key={i} position={[(Math.random() - 0.5) * 100, Math.random() * 10, 0]}>
              <boxGeometry args={[1 + Math.random() * 2, 5 + Math.random() * 15, 1]} />
              <meshStandardMaterial color="#050505" />
              {Math.random() > 0.5 && (
                <pointLight position={[0, 2, 1]} intensity={0.5} distance={5} color="#22d3ee" />
              )}
            </mesh>
          ))}
        </group>
      </group>

      {/* Background elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-15, 5, -20]} scale={2}>
          <octahedronGeometry />
          <MeshDistortMaterial color="#22d3ee" speed={2} distort={0.4} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[15, -5, -25]} scale={3}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <MeshWobbleMaterial color="#f97316" speed={1} factor={0.6} />
        </mesh>
      </Float>
    </>
  );
};
