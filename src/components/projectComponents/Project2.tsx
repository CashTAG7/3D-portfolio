import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project2({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project2 as Mesh).geometry}
      position={nodes.project2.position}
      rotation={nodes.project2.rotation}
      scale={nodes.project2.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.118}
        position={[-0.012, 0, 0.013]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1150px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/7"
        />
      </Html>
    </mesh>
  );
}
