import { Backdrop, ContactShadows, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Camera from "./camera"

export const Scene = ({photoUrls}) => {
  const ref = useRef()

  return (
  <Canvas dpr={[1, 2]} camera={{ fov: 35 }} shadows>
      <Stage controls={ref} preset="rembrandt" intensity={0.3}>
        {/* <Suspense> */}
          <Camera photoUrls={photoUrls} />
        {/* </Suspense> */}
      </Stage>
    <OrbitControls ref={ref} enableZoom={false} />
  </Canvas>
  )
}

export default Scene