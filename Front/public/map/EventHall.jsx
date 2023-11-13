/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: QuarizonStudio (https://sketchfab.com/QuarizonStudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/venue-stage-for-great-events-d74b3baa5a74430fb3717cfa3d883476
Title: venue stage for great events
*/

import React, { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { MeshStandardMaterial, TextureLoader, VideoTexture } from "three";
import { userAtom } from "../../src/atom/UserAtom";
import { lockOffCharacter } from "../../src/api/Character";
import { useRecoilState } from "recoil";
import { useCustomAlert } from "../../src/component/util/ModalUtil";

export function EventHall(props) {
  /* Map */
  const { nodes, materials } = useGLTF(
    import.meta.env.VITE_S3_URL + "Map/EventHall/scene.gltf"
  );

  
  const beamProjector = useGLTF(
    import.meta.env.VITE_S3_URL + "Objects/BeamProjector/scene.gltf"
  );
  const highTable = useGLTF(
    import.meta.env.VITE_S3_URL + "Objects/HighTable/scene.gltf"
  );

  const [user, setUser] = useRecoilState(userAtom);
  const customAlert = useCustomAlert();

  /* 캐릭터 잠금 해제 */
  const characterLockOff = async(id) => {
    const quizId = id;

    await lockOffCharacter(quizId, ({data}) => {
      console.log(data.message);
    },
    error => {
      console.log(error);
    })
  }

  const { camera } = useThree();

  useEffect(
    () => {
      if (props.onLoaded) {
        props.onLoaded();
      }
    },
    [props, props.onLoaded]
  );

  const video = useRef(document.createElement("video"));

  // Video 관련 상태 추가
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Video 로드 함수
  const loadVideo = () => {
    if (!videoLoaded) {
      video.current.src =
      import.meta.env.VITE_S3_URL + "UCC/%EC%9E%84%EC%8B%9C.mp4";
      video.current.crossOrigin = "anonymous";
      video.current.loop = true;
      video.current.muted = false;
      // ... 나머지 비디오 설정
      setVideoLoaded(true);
    }
  };

  // 비디오와 관련된 자원 해제 함수
  const disposeVideoResources = () => {
    if (videoLoaded) {
      if (!video.current.paused) {
        video.current.pause();
      }
      video.current.src = "";
      video.current.load();
      customVideo.dispose();
      video.current.remove();
      setVideoLoaded(false);
    }
  };

  const customVideo = new VideoTexture(video.current);

  const handleKeyDown = event => {
    switch (event.code) {
      case "KeyS":
        // 빔프로젝트와 카메라 사이의 거리 계산 로직...
        const beamProjectorPosition = new THREE.Vector3().setFromMatrixPosition(
          beamProjector.scene.matrixWorld
        );
        const distance = beamProjectorPosition.distanceTo(camera.position); // Replace `camera.position` with your actual camera or player position vector

        if (distance <= 10) {
          loadVideo(); // 'S'를 누를 때 비디오 로드

          if (video.current.paused) {
            video.current.play();
          } else {
            video.current.pause();
          }
        }

        if(user.lockList[9].islocked) {
          setUser({
            ...user,
            lockList: user.lockList.map(
              (item, index) => (index === 9 ? { ...item, islocked: false } : item)
            )
          });
    
          characterLockOff(10);
          customAlert("Notice", "영상을 시청해주셔서 감사합니다! 10번 캐릭터가 잠금 해제 됩니다!");
        }

        break;
      case "KeyD":
        disposeVideoResources(); // 'D'을 누를 때 비디오 자원 해제
        break;
      case "KeyA":
        disposeVideoResources();
        break;
      default:
        // 다른 키 처리
        break;
    }
  };

  useEffect(
    () => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        disposeVideoResources(); // 컴포넌트 언마운트 시 자원 해제
      };
    },
    // videoLoaded 상태를 의존성 배열에 추가
    [camera.position, videoLoaded]
  );

  useFrame(() => {
    if (customVideo) {
      customVideo.needsUpdate = true;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={120}>
          <mesh
            geometry={nodes.wall_wall1_0.geometry}
            material={materials.wall1}
          />
          <mesh
            geometry={nodes.wall_wall2_0.geometry}
            material={materials.wall2}
          />
        </group>
        <group
          position={[0, 40.763, -322.971]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2087.827, 713.238, 41.23]}
        >
          <mesh
            geometry={nodes.stage_stage3_0.geometry}
            material={materials.stage3}
          />
          <mesh
            geometry={nodes.stage_stage1_0.geometry}
            material={materials.stage1}
          />
          <mesh
            geometry={nodes.stage_stage2_0.geometry}
            material={materials.stage2}
          />
        </group>
        <group
          position={[0, 78.35, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.backwall_backwall4_0.geometry}
            material={materials.backwall4}
          />
          <mesh
            geometry={nodes.backwall_backwall1_0.geometry}
            material={materials.backwall1}
          />
          <mesh
            geometry={nodes.backwall_backwall3_0.geometry}
            material={materials.backwall3}
          />
          <mesh
            geometry={nodes.backwall_backwall5_0.geometry}
            material={materials.backwall5}
          />
          <mesh
            geometry={nodes.backwall_backwall2_0.geometry}
            material={materials.backwall2}
          />
          <mesh
            geometry={nodes.backwall_backwall6_0.geometry}
            material={materials.backwall6}
          />
        </group>
        <group
          position={[-1716.001, 839.368, -230.078]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 15.726]}
        >
          <mesh
            geometry={nodes.light_light1_0.geometry}
            material={materials.light1}
          />
          <mesh
            geometry={nodes.light_light2_0.geometry}
            material={materials.light2}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.dec_dec1_0.geometry}
            material={materials.dec1}
          />
          <mesh
            geometry={nodes.dec_dec2_0.geometry}
            material={materials.dec2}
          />
        </group>
        <group
          position={[23.072, -100.61, 2953.393]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            geometry={nodes.spot2_spot2a_0.geometry}
            material={materials.spot2a}
          />
          <mesh
            geometry={nodes.spot2_spot2b_0.geometry}
            material={materials.spot2b}
          />
        </group>
        <group
          position={[-139.669, 22.472, 916.236]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.seat_seat_0.geometry}
            material={materials.seat}
          />
          <mesh
            geometry={nodes.seat_seat_0_1.geometry}
            material={materials.seat}
          />
          <mesh
            geometry={nodes.seat_seat_0_2.geometry}
            material={materials.seat}
          />
          <mesh
            geometry={nodes.seat_seat_0_3.geometry}
            material={materials.seat}
          />
          <mesh
            geometry={nodes.seat_seat_0_4.geometry}
            material={materials.seat}
          />
        </group>
        <group
          position={[0, -32.803, -344.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={75.125}
        >
          <mesh
            geometry={nodes.silver_frame_silver_frame_0.geometry}
            material={materials.silver_frame}
          />
          <mesh
            geometry={nodes.silver_frame_silver_frame_0_1.geometry}
            material={materials.silver_frame}
          />
        </group>
        <group
          position={[0, -32.803, -344.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={75.125}
        >
          <mesh
            geometry={nodes.spot1_spot1a_0.geometry}
            material={materials.spot1a}
          />
          <mesh
            geometry={nodes.spot1_spot1b_0.geometry}
            material={materials.spot1b}
          />
        </group>
        <mesh
          geometry={nodes.house_house_0.geometry}
          material={materials.house}
          position={[0, 535.806, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3699.588, 2374.425, 536.399]}
        />
        {/* 메인 스크린 */}
        <mesh
          geometry={nodes.screen1_screen1_0.geometry}
          material={materials.screen1}
          position={[0, 122.369, -1073.066]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2478.599, 25.094, 41.23]}
        >
          <meshStandardMaterial map={customVideo} />
        </mesh>
        {/* 우측 사이드 스크린 */}
        <mesh
          geometry={nodes.screen2_screen2_0.geometry}
          material={materials.screen2}
          position={[2127.661, 269.9, -498.132]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[52.544, 52.544, 39.788]}
        >
          <meshStandardMaterial map={customVideo} />
        </mesh>
        <mesh
          geometry={nodes.plant_plant_0.geometry}
          material={materials.plant}
          position={[963.995, 75.672, -988.265]}
          rotation={[Math.PI, 0.626, -Math.PI]}
          scale={[60.897, 62.308, 59.578]}
        />
      </group>

      <primitive
        scale={1.5}
        position={[0.25, 0, 22]}
        rotation={[0, 0, 0]}
        object={highTable.scene}
      />
      <primitive
        scale={1.5}
        position={[0.25, 1.9, 22]}
        rotation={[THREE.MathUtils.degToRad(180), 0, 0]}
        object={beamProjector.scene}
      />
    </group>
  );
}
