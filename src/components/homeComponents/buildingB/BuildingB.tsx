import {
  Object3D,
  Object3DEventMap,
  Mesh,
  MeshBasicMaterial,
  Texture,
} from 'three';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Edges } from '@react-three/drei';
import BigScreenB from './BigScreenB';
import SmallScreen from './SmallScreen';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
  bakedTexture: Texture;
  homeOrangeDeepMaterial: MeshBasicMaterial;
}

export default function BuildingB({
  nodes,
  bakedTexture,
  homeOrangeDeepMaterial,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useNavigate();

  useFrame(({ camera }) => {
    if (isHovered) {
      const distance = camera.position.distanceTo(nodes.buildingA.position);
      if (distance > 15) setIsHovered(false);
    }
  });

  return (
    <>
      <mesh
        geometry={(nodes.buildingB as Mesh).geometry}
        position={nodes.buildingB.position}
        rotation={nodes.buildingB.rotation}
        scale={nodes.buildingB.scale}
        onClick={(event) => {
          router('/about');
          event.stopPropagation();
        }}
        onPointerEnter={(event) => {
          setIsHovered(true);
          document.body.style.cursor = 'pointer';
          event.stopPropagation();
        }}
        onPointerLeave={() => {
          setIsHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <meshBasicMaterial map={bakedTexture} />
        {isHovered && <Edges color="#E69B00" />}
      </mesh>

      <BigScreenB nodes={nodes} />

      <SmallScreen
        nodes={nodes}
        homeOrangeDeepMaterial={homeOrangeDeepMaterial}
      />
    </>
  );
}
