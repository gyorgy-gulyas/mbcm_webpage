"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { MercedesStar } from "./MercedesStar";

export function HeritageStarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 36 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.25} color="#ffffff" />
      <directionalLight position={[3, 4, 5]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-3, -2, -2]} intensity={0.6} color="#a0a8b0" />
      <Suspense fallback={null}>
        <MercedesStar tilt={0.18} spin={0.5} />
        <Environment preset="warehouse" environmentIntensity={0.9} />
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.55}
          scale={6}
          blur={2.6}
          far={3}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}
