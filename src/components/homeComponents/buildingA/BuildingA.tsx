import {
  Object3D,
  Object3DEventMap,
  Mesh,
  MeshBasicMaterial,
  Texture,
} from 'three';
import { useNavigate } from 'react-router-dom';
import { Edges } from '@react-three/drei';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import BigScreenA from './BigScreenA';
import RoundedSign from './RoundedSign';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
  bakedTexture: Texture;
  homeOrangeMaterial: MeshBasicMaterial;
  homeOrangeDeepMaterial: MeshBasicMaterial;
}

export default function BuildingA({
  nodes,
  bakedTexture,
  homeOrangeMaterial,
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
        geometry={(nodes.buildingA as Mesh).geometry}
        position={nodes.buildingA.position}
        rotation={nodes.buildingA.rotation}
        scale={nodes.buildingA.scale}
        onClick={(event) => {
          router('/project');
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

      <BigScreenA nodes={nodes} />

      <RoundedSign
        nodes={nodes}
        homeOrangeMaterial={homeOrangeMaterial}
        homeOrangeDeepMaterial={homeOrangeDeepMaterial}
      />
    </>
  );
}
