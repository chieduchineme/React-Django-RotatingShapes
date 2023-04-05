import { Texture, Mesh, MeshBuilder, Nullable, StandardMaterial } from '@babylonjs/core';
import { useBeforeRender, useScene, useHover } from 'react-babylonjs';
import { useState, useRef, useEffect} from 'react';
import { RotatingShapesProps } from '../constants'; 

export const RotatingSphere  = (props: RotatingShapesProps) => {
    const sphereRef = useRef<Nullable<Mesh>>(null);
    const scene = useScene();
    const [hovered, setHovered] = useState(1);
    const rpm = 10;
    
    useEffect(() => {
      if (scene !== null) {
        const ourSphere = MeshBuilder.CreateSphere("sphere", {diameter:props.randomValue});
        ourSphere.position.x = props.position;

        const sphereMat = new StandardMaterial('sphere', scene);
        sphereMat.diffuseTexture = new Texture(hovered  % 2 === 0 ? props.hoverTextureUrl: props.textureUrl, scene);

        ourSphere.material = sphereMat;
        sphereRef.current = ourSphere;
        return () => {
          ourSphere?.dispose();
        //  if (ws.readyState === 1) { 
            // ws.close();
        // }
        }
      }
    });

    useHover(
      () => setTimeout(() => {setHovered(hovered+1);}, 1000),
      () => setTimeout(() => {setHovered(hovered-1);}, 100),
      sphereRef
    );

    useBeforeRender((scene: any) => {
      if (sphereRef.current) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();     
        sphereRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
      }
    })

    return null;
  }