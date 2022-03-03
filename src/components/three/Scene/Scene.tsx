import * as THREE from "three";
import { Stats } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
//@ts-ignore
import { LayoutCamera } from "framer-motion/three";
import { Suspense, useEffect, useRef } from "react";
import Player from "src/components/three/Player";
import Field from "src/components/three/Field";
import GoalNet from "src/components/three/GoalNet";

const dummy = new THREE.Vector3();

const Scene = ({ state }: any) => {
  const cameraRef = useRef<any>(null);
  const { zoom } = state;

  const { gl } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio || 2);
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
  }, [gl]);

  useFrame((three) => {
    const step = 0.1;
    three.camera.position.lerp(
      dummy.set(zoom ? 25 : 0, zoom ? -40 : -60, 80),
      step
    );

    three.camera.lookAt(
      new THREE.Vector3(
        three.camera.position.x,
        three.camera.position.y + 60,
        0
      )
    );
    three.camera.updateProjectionMatrix();
  });

  return (
    <Suspense fallback={null}>
      <Stats />
      <LayoutCamera ref={cameraRef} />
      <ambientLight intensity={0.6} />

      <pointLight
        position={[-30, -40, 80]}
        color="#ffffff"
        intensity={0.2}
        distance={200}
        castShadow
      ></pointLight>

      <pointLight
        position={[30, -40, 80]}
        color="#ffffff"
        intensity={0.2}
        distance={200}
        castShadow
      ></pointLight>

      <GoalNet side="left" />
      <GoalNet side="right" />

      {/* <gridHelper args={[100, 100]} /> */}
      <Player position={[0, 0, 0]} />
      <Player position={[-25, 15, 0]} />
      <Player position={[25, 15, 0]} />

      <Field />
    </Suspense>
  );
};

export default Scene;
