import { useState, useRef, useEffect} from 'react';

import { Texture, Mesh, MeshBuilder, Nullable, StandardMaterial } from '@babylonjs/core';
import { useBeforeRender, useScene, useHover } from 'react-babylonjs';
import { RotatingShapesProps } from '../constants'; 

export const RotatingCylinder = (props: RotatingShapesProps) => {
  const cylinderRef = useRef<Nullable<Mesh>>(null);
  const scene = useScene();
  const [hovered, setHovered] = useState(1);
  const rpm = 10; 
  
    useEffect(() => {     
      if (scene !== null) {
        const ourCylinder = MeshBuilder.CreateCylinder("cylinder", {height:props.randomValue, diameter:props.randomValue}, scene);
        ourCylinder.position.x = props.position;
        
        const cylinderMat = new StandardMaterial('cylinder', scene);
        cylinderMat.diffuseTexture = hovered  % 2 === 0 ? new Texture(props.hoverTextureUrl, scene): new Texture(props.textureUrl, scene);
        ourCylinder.material = cylinderMat;

        cylinderRef.current = ourCylinder;
        return () => {
          ourCylinder?.dispose();
          // ws.close();
        }
      }
    });

    useHover(
      () => setTimeout(() => {setHovered(hovered+1);}, 1000),
      () => setTimeout(() => {setHovered(hovered-1);}, 100),
      cylinderRef
      );
   
  
    useBeforeRender((scene: any) => {
      if (cylinderRef.current) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();
        cylinderRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
      }
    })

    return null;
  }