import { Html } from '@react-three/drei';
import { Object3D, Object3DEventMap, Mesh, MeshBasicMaterial } from 'three';

interface Props {
  nodes: { [name: string]: Object3D<Object3DEventMap> };
  homeOrangeDeepMaterial: MeshBasicMaterial;
}

export default function SmallScreen({ nodes, homeOrangeDeepMaterial }: Props) {
  return (
    <group
      onClick={(event) => event.stopPropagation()}
      onPointerEnter={(event) => event.stopPropagation()}
    >
      <mesh
        geometry={(nodes.smallScreenLight as Mesh).geometry}
        position={nodes.smallScreenLight.position}
        rotation={nodes.smallScreenLight.rotation}
        scale={nodes.smallScreenLight.scale}
      >
        <Html
          transform
          center
          distanceFactor={0.302}
          position={[0.04, 0, 0]}
          rotation-y={1.5708}
          occlude="blending"
        >
          <iframe
            className="h-[590px] w-[1448px]"
            src="https://my-portfolio-chi-ten-76.vercel.app/screen"
          />
        </Html>
      </mesh>

      <mesh
        geometry={(nodes.smallScreenLightDeep as Mesh).geometry}
        material={homeOrangeDeepMaterial}
        position={nodes.smallScreenLightDeep.position}
        rotation={nodes.smallScreenLightDeep.rotation}
        scale={nodes.smallScreenLightDeep.scale}
      ></mesh>
    </group>
  );
}
