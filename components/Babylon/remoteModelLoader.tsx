import React, { useRef, useState, Suspense, useContext, useMemo } from 'react';
import { Scene, Engine, useHover, useBeforeRender, Model, AssetManagerContext, TaskType, useAssetManager, MeshTask, AssetManagerContextProvider, ILoadedModel } from 'react-babylonjs';
import { Vector3, Color3, Mesh, Nullable, Color4, AbstractMesh, Animation } from '@babylonjs/core';
import { ActionManager, PlayAnimationAction, SetValueAction } from '@babylonjs/core/Actions';
import '@babylonjs/loaders';

const RemoteModel: React.FC = (props) => {
  const onModelLoaded  = (model:ILoadedModel) => {
    let mesh = model.meshes[1]
    mesh.actionManager = new ActionManager(mesh._scene)

    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOverTrigger,
        mesh.material,
        'wireframe',
        true
      )
    )
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOutTrigger,
        mesh.material,
        'wireframe',
        false
      )
    )
  }

  return (
    <Model name="Model" rootUrl={`/models/`} sceneFilename={`RoundedCube.gltf`} onModelLoaded={onModelLoaded} />
  )
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
        <arcRotateCamera name="arc" target={ new Vector3(0, 0, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={0.1} minZ={0.001} wheelPrecision={50} 
          lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2}
        />
        <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
        <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position = {new Vector3(-40, 30, -40)}
          intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
          <shadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32}
            shadowCasters={["sphere1", "dialog"]} forceBackFacesOnly={true} depthScale={100}
          />
        </directionalLight>

        <AssetManagerContextProvider>
          <Suspense fallback={<box name="fallback" />}>
            <RemoteModel />
          </Suspense>
        </AssetManagerContextProvider>

        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
      </Scene>
    </Engine>
  );
}

export default App