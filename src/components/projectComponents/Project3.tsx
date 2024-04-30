import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project3({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project3 as Mesh).geometry}
      position={nodes.project3.position}
      rotation={nodes.project3.rotation}
      scale={nodes.project3.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.183}
        position={[-0.012, 0, 0.013]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[580px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/2"
        />
      </Html>
    </mesh>
  );
}
