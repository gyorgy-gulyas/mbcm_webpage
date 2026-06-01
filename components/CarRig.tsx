"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CarModel } from "./CarModel";
import { getScrollProgress } from "@/lib/scrollProgress";

type Vec3 = [number, number, number];

type Stage = {
  pos: Vec3;
  look: Vec3;
};

const STAGES: Stage[] = [
  { pos: [4.8, 1.8, 5.6], look: [0, 0.3, 0] },
  { pos: [6.2, 1.4, 0.4], look: [0, 0.3, 0] },
  { pos: [2.4, 4.6, 4.4], look: [0, 0.3, 0] },
  { pos: [0.2, 1.6, 9.2], look: [0, 0.4, 0] },
];

function lerp3(a: Vec3, b: Vec3, t: number): Vec3 {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function sampleStage(progress: number): Stage {
  const N = STAGES.length - 1;
  const t = progress * N;
  const i = Math.floor(t);
  const f = easeInOutCubic(Math.max(0, Math.min(1, t - i)));
  const a = STAGES[Math.min(i, N)];
  const b = STAGES[Math.min(i + 1, N)];
  return {
    pos: lerp3(a.pos, b.pos, f),
    look: lerp3(a.look, b.look, f),
  };
}

const tmpVec = new THREE.Vector3();
const tmpLook = new THREE.Vector3();

export function CarRig() {
  const { camera, pointer } = useThree();
  const carRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const progress = getScrollProgress();
    const stage = sampleStage(progress);

    tmpVec.set(stage.pos[0], stage.pos[1], stage.pos[2]);
    const parallaxX = pointer.x * 0.25;
    const parallaxY = pointer.y * 0.18;
    tmpVec.x += parallaxX;
    tmpVec.y += parallaxY;

    camera.position.lerp(tmpVec, 0.06);

    tmpLook.set(stage.look[0], stage.look[1], stage.look[2]);
    camera.lookAt(tmpLook);

    if (carRef.current) {
      carRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={carRef}>
      <CarModel tilt={0} spin={0} />
    </group>
  );
}
