"use client";

import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import { motion, useInView } from "motion/react";
import * as THREE from "three";
import { ChevronDown } from "lucide-react";

function PanoramaSphere() {
  const texture = useTexture("/rotate.avif");
  texture.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export function ImmersiveExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section
      ref={sectionRef}
      id="360-experience"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand/3 blur-[150px] rounded-full" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#3b3439] font-medium">Immersive Journey</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light leading-tight"
            >
              Explore the 360° View
            </motion.h2>
          </div>

        </div>
      </div>

      {/* 360° Virtual Tour Viewport */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-full overflow-hidden"
        style={{ height: "70vh", minHeight: 400 }}
      >
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0.01] }}
          style={{ width: "100%", height: "100%" }}
        >
          <Suspense fallback={null}>
            <PanoramaSphere />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              rotateSpeed={-0.4}
              reverseOrbit={false}
            />
          </Suspense>
        </Canvas>

        {/* Mobile scroll-down arrow */}
        <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#services"
            aria-label="Scroll to next section"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
