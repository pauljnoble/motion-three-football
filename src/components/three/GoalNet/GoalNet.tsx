import * as THREE from "three";

type Props = {
  side: string;
};

const GoalNet = ({ side }: Props) => {
  const isRight = side === "right";
  const parentPosition = isRight ? [45.5, 0, 0] : [-45.5, 0, 0];

  return (
    <group>
      <mesh position={parentPosition as any} castShadow receiveShadow>
        {/* far bar */}
        <mesh
          position={[0, 5, 2]}
          rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0, "XYZ")}
          castShadow
        >
          <cylinderGeometry args={[0.1, 0.1, 4, 256]}></cylinderGeometry>
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* top bar */}
        <mesh position={[0, 0, 4]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 10, 256]}></cylinderGeometry>
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* closest bar */}
        <mesh
          position={[0, -5, 2]}
          castShadow
          rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0, "XYZ")}
        >
          <cylinderGeometry args={[0.1, 0.1, 4, 256]}></cylinderGeometry>
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Net */}
        <mesh
          position={[isRight ? 1.5 : -1.5, 5, 2]}
          rotation={new THREE.Euler(THREE.MathUtils.degToRad(90), 0, 0, "XYZ")}
        >
          <planeGeometry args={[3, 4]}></planeGeometry>
          <meshStandardMaterial color="#ffffff" opacity={0.25} transparent />
        </mesh>

        {/* Net */}
        <mesh
          position={[isRight ? 1.5 : -1.5, -5, 2]}
          rotation={new THREE.Euler(THREE.MathUtils.degToRad(90), 0, 0, "XYZ")}
        >
          <planeGeometry args={[3, 4]}></planeGeometry>
          <meshStandardMaterial color="#ffffff" opacity={0.25} transparent />
        </mesh>

        {/* Net */}
        <mesh
          position={[isRight ? 3 : -3, 0, 2]}
          rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0, "XYZ")}
        >
          <planeGeometry args={[4, 10]}></planeGeometry>
          <meshStandardMaterial color="#ffffff" opacity={0.25} transparent />
        </mesh>

        {/* Net */}
        <mesh position={[isRight ? 1.5 : -1.5, 0, 4]}>
          <planeGeometry args={[3, 10]}></planeGeometry>
          <meshStandardMaterial color="#ffffff" opacity={0.25} transparent />
        </mesh>
      </mesh>
    </group>
  );
};

export default GoalNet;
