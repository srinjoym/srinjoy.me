/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// @ts-nocheck

import { a, useSpring } from "@react-spring/three";
import { Image, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import ReactGA from 'react-ga';
import { useColorMode } from '@chakra-ui/react'

interface CameraProps {
  photoUrls: string[]
}

const Camera:React.FC<CameraProps> = ({photoUrls, ...props}) => {
  const { nodes, materials } = useGLTF("/LowPolyCamera_Light.glb");
  const [photoIdx, setPhotoIdx] = useState(0)
  const ref = useRef<any>()
  const [hovered, hover] = useState(false)
  const { rotY } = useSpring({ rotY: hovered ? 1.3*Math.PI/2:1.4*Math.PI/2 })

  const trackEvent = () => {
    ReactGA.event({
      category: 'Hero',
      action: 'CameraClick',
    })
  }

  useEffect(() => {
    const switchPicture = () => {
      setPhotoIdx(p => (p+1)%photoUrls.length)
    }
    const interval = setInterval(switchPicture, 5000)

    if (ref.current) {
      ref.current.rotation.x = 0
      ref.current.rotation.y = 0
      ref.current.rotation.z = 0
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.y = rotY.get() + Math.sin(t / 4) / 8
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    }
  })

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <a.group dispose={null} ref={ref} onClick={trackEvent} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={colorMode === "dark" ? materials.DarkBody:materials.LightBody}
      />
      <group position={[0.02, 0.09, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={colorMode === "dark" ? materials.DarkBody:materials.LightBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials["Material.001"]}
        position={[-0.04, 0, -0.02]}
        scale={[0.01, 0.75, 1.11]}
      >
        <Image url={photoUrls[photoIdx]} scale={[0.15,0.15]} position={[-0.1, 0, 0]} rotation={[0, -Math.PI/2, 0]}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.DarkBody}
        position={[0, 0.08, 0.08]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Controls}
        position={[-0.04, -0.02, 0.09]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.73, 0.26, 0.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Controls}
        position={[-0.04, -0.05, 0.08]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Metal}
        position={[-0.04, -0.05, 0.1]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.Controls}
        position={[-0.04, 0.02, 0.08]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={1.2}
      />
      <group position={[0.08, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[0.04, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.02, 0.02, 1.02]}
      />
    </a.group>
  );
}

export default Camera

useGLTF.preload("/LowPolyCamera_Light.glb");
