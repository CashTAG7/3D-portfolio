import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function MonitorProject({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.monitorScreen as Mesh).geometry}
      position={nodes.monitorScreen.position}
      rotation={nodes.monitorScreen.rotation}
      scale={nodes.monitorScreen.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.162}
        position={[-0.01, 0.164, 0.01]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[830px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project"
        />
      </Html>
    </mesh>
  );
}
