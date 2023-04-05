import {Suspense} from 'react';

import { Engine, Scene } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core';
import { RotatingShapes } from './Containers/RotatingShapes';
import ErrorBoundary from './api/classBoundaryComponent';

export default function App () {

  return  (
  <div>
    <ErrorBoundary>
      <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
        <Scene>
          <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={Math.PI / 2}
            beta={Math.PI / 4}
            radius={8}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

        <Suspense>
          <RotatingShapes />
        </Suspense>
        </Scene>
      </Engine>
    </ErrorBoundary>
  </div>
)}