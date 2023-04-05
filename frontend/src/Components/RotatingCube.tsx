import { useState, useRef, useEffect} from 'react';

import { Texture, Mesh, MeshBuilder, Nullable, StandardMaterial } from '@babylonjs/core';
import { useBeforeRender, useScene, useHover } from 'react-babylonjs';
import { RotatingShapesProps } from '../constants'; 

export const RotatingCube  = (props: RotatingShapesProps) => {
    const cubeRef = useRef<Nullable<Mesh>>(null);
    const scene = useScene();
    const [hovered, setHovered] = useState(1);
    const rpm = 10;
    
    useEffect(() => {
    if (scene !== null) {
        const ourCube = MeshBuilder.CreateBox("cube", {size:props.randomValue}, scene);
        ourCube.position.x = props.position;

        const cubeMat = new StandardMaterial('cube', scene);
        cubeMat.diffuseTexture = new Texture(hovered % 2 === 0 ? props.hoverTextureUrl: props.textureUrl, scene);
        ourCube.material = cubeMat;

        cubeRef.current = ourCube;
        return () => {
          ourCube?.dispose();
        }
      }
    });

    useHover(
      () => setTimeout(() => {setHovered(hovered+1);}, 1000),
      () => setTimeout(() => {setHovered(hovered-1);}, 100),
      cubeRef
    );

    useBeforeRender((scene: any) => {
      if (cubeRef.current) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();
        cubeRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
      }
    })

    return null;
  }