import React, {useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'
import { useBox } from '@react-three/cannon'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  // const mesh = useRef()
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
