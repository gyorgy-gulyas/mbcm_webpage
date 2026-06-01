"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/models/mercedes-300sl-gullwing.glb";

type Props = {
  tilt?: number;
  spin?: number;
};

export function CarModel({ tilt = 0.14, spin = 0.12 }: Props) {
  const { scene } = useGLTF(MODEL_PATH);
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * spin;

    const targetX = pointer.y * tilt;
    const targetZ = -pointer.x * tilt * 0.5;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.06
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      targetZ,
      0.06
    );
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 0.5) * 0.04;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
