import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Float, Sparkles, Stars, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from './components/Experience';
import { Overlay } from './components/Overlay';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
        {!started && !loading && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-display font-light tracking-[0.5em] mb-4 uppercase">
                Ahmad Ali
              </h1>
              <p className="text-xl md:text-2xl text-white/50 tracking-[0.3em] uppercase mb-12">
                Crafting Immersive Worlds
              </p>
              <button
                onClick={() => setStarted(true)}
                className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.4em] text-sm group"
              >
                <span className="group-hover:scale-110 inline-block transition-transform">Press to Explore</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 50]} />
        
        <Experience started={started} />
        
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={200} scale={20} size={1} speed={0.4} opacity={0.1} />
      </Canvas>

      {started && <Overlay />}
    </div>
  );
}
