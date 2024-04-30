import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project5({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project5 as Mesh).geometry}
      position={nodes.project5.position}
      rotation={nodes.project5.rotation}
      scale={nodes.project5.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.0939}
        position={[0.026, 0, 0.013]}
        rotation-y={Math.PI / 4}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1090px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/5"
        />
      </Html>
    </mesh>
  );
}
