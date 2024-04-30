import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function BigScreenB({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.bigScreenLightB as Mesh).geometry}
      position={nodes.bigScreenLightB.position}
      rotation={nodes.bigScreenLightB.rotation}
      scale={nodes.bigScreenLightB.scale}
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
          src="https://my-portfolio-chi-ten-76.vercel.app/"
        />
      </Html>
    </mesh>
  );
}
