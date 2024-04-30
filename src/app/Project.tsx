import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { Mesh, TextureLoader } from 'three';
import CameraControls from '../components/CameraControls';
import ClockProject from '../components/projectComponents/ClockProject';
import MonitorProject from '../components/projectComponents/MonitorProject';
import OngoingProject from '../components/projectComponents/OngoingProject';
import Project1 from '../components/projectComponents/Project1';
import Project2 from '../components/projectComponents/Project2';
import Project3 from '../components/projectComponents/Project3';
import Project4 from '../components/projectComponents/Project4';
import Project5 from '../components/projectComponents/Project5';
import Project6 from '../components/projectComponents/Project6';
import Project7 from '../components/projectComponents/Project7';

export default function Project() {
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
    </>
  );
}

const Scene = () => {
  const { nodes } = useGLTF('./project/projects.glb');
  const bakedTexture = useLoader(TextureLoader, './project/bakedProject.jpg');
  bakedTexture.flipY = false;
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
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <ClockProject nodes={nodes} />

        <MonitorProject nodes={nodes} />

        <OngoingProject nodes={nodes} />

        <Project1 nodes={nodes} />
        <Project2 nodes={nodes} />
        <Project3 nodes={nodes} />
        <Project4 nodes={nodes} />
        <Project5 nodes={nodes} />
        <Project6 nodes={nodes} />
        <Project7 nodes={nodes} />

        <mesh
          geometry={(nodes.windowLight as Mesh).geometry}
          position={nodes.windowLight.position}
          rotation={nodes.windowLight.rotation}
          scale={nodes.windowLight.scale}
        >
          <meshBasicMaterial color="#011910" />
        </mesh>
      </Center>
    </>
  );
};
