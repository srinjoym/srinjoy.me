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
  modelFileName:string
  position:Vector3
  scaling?:Vector3
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
  let anim = new Animation(Math.random().toString(36).substring(7), animationProperty, 20, 0)
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
    <Model name="Model" rootUrl={`/models/`} sceneFilename={props.modelFileName} onModelLoaded={onModelLoaded} {...props}/>
  )
}


const App: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Engine antialias={true} canvasId="babylon-canvas" {...props} height={50}>
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <arcRotateCamera name="arc" target={ new Vector3(0, 0, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={0.1} minZ={0.001} wheelPrecision={50} 
          lowerRadiusLimit={9} upperRadiusLimit={9} upperBetaLimit={Math.PI / 2}
        />

        <pointLight name="point" intensity={1000} position={new Vector3(4, 6, -1)} />
        {/* <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.4} /> */}
        <glowLayer name="glow" options={{mainTextureSamples: 2}} isEnabled={true} intensity={0}/>

        <AssetManagerContextProvider>
          <Suspense fallback={<box name="fallback" />}>
            <RemoteModel name="cone" animationProperty="position.y" modelFileName="cone.glb" position={new Vector3(0, 0, 0)} />
          </Suspense>

          <Suspense fallback={<box name="fallback" />}>
            <RemoteModel name="cube" animationProperty="position.y" modelFileName="cube.glb" position={new Vector3(0, 0, 0)} />
          </Suspense>

          <Suspense fallback={<box name="fallback" />}>
            <RemoteModel name="ico" animationProperty="position.y" modelFileName="ico.glb" position={new Vector3(0, 0, 0)} />
          </Suspense>
        </AssetManagerContextProvider>
      </Scene>
    </Engine>
  );
}

export default App