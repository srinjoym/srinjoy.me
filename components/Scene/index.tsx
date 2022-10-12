import { PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Camera from "./camera"

export const Scene = ({photoUrls}) => (
  <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 50], zoom: 50 }}>
    <spotLight position={[5, 5, 5]} intensity={2} />
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <group rotation={[0, -Math.PI/2, 0]}>
          <Camera scale={[1, 1, 1]} photoUrls={photoUrls} />
      </group>
    </PresentationControls>
  </Canvas>
)

export default Scene