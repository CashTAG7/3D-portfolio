import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project1({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project1 as Mesh).geometry}
      position={nodes.project1.position}
      rotation={nodes.project1.rotation}
      scale={nodes.project1.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.0542}
        position={[-0.012, 0, 0.013]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1870px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/3"
        />
      </Html>
    </mesh>
  );
}
