import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh, MeshBasicMaterial } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
  homeOrangeMaterial: MeshBasicMaterial;
  homeOrangeDeepMaterial: MeshBasicMaterial;
}

export default function RoundedSign({
  nodes,
  homeOrangeMaterial,
  homeOrangeDeepMaterial,
}: Props) {
  return (
    <>
      <mesh
        geometry={(nodes.circleLight as Mesh).geometry}
        material={homeOrangeMaterial}
        position={nodes.circleLight.position}
        rotation={nodes.circleLight.rotation}
        scale={nodes.circleLight.scale}
      >
        <Html
          transform
          center
          distanceFactor={0.057}
          position={[0, 0.0088, 0]}
          rotation-x={-Math.PI / 2}
          occlude="blending"
        >
          <iframe
            className="h-[1152px] w-[1450px]"
            src="https://my-portfolio-chi-ten-76.vercel.app/sign"
          />
        </Html>
      </mesh>

      <mesh
        geometry={(nodes.circleLightDeep as Mesh).geometry}
        material={homeOrangeDeepMaterial}
        position={nodes.circleLightDeep.position}
        rotation={nodes.circleLightDeep.rotation}
        scale={nodes.circleLightDeep.scale}
      ></mesh>
    </>
  );
}
