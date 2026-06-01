"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { MercedesStar } from "./MercedesStar";

export function StarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} color="#fff2d4" />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#fff0c8" />
      <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#b8794a" />
      <Suspense fallback={null}>
        <MercedesStar />
        <Environment preset="sunset" environmentIntensity={0.8} />
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.22}
          scale={6}
          blur={2.6}
          far={3}
          color="#2a1f15"
        />
      </Suspense>
    </Canvas>
  );
}
