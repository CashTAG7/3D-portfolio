import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { Mesh, TextureLoader } from 'three';
import Loading from './Loading';
import CameraControls from '../components/CameraControls';
import MonitorAbout from '../components/aboutComponents/MonitorAbout';
import ClockAbout from '../components/aboutComponents/ClockAbout';
import Certificate from '../components/aboutComponents/Certificate';

export default function About() {
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
              flat
              camera={{
                fov: 15,
                near: 0.1,
                far: 200,
                position: [0, 1, 8.5],
              }}
            >
              <color args={['#011910']} attach="background" />

              <Scene />
            </Canvas>
          </main>
        )}
      </Suspense>
    </>
  );
}

const Scene = () => {
  const { nodes } = useGLTF('./about/about.glb');
  const bakedTexture = useLoader(TextureLoader, './about/bakedAbout.jpg');
  return (
    <>
      <CameraControls />

      <Center>
        <mesh
          geometry={(nodes.merged as Mesh).geometry}
          position={nodes.merged.position}
          rotation={nodes.merged.rotation}
          scale={nodes.merged.scale}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>

        <MonitorAbout nodes={nodes} />

        <ClockAbout nodes={nodes} />

        <Certificate nodes={nodes} />

        <mesh
          geometry={(nodes.window as Mesh).geometry}
          position={nodes.window.position}
          rotation={nodes.window.rotation}
          scale={nodes.window.scale}
        >
          <meshBasicMaterial color="#E69B00" />
        </mesh>
      </Center>
    </>
  );
};
