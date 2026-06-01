"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Center, Bounds } from "@react-three/drei";
import { Suspense } from "react";
import { CarModel } from "./CarModel";

export function CarScene() {
  return (
    <Canvas
      camera={{ position: [5, 2.4, 7], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      shadows="soft"
    >
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.6}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-4, 3, -4]} intensity={0.5} color="#cdd0d6" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.15}>
          <Center disableY>
            <CarModel />
          </Center>
        </Bounds>
        <Environment preset="studio" environmentIntensity={1.0} />
        <ContactShadows
          position={[0, -0.001, 0]}
          opacity={0.35}
          scale={10}
          blur={2.4}
          far={3}
          color="#1a1a1a"
        />
      </Suspense>
    </Canvas>
  );
}
