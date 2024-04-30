import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project4({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project4 as Mesh).geometry}
      position={nodes.project4.position}
      rotation={nodes.project4.rotation}
      scale={nodes.project4.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.1177}
        position={[-0.012, 0, 0.013]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1731px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/4"
        />
      </Html>
    </mesh>
  );
}
