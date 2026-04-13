import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const primaryColor = new THREE.Color("hsl(170, 80%, 50%)");
    const accentColor = new THREE.Color("hsl(260, 70%, 60%)");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;

      const mix = Math.random();
      const c = primaryColor.clone().lerp(accentColor, mix);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
    return { positions, velocities, colors };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i3] + Math.sin(t * 0.3 + i * 0.01) * 0.002;
      pos[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.2 + i * 0.01) * 0.002;
      pos[i3 + 2] += velocities[i3 + 2];

      // Wrap around
      if (pos[i3] > 10) pos[i3] = -10;
      if (pos[i3] < -10) pos[i3] = 10;
      if (pos[i3 + 1] > 10) pos[i3 + 1] = -10;
      if (pos[i3 + 1] < -10) pos[i3 + 1] = 10;
      if (pos[i3 + 2] > 5) pos[i3 + 2] = -5;
      if (pos[i3 + 2] < -5) pos[i3 + 2] = 5;
    }
    geo.attributes.position.needsUpdate = true;

    // Slow global rotation for depth feel
    meshRef.current.rotation.y = t * 0.02;
    meshRef.current.rotation.x = Math.sin(t * 0.015) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const ParticleBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Particles />
    </Canvas>
  </div>
);

export default ParticleBackground;
