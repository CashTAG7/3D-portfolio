import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function BigScreenA({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.bigScreenLightA as Mesh).geometry}
      position={nodes.bigScreenLightA.position}
      rotation={nodes.bigScreenLightA.rotation}
      scale={nodes.bigScreenLightA.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.63}
        position={[0.09, 0, 0.01]}
        rotation-y={1.5708}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[760px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/slider"
        />
      </Html>
    </mesh>
  );
}
