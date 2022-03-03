//@ts-ignore
import * as THREE from "three";
import img from "src/assets/player.jpg";
import { useLoader } from "@react-three/fiber";

type Props = {
  position: [number, number, number];
};

const HEIGHT = 7;

const Player = ({ position }: Props) => {
  const texture = useLoader(THREE.TextureLoader, img);

  return (
    <mesh
      position={position}
      castShadow
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(-45), 0, 0, "XYZ")}
    >
      <mesh
        position={[0, -0.2, HEIGHT]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0, "XYZ")}
      >
        <cylinderGeometry args={[HEIGHT * 0.9, HEIGHT * 0.9, 0.01, 128]} />
        <meshBasicMaterial color="#999999" />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh position={[0, 0, HEIGHT]} castShadow>
        <cylinderGeometry args={[HEIGHT, HEIGHT, 0.1, 128]} />
        <meshStandardMaterial color="#2961C8" attachArray="material" />
        <meshStandardMaterial color="#2961C8" attachArray="material" />
        <meshStandardMaterial color="#2961C8" attachArray="material" />
      </mesh>
    </mesh>
  );
};

export default Player;
