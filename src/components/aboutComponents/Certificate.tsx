import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
}

export default function Certificate({ nodes }: Props) {
  return (
    <mesh
      geometry={(nodes.picture as Mesh).geometry}
      position={nodes.picture.position}
      rotation={nodes.picture.rotation}
      scale={nodes.picture.scale}
    >
      <Html
        transform
        distanceFactor={0.071}
        center
        position-z={0.005}
        rotation-y={Math.PI / 4}
        occlude="blending"
      >
        <iframe
          className="w-[1448px] h-[1200px] flex items-center justify-center"
          src="https://my-portfolio-chi-ten-76.vercel.app/Certificate-%20Three.js.png"
        />
        <a
          className="flex justify-center items-center text-8xl font-semibold text-white bg-black hover:bg-white hover:text-black"
          href={'https://threejs-journey.com/certificate/view/33175'}
          target="_blank"
        >
          VIEW ORIGINAL
        </a>
      </Html>
    </mesh>
  );
}
