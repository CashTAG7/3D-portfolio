import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function MonitorAbout({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.monitor as Mesh).geometry}
      position={nodes.monitor.position}
      rotation={nodes.monitor.rotation}
      scale={nodes.monitor.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.332}
        position={[-0.02, 0.302, 0.02]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[730px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/about"
        />
      </Html>
    </mesh>
  );
}
