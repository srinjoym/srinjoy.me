import React, { useRef, useState, useMemo, MutableRefObject, ReactElement, Suspense } from 'react';
import { Scene, Engine, useHover, useScene, AssetManagerContextProvider, ILoadedModel, Model } from 'react-babylonjs';
import { Vector3, Color3, Mesh, Nullable, Color4, Animation } from '@babylonjs/core';
import { ActionManager, ExecuteCodeAction, SetValueAction } from '@babylonjs/core/Actions';
import '@babylonjs/loaders';
import { useColorMode } from "@chakra-ui/react"

interface BoxProps {
  name: string
  mesh: (ref: MutableRefObject<Mesh>) => ReactElement
  animationProperty:string
}

interface RemoteModelProps {
  name: string
  animationProperty:string
}

const getProperty = (target, propertyPath) => {
  let propList = propertyPath.split('.')
  var currentObj = target
  propList.forEach(prop => {
    currentObj = currentObj[prop]
  })
  return currentObj
}

const getAnimation = ((rotate: Boolean, mesh: Mesh, animationProperty: string) => {
  let keys = [{frame: 0, value: getProperty(mesh, animationProperty)}, {frame: 8, value: rotate ? Math.PI/6+0.08:-0.08}, {frame: 10, value: rotate ? Math.PI/6:0}]
  let anim = new Animation("test", animationProperty, 20, 0)
  anim.setKeys(keys)
  return [anim]
})

const RemoteModel: React.FC<RemoteModelProps> = (props) => {
  const scene = useScene();

  const onModelLoaded  = (model:ILoadedModel) => {
    let mesh = model.meshes[1]
    mesh.actionManager = new ActionManager(mesh._scene)

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(
        ActionManager.OnPointerOverTrigger,
        () => {
          scene.stopAnimation(mesh)
          scene.beginDirectAnimation(mesh, getAnimation(true, mesh as Mesh, props.animationProperty), 0, 10, false)
        }
      )
    )

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(
        ActionManager.OnPointerOutTrigger,
        () => {
          scene.stopAnimation(mesh)
          scene.beginDirectAnimation(mesh, getAnimation(false, mesh as Mesh, props.animationProperty), 0, 10, false)
        }
      )
    )
  }

  return (
    <Model name="Model" rootUrl={`/models/`} sceneFilename={`RoundedCube.gltf`} onModelLoaded={onModelLoaded} />
  )
}

const Hoverable: React.FC<BoxProps> = (props) => {
  const boxRef = useRef<Nullable<Mesh>>();
  const scene = useScene();

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  )

  useMemo(() => {
    if (boxRef.current)
    {
      boxRef.current.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPointerOverTrigger,
          () => {
            scene.stopAnimation(boxRef.current)
            scene.beginDirectAnimation(boxRef.current, getAnimation(true, boxRef.current as Mesh, props.animationProperty), 0, 10, false)
          }
        )
      )
      boxRef.current.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPointerOutTrigger,
          () => {
            scene.stopAnimation(boxRef.current)
            scene.beginDirectAnimation(boxRef.current, getAnimation(false, boxRef.current as Mesh, props.animationProperty), 0, 10, false)
          }
        )
      )
    }
  }, [boxRef.current])

  return (
    <transformNode name={props.name}>
      {props.mesh(boxRef)}
    </transformNode>
  )
}

const App: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Engine antialias={true} canvasId="babylon-canvas" {...props}>
      <Scene clearColor={colorMode == "dark" ? new Color4(0.101, 0.125, 0.172, 1) : Color3.White().toColor4()}>
        <arcRotateCamera name="arc" target={ new Vector3(0, 0, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={0.1} minZ={0.001} wheelPrecision={50} 
          lowerRadiusLimit={10} upperRadiusLimit={10} upperBetaLimit={Math.PI / 2}
        />
        <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.4} />
        <glowLayer name="glow" options={{mainTextureSamples: 2}} isEnabled={true} intensity={1}/>

        <Hoverable
          name = 'Left'
          animationProperty = 'rotation.y'
          mesh = { (ref) =>
            <box name="Left" size={1} position={new Vector3(-4, 0.5, 0)} ref={ref}>
              <standardMaterial name={`Left-mat`} diffuseColor={Color3.Green()} emissiveColor={Color3.Green()} />
            </box>
          }
        />

        <Hoverable
          name='Right'
          animationProperty = 'rotation.z'
          mesh = { (ref) =>
            <cylinder name="Right" position={new Vector3(1, 1, 1)} ref={ref}>
              <standardMaterial name={`Right-mat`} diffuseColor={Color3.Blue()} emissiveColor={Color3.Blue()} />
            </cylinder>
          }
        />

        <Hoverable
          name='Sphere'
          animationProperty = 'position.y'
          mesh = { (ref) =>
            <sphere name="Sphere" position={new Vector3(4, -2, 0)} ref={ref} scaling={new Vector3(1.5,1.5,1.5)}>
              <standardMaterial name={`Right-mat`} diffuseColor={Color3.Purple()} emissiveColor={Color3.Purple()} />
            </sphere>
          }
        />

        <AssetManagerContextProvider>
          <Suspense fallback={<box name="fallback" />}>
            <RemoteModel name="remote model" animationProperty="position.y"/>
          </Suspense>
        </AssetManagerContextProvider>

        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
      </Scene>
    </Engine>
  );
}

export default App