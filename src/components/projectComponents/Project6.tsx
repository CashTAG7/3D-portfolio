import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project6({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project6 as Mesh).geometry}
      position={nodes.project6.position}
      rotation={nodes.project6.rotation}
      scale={nodes.project6.scale}
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
          src="https://my-portfolio-chi-ten-76.vercel.app/project/6"
        />
      </Html>
    </mesh>
  );
}
