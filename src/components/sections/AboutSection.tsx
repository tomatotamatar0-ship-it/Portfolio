import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, RoundedBox, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const AboutSection = ({ onBack }: { onBack: () => void }) => {
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
        ABOUT ME
      </Text>

      <group position={[0, 0, 0]}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <RoundedBox args={[6, 4, 0.1]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#111" transparent opacity={0.9} />
          </RoundedBox>
          
          <group position={[-2.5, 1.2, 0.1]}>
            <Text fontSize={0.4} color="#22d3ee" anchorX="left" font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff">
              AHMAD ALI
            </Text>
            <Text position={[0, -0.4, 0]} fontSize={0.15} color="#888" anchorX="left">
              3D Environment Artist & Game Artist
            </Text>
          </group>

          <Text
            position={[-2.5, -0.2, 0.1]}
            fontSize={0.18}
            color="white"
            anchorX="left"
            anchorY="top"
            maxWidth={5}
            lineHeight={1.6}
          >
            I specialize in crafting immersive digital worlds that tell a story. 
            With a deep passion for environment art and game design, I bridge the gap 
            between technical optimization and artistic vision.
          </Text>

          <group position={[-2.5, -1.8, 0.1]}>
            <Text fontSize={0.12} color="#22d3ee" anchorX="left">
              LOCATION: LAHORE, PAKISTAN
            </Text>
            <Text position={[0, -0.3, 0]} fontSize={0.12} color="#22d3ee" anchorX="left">
              EXPERTISE: STYLIZED & REALISTIC ASSETS, PBR PIPELINE
            </Text>
          </group>
        </Float>

        {/* Holographic Decoration */}
        <mesh position={[0, 0, -0.2]}>
          <planeGeometry args={[6.5, 4.5]} />
          <MeshDistortMaterial color="#22d3ee" speed={2} distort={0.2} transparent opacity={0.1} wireframe />
        </mesh>
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
