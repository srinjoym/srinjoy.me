import React, { useRef, useState } from 'react';
import { Scene, Engine, useClick, useHover, useBeforeRender } from 'react-babylonjs';
import { Vector3, Color3, Mesh, Nullable, Color4 } from '@babylonjs/core';

interface BoxProps {
  name: string
  position: Vector3
  color: Color3
  hoveredColor: Color3
}

const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const SpinningBox: React.FC<BoxProps> = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements
  const boxRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  useClick(
    () => setClicked(clicked => !clicked),
    boxRef
  );

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  });

  return (<box name={props.name} ref={boxRef} size={2} position={props.position} scaling={clicked ? BiggerScale : DefaultScale}>
    <standardMaterial name={`${props.name}-mat`} diffuseColor={hovered ? props.hoveredColor : props.color} specularColor={Color3.Black()} />
  </box>);
}

const App: React.FC = () => {
  let sphereRef = useRef<Nullable<Mesh>>();

  const onButtonClicked = () => {
    if (sphereRef.current) {
      sphereRef.current.physicsImpostor!.applyImpulse(
        Vector3.Up().scale(10),
        sphereRef.current.getAbsolutePosition()
      );
    }
  };

  return (
    <Engine antialias={true} canvasId="babylon-canvas">
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <arcRotateCamera name="arc" target={ new Vector3(0, 1, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={4} minZ={0.001} wheelPrecision={50} 
          lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2}
        />
        <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
        <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position = {new Vector3(-40, 30, -40)}
          intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
          <shadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32}
            shadowCasters={["sphere1", "dialog"]} forceBackFacesOnly={true} depthScale={100}
          />
        </directionalLight>

        <SpinningBox name='center' position={new Vector3(0, 0, 0)}
          color={Color3.FromHexString('#EEB5EB')} hoveredColor={Color3.FromHexString('#C26DBC')}
        />

        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
      </Scene>
    </Engine>
  );
}

export default App