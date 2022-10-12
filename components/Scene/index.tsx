import { PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Camera from "./camera"

export const Scene = ({photoUrls}) => (
  <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 50], zoom: 50 }}>
    <spotLight position={[5, 5, 5]} intensity={2} />
    <PresentationControls
      global
    >
      <group rotation={[0, -Math.PI/2, 0]}>
          <Suspense>
            <Camera photoUrls={photoUrls} />
          </Suspense>
      </group>
    </PresentationControls>
  </Canvas>
)

export default Scene