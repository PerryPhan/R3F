import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

export default function Box(props) {
    const boxRef = useRef(null);
    const {color} = props;
    useFrame(() => {
        boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
