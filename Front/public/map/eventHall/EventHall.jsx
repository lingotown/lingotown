/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: QuarizonStudio (https://sketchfab.com/QuarizonStudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/venue-stage-for-great-events-d74b3baa5a74430fb3717cfa3d883476
Title: venue stage for great events
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function EventHall(props) {
  const { nodes, materials } = useGLTF('./map/eventHall/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={120}>
          <mesh geometry={nodes.wall_wall1_0.geometry} material={materials.wall1} />
          <mesh geometry={nodes.wall_wall2_0.geometry} material={materials.wall2} />
        </group>
        <group position={[0, 40.763, -322.971]} rotation={[-Math.PI / 2, 0, 0]} scale={[2087.827, 713.238, 41.23]}>
          <mesh geometry={nodes.stage_stage3_0.geometry} material={materials.stage3} />
          <mesh geometry={nodes.stage_stage1_0.geometry} material={materials.stage1} />
          <mesh geometry={nodes.stage_stage2_0.geometry} material={materials.stage2} />
        </group>
        <group position={[0, 78.35, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.backwall_backwall4_0.geometry} material={materials.backwall4} />
          <mesh geometry={nodes.backwall_backwall1_0.geometry} material={materials.backwall1} />
          <mesh geometry={nodes.backwall_backwall3_0.geometry} material={materials.backwall3} />
          <mesh geometry={nodes.backwall_backwall5_0.geometry} material={materials.backwall5} />
          <mesh geometry={nodes.backwall_backwall2_0.geometry} material={materials.backwall2} />
          <mesh geometry={nodes.backwall_backwall6_0.geometry} material={materials.backwall6} />
        </group>
        <group position={[-1716.001, 839.368, -230.078]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 15.726]}>
          <mesh geometry={nodes.light_light1_0.geometry} material={materials.light1} />
          <mesh geometry={nodes.light_light2_0.geometry} material={materials.light2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.dec_dec1_0.geometry} material={materials.dec1} />
          <mesh geometry={nodes.dec_dec2_0.geometry} material={materials.dec2} />
        </group>
        <group position={[23.072, -100.61, 2953.393]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.spot2_spot2a_0.geometry} material={materials.spot2a} />
          <mesh geometry={nodes.spot2_spot2b_0.geometry} material={materials.spot2b} />
        </group>
        <group position={[-139.669, 22.472, 916.236]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.seat_seat_0.geometry} material={materials.seat} />
          <mesh geometry={nodes.seat_seat_0_1.geometry} material={materials.seat} />
          <mesh geometry={nodes.seat_seat_0_2.geometry} material={materials.seat} />
          <mesh geometry={nodes.seat_seat_0_3.geometry} material={materials.seat} />
          <mesh geometry={nodes.seat_seat_0_4.geometry} material={materials.seat} />
        </group>
        <group position={[0, -32.803, -344.664]} rotation={[-Math.PI / 2, 0, 0]} scale={75.125}>
          <mesh geometry={nodes.silver_frame_silver_frame_0.geometry} material={materials.silver_frame} />
          <mesh geometry={nodes.silver_frame_silver_frame_0_1.geometry} material={materials.silver_frame} />
        </group>
        <group position={[0, -32.803, -344.664]} rotation={[-Math.PI / 2, 0, 0]} scale={75.125}>
          <mesh geometry={nodes.spot1_spot1a_0.geometry} material={materials.spot1a} />
          <mesh geometry={nodes.spot1_spot1b_0.geometry} material={materials.spot1b} />
        </group>
        <mesh geometry={nodes.house_house_0.geometry} material={materials.house} position={[0, 535.806, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[3699.588, 2374.425, 536.399]} />
        <mesh geometry={nodes.screen1_screen1_0.geometry} material={materials.screen1} position={[0, 122.369, -1074.066]} rotation={[-Math.PI / 2, 0, 0]} scale={[1278.599, 25.094, 41.23]} />
        <mesh geometry={nodes.screen2_screen2_0.geometry} material={materials.screen2} position={[2127.661, 269.9, -498.132]} rotation={[-Math.PI / 2, 0, 0]} scale={[52.544, 52.544, 39.788]} />
        <mesh geometry={nodes.plant_plant_0.geometry} material={materials.plant} position={[963.995, 75.672, -988.265]} rotation={[Math.PI, 0.626, -Math.PI]} scale={[60.897, 62.308, 59.578]} />
      </group>
    </group>
  )
}