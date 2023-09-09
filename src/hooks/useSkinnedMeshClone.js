import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

export function useSkinnedMeshClone(path) {
    const { scene, materials, animations } = useGLTF('./models/butterfly/scene-transformed.glb');
    const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes } = useGraph(clonedScene);

    return { nodes, materials, animations };
}
