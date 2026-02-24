import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#a855f7" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-4">
            Welcome to my creative space
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            AHMAD <span className="text-accent-purple">ALI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-10">
            3D Artist | Game Asset Designer | Environment Creator
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-accent-purple hover:bg-accent-purple/80 text-white rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-purple/20">
              View Portfolio
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-white/40 w-5 h-5" />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
    </section>
  );
};
