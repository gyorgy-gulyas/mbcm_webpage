"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Center } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { CarRig } from "./CarRig";
import { getScrollProgress } from "@/lib/scrollProgress";

function BackdropTone() {
  useEffect(() => {
    const fromGray = [0xdc, 0xdc, 0xd8];
    const toBlack = [0x0a, 0x0a, 0x0a];
    let raf = 0;
    const tick = () => {
      const progress = getScrollProgress();
      const eased = Math.min(1, Math.max(0, (progress - 0.55) / 0.35));
      const r = Math.round(fromGray[0] + (toBlack[0] - fromGray[0]) * eased);
      const g = Math.round(fromGray[1] + (toBlack[1] - fromGray[1]) * eased);
      const b = Math.round(fromGray[2] + (toBlack[2] - fromGray[2]) * eased);
      document.body.style.background = `rgb(${r},${g},${b})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.background = "";
    };
  }, []);

  return null;
}

export function PersistentCarCanvas() {
  return (
    <>
      <BackdropTone />
      <div className="pointer-events-none fixed inset-0 z-0">
        <Canvas
          camera={{ position: [4.8, 1.8, 5.6], fov: 32 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          shadows="soft"
        >
          <ambientLight intensity={0.45} color="#ffffff" />
          <directionalLight
            position={[6, 8, 4]}
            intensity={1.5}
            color="#ffffff"
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <directionalLight
            position={[-4, 3, -4]}
            intensity={0.5}
            color="#cdd0d6"
          />

          <Suspense fallback={null}>
            <Center disableY>
              <CarRig />
            </Center>
            <Environment preset="studio" environmentIntensity={1.0} />
            <ContactShadows
              position={[0, -0.001, 0]}
              opacity={0.4}
              scale={10}
              blur={2.4}
              far={3}
              color="#000000"
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
