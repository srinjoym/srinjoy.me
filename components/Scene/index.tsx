import { Backdrop, ContactShadows, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Camera from "./camera"

export const Scene = ({photoUrls}) => {
  const ref = useRef()

  return (
  <Canvas dpr={[1, 2]} camera={{ fov: 50, zoom: 20 }} shadows>
    <ambientLight intensity={1} />
    <spotLight intensity={2} position={[0.2, 0.4, 0.2]} />
    <pointLight intensity={1} position={[-0.4, -0.1, -0.4]} />
    <Suspense>
      <Camera photoUrls={photoUrls} />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} ref={ref} />
  </Canvas>
  )
}

export default Scene