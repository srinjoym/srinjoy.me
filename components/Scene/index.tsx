import { useColorMode } from '@chakra-ui/react'
import { Backdrop, ContactShadows, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Camera from "./camera"

export const Scene = ({photoUrls}) => {
  const ref = useRef()
  const {colorMode} = useColorMode()

  return (
  <Canvas dpr={[1, 2]} camera={{ fov: 50, zoom: 20 }} shadows>
    <ambientLight intensity={colorMode === "dark" ? 2:0.5} />
    <spotLight penumbra={1} intensity={colorMode === "dark" ? 6:1} position={[0.2, 0.4, 0.2]} />
    <pointLight intensity={colorMode === "dark"? 4:1} position={[-2, -0.5, -2]} />
    <Suspense>
      <Camera photoUrls={photoUrls} />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} ref={ref} />
  </Canvas>
  )
}

export default Scene