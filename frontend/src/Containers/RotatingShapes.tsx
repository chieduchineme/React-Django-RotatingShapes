import { useState, useEffect} from 'react';

import { RotatingCylinder } from '../Components/RotatingCylinder';
import { RotatingCube } from '../Components/RotatingCube';
import { RotatingSphere } from '../Components/RotatingSphere';
import { ws, textureUrlArray } from '../constants';

const t = textureUrlArray; 

export function RotatingShapes() {
    const [randomValue, setRandomValue] = useState(2);

    useEffect(() => {
        ws.onmessage = (message:any) => {
          const data = JSON.parse(message.data); // parse incoming data
          const randomValues = data.dimensionValue;
          setRandomValue(randomValues); // update state variable with new data
        };
    })
    return (
        <>
            <RotatingCylinder  
                position={3}    textureUrl={t[1]}   hoverTextureUrl={t[4]}  randomValue={randomValue} 
            />
            <RotatingSphere    
                position={0.3}  textureUrl={t[2]}   hoverTextureUrl={t[5]}  randomValue={randomValue}  
            />
            <RotatingCube      
                position={-3}   textureUrl={t[0]}   hoverTextureUrl={t[3]}  randomValue={randomValue} 
            />

        </>
    )
  }