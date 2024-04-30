import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function OngoingProject({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.ongoingProject as Mesh).geometry}
      position={nodes.ongoingProject.position}
      rotation={nodes.ongoingProject.rotation}
      scale={nodes.ongoingProject.scale}
    >
      <Html
        transform
        center
        distanceFactor={0.065}
        position={[0.011, 0.5622, 0.011]}
        rotation-y={Math.PI / 4}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1480px]"
          src="https://my-portfolio-chi-ten-76.vercel.app/project/8"
        />
      </Html>
    </mesh>
  );
}
