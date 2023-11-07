import { Canvas } from "@react-three/fiber";
import { SYMapUtilComp } from "../component/talk/SYMapUtilComp";
import * as THREE from "three";

interface playerSelectPage {
  theme: JSX.Element;
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  const worldbackgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + 'Introduce/bgggg.png');

  return(
    <>
      <SYMapUtilComp />

      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* <Canvas> */}
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
        {/* <primitive object={worldbackgroundTexture} /> */}
      </Canvas>
    </>
  )
}
