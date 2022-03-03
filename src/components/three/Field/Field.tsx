import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import img from "src/assets/grass-overlay.png";
import imgLines from "src/assets/lines.png";
import imgOverlay from "src/assets/grass-overlay.png";

const Field = () => {
  const texture = useLoader(THREE.TextureLoader, img);
  const textureLines = useLoader(THREE.TextureLoader, imgLines);
  const textureOverlay = useLoader(THREE.TextureLoader, imgOverlay);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 2);

  textureOverlay.wrapS = THREE.RepeatWrapping;
  textureOverlay.wrapT = THREE.RepeatWrapping;
  textureOverlay.repeat.set(10.5, 20);

  return (
    <group>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial map={textureOverlay} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial map={textureLines} transparent opacity={0.8} />
      </mesh>

      {/* Grass box */}
      <mesh position={[0, 0, -2]} castShadow receiveShadow>
        <boxGeometry args={[100, 50, 2]} />
        {/* <meshStandardMaterial map={texture} /> */}
        {/* <meshStandardMaterial color="#008478" /> */}
        <meshStandardMaterial color="#605e5d" attachArray="material" />
        <meshStandardMaterial color="#605e5d" attachArray="material" />
        <meshStandardMaterial color="#605e5d" attachArray="material" />
        <meshStandardMaterial color="#605e5d" attachArray="material" />
        <meshStandardMaterial
          color="#008478"
          attachArray="material"
          metalness={0}
          roughness={0.6}
        />
        <meshStandardMaterial color="#605e5d" attachArray="material" />
      </mesh>
      {/* material underneath */}
      <mesh position={[0, 0, -10]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#30344b" metalness={0.1} />
      </mesh>
    </group>
  );
};

export default Field;
