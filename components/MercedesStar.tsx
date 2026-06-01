"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  /** Influence radius for mouse parallax tilt (0..1) */
  tilt?: number;
  /** Base auto-rotation speed (radians/sec) */
  spin?: number;
};

export function MercedesStar({ tilt = 0.25, spin = 0.14 }: Props) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const starGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerR = 1;
    const innerR = 0.18;
    const points: [number, number][] = [];

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + Math.PI / 2;
      const r = i % 2 === 0 ? outerR : innerR;
      points.push([Math.cos(angle) * r, Math.sin(angle) * r]);
    }

    shape.moveTo(...points[0]);
    for (let i = 1; i < points.length; i++) shape.lineTo(...points[i]);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: 0.04,
      bevelThickness: 0.04,
      curveSegments: 24,
    });
    geo.center();
    return geo;
  }, []);

  const ringGeometry = useMemo(
    () => new THREE.TorusGeometry(1.25, 0.05, 24, 128),
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * spin;

    const targetX = pointer.y * tilt;
    const targetY = pointer.x * tilt * 0.6;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.06
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -targetY * 0.4,
      0.06
    );
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 0.6) * 0.05;
  });

  return (
    <group ref={group}>
      <mesh geometry={starGeometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#e8e8e6"
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh geometry={ringGeometry}>
        <meshStandardMaterial
          color="#b0b0ac"
          metalness={1}
          roughness={0.28}
          envMapIntensity={1.3}
        />
      </mesh>
    </group>
  );
}
