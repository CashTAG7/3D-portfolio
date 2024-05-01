import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function Test() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="h-svh">
      <div
        onClick={() => {
          setIsVisible(true);
        }}
        className="absolute z-[10000002] top-4 right-16 text-gray-200 text-4xl cursor-pointer bg-slate-700 w-8 h-8 flex justify-center items-center"
      >
        +
      </div>

      <div
        onClick={() => {
          setIsVisible(false);
        }}
        className="absolute z-[10000002] top-4 right-4 text-gray-200 text-4xl cursor-pointer bg-slate-700 w-8 h-8 flex justify-center items-center"
      >
        -
      </div>
      <Canvas
        flat
        camera={{
          fov: 40,
          near: 0.1,
          far: 200,
          position: [5, 1, 5],
        }}
      >
        <color args={['#011910']} attach="background" />
        <fog attach="fog" args={['#011910', 5, 20]} />

        <Scene isVisible={isVisible} />
      </Canvas>
    </main>
  );
}

const Scene = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      <OrbitControls />
      <Center>
        <mesh
          visible={isVisible}
          // geometry={(nodes.marged as Mesh).geometry}
          position={[1.1, 0, 0]}
          // rotation={nodes.marged.rotation}
          // scale={nodes.marged.scale}
          // onClick={(event) => event.stopPropagation()}
          // onPointerEnter={(event) => event.stopPropagation()}
        >
          <boxGeometry />
          <meshBasicMaterial color={'#E69B00'} />
        </mesh>
        <mesh
          // geometry={(nodes.marged as Mesh).geometry}
          position={[0, 0, 0]}
          // rotation={nodes.marged.rotation}
          scale-x={1.2}
          // onClick={(event) => event.stopPropagation()}
          // onPointerEnter={(event) => event.stopPropagation()}
        >
          <boxGeometry />
          <meshBasicMaterial color={'#E69B00'} />
        </mesh>
        <mesh
          visible={isVisible}
          // geometry={(nodes.marged as Mesh).geometry}
          position={[-1.1, 0, 0]}
          // rotation={nodes.marged.rotation}
          // scale={nodes.marged.scale}
          // onClick={(event) => event.stopPropagation()}
          // onPointerEnter={(event) => event.stopPropagation()}
        >
          <boxGeometry />
          <meshBasicMaterial color={'#E69B00'} />
        </mesh>
      </Center>
    </>
  );
};
