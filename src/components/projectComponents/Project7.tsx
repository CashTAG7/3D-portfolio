import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Project7({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.project7 as Mesh).geometry}
      position={nodes.project7.position}
      rotation={nodes.project7.rotation}
      scale={nodes.project7.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.094}
        position={[0.026, 0, 0.013]}
        rotation-y={Math.PI / 4}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[2160px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/1"
        />
      </Html>
    </mesh>
  );
}
