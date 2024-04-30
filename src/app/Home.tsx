import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Mesh, MeshBasicMaterial } from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Loading from './Loading';
import BuildingA from '../components/homeComponents/buildingA/BuildingA';
import BuildingB from '../components/homeComponents/buildingB/BuildingB';

export default function Home() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const handleDeviceChange = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (window.innerWidth / window.innerHeight <= 1.1) {
          setIsMobileDevice(true);
        } else {
          setIsMobileDevice(false);
        }
      }
    };

    handleDeviceChange();

    window.addEventListener('resize', handleDeviceChange);
    window.addEventListener('orientationchange', handleDeviceChange);

    return () => {
      window.removeEventListener('resize', handleDeviceChange);
      window.removeEventListener('orientationchange', handleDeviceChange);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {isMobileDevice && (
          <main className="z-[10000002] w-svw h-svh bg-[#011910] flex flex-col items-center justify-center ">
            <div className="phone h-20 w-40 border-3 border-4 border-[#B45A00] rounded-lg animate-rotate"></div>
            <div className="text-[#B45A00] font-extrabold text-center text-2xl mt-16">
              Please rotate your device!
            </div>
          </main>
        )}

        {!isMobileDevice && (
          <main className="h-svh">
            <Canvas
             frameloop="demand"
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

              <Scene />
            </Canvas>
          </main>
        )}
      </Suspense>
    </>
  );
}

const Scene = () => {
  const { nodes } = useGLTF('./home/mPortfolio.glb');
  const bakedTexture = useTexture('./home/baked.jpg');
  bakedTexture.flipY = false;
  const homeOrangeMaterial = new MeshBasicMaterial({ color: '#E69B00' });
  const homeOrangeDeepMaterial = new MeshBasicMaterial({ color: '#B45A00' });

  const { camera } = useThree();

  useGSAP(() => {
    gsap.from(camera.position, {
      duration: 3,
      repeat: 0,
      x: 0,
      y: 12,
      z: 0,
      ease: 'power3.inOut',
    });
  });

  return (
    <>
      <OrbitControls
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 2}
        rotateSpeed={0.3}
        zoomToCursor
      />
      <Center>
        <mesh
          geometry={(nodes.marged as Mesh).geometry}
          position={nodes.marged.position}
          rotation={nodes.marged.rotation}
          scale={nodes.marged.scale}
          onClick={(event) => event.stopPropagation()}
          onPointerEnter={(event) => event.stopPropagation()}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <BuildingA
          nodes={nodes}
          bakedTexture={bakedTexture}
          homeOrangeMaterial={homeOrangeMaterial}
          homeOrangeDeepMaterial={homeOrangeDeepMaterial}
        />

        <BuildingB
          nodes={nodes}
          bakedTexture={bakedTexture}
          homeOrangeDeepMaterial={homeOrangeDeepMaterial}
        />

        <mesh
          geometry={(nodes.poleLight as Mesh).geometry}
          material={homeOrangeMaterial}
          position={nodes.poleLight.position}
          rotation={nodes.poleLight.rotation}
          scale={nodes.poleLight.scale}
          onClick={(event) => event.stopPropagation()}
          onPointerEnter={(event) => event.stopPropagation()}
        ></mesh>
      </Center>
    </>
  );
};
