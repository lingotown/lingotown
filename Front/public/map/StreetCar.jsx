/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: cubemelongames (https://sketchfab.com/cubemelongames)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/little-game-town-6c223e9974944a8988f39087121df79e
Title: Little game town
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StreetCar(props) {
  const { nodes, materials } = useGLTF(import.meta.env.VITE_S3_URL + 'Map/StreetCar/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <group position={[0.748, 0, -0.414]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[8858.268, -1181.106, 0]}>
            <mesh geometry={nodes.Town001_VCB_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_1.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_2.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_3.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_4.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_5.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_6.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_7.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_8.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_9.geometry} material={materials.material} />
            <mesh geometry={nodes.Town001_VCB_0_10.geometry} material={materials.material} />
          </group>
        </group>
      </group>
    </group>
  )
}