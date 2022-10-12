/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Image } from "@chakra-ui/react"
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three"

const Model = ({photoUrls, ...props}) => {
  const { nodes, materials } = useGLTF("/camera_xyz_blend.glb");
  const [photoIdx, setPhotoIdx] = useState(0)
  const ref = useRef<any>()
  const [hovered, hover] = useState(false)
  const { scale } = useSpring({ scale: hovered ? [1.1,1.1,1.1]:[1,1,1] })

  useEffect(() => {
    const switchPicture = () => {
      setPhotoIdx(p => (p+1)%photoUrls.length)
    }
    const interval = setInterval(switchPicture, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.x = Math.cos(t / 4) / 8
      ref.current.rotation.y = Math.PI/6 + Math.sin(t / 4) / 8
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
      // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })

  return (
    // @ts-ignore
    <a.group {...props} dispose={null} ref={ref} onPointerOver={(_) => hover(true)}
    onPointerOut={(_) => hover(false)} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008.geometry}
        material={materials.Skin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_1.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_2.geometry}
        material={materials.MetalShadow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_3.geometry}
        material={materials.Display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_4.geometry}
        material={materials.Display1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_5.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_6.geometry}
        material={materials.Wheel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_7.geometry}
        material={materials.Metal3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_8.geometry}
        material={materials["2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_9.geometry}
        material={materials.Bolt1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_10.geometry}
        material={materials.Metal6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_11.geometry}
        material={materials.Wheel2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_12.geometry}
        material={materials.Metal4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_13.geometry}
        material={materials["3"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_14.geometry}
        material={materials.Metal5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_15.geometry}
        material={materials.Bolt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_16.geometry}
        material={materials.Red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wBox008_17.geometry}
        material={materials["1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Display1}
        position={[1.2, -0.28, 0.42]}
      >
        <Html rotation={[0, Math.PI/2, 0]} position={[0.1, 0, 0]} transform occlude>
            <div style={{"backgroundColor": "blue", "pointerEvents": "none"}}>
                <Image src={photoUrls[photoIdx]} w="108px" h="52px"/>
            </div>
        </Html>
      </mesh>
    </a.group>
  );
}

export default Model

useGLTF.preload("/camera_xyz_blend.glb");
