import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component
import { CameraControls, Environment, PerspectiveCamera, useHelper } from '@react-three/drei';
import {GundamPhenex} from './components/GundamPhenex';
import { useEffect, useRef } from 'react';
import { folder, useControls } from 'leva';
import { SpotLightHelper } from 'three';

function App() {
  // Remember to press on screen to activate music. It is big to load
  const {x, y, z, rx, ry, rz} = useControls({
    position: folder({
      x: 315,
      y: -750,
      z: 800
    }),
    rotation: folder({
      rx: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      },
      ry: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      },
      rz: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      }
    })
  })
 
  return (
    <>
      <PerspectiveCamera position={[0, 50, 1000]} pov={3000} makeDefault />
      <color attach='background' args={['#000']} />
      {/* <spotLight position={[lx, ly, lz]} color={color} angle={3} penumbra={1} castShadow intensity={100} shadow-bias={-0.0001} /> */}
      <Environment preset='warehouse' />
      <GundamPhenex position={[x, y, z]}  rotation={[rx, ry, rz ]}/>
    </>
  );
}

export default App;
