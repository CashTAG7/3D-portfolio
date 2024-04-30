import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';
import Clock from '../Clock';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function ClockAbout({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.clock as Mesh).geometry}
      position={nodes.clock.position}
      rotation={nodes.clock.rotation}
      scale={nodes.clock.scale}
    >
      <meshBasicMaterial color="#000000" />
      <Html
        wrapperClass="bg-white"
        transform
        center
        distanceFactor={0.18}
        position={[-0.005, 0, 0.005]}
        rotation-y={-0.786}
        occlude="blending"
      >
        <Clock />
      </Html>
    </mesh>
  );
}
