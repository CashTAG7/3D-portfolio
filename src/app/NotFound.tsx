import { useEffect, useState } from 'react';
import { Center, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

export default function NotFound() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isMobileDeviceRotated, setIsMobileDeviceRotated] = useState(false);

  useEffect(() => {
    const handleDeviceChange = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setIsMobileDevice(true);
        if (window.innerWidth / window.innerHeight <= 1.1) {
          setIsMobileDeviceRotated(true);
        } else {
          setIsMobileDeviceRotated(false);
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
      {isMobileDeviceRotated && (
        <main className="z-[10000002] w-svw h-svh bg-[#011910] flex flex-col items-center justify-center ">
          <div className="phone h-20 w-40 border-3 border-4 border-[#B45A00] rounded-lg animate-rotate"></div>
          <div className="text-[#B45A00] font-extrabold text-center text-2xl mt-16">
            Please rotate your device!
          </div>
        </main>
      )}

      {!isMobileDeviceRotated && (
        <main className="h-svh">
          <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />

            <Scene margin={0.5} isMobileDevice={isMobileDevice} />

            <color args={['#011910']} attach="background" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </main>
      )}
    </>
  );
}

type Prop = {
  margin: number;
  isMobileDevice: boolean;
};

function Scene({ margin, isMobileDevice }: Prop) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Center
        bottom
        right
        position={[-width / 3 + margin, height / 2 - margin, 0]}
      >
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          OPPS!
          <meshStandardMaterial color="#E69B00" />
        </Text3D>
      </Center>
      <Center top left position={[width / 3 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          Page Not Found.
          <meshStandardMaterial color="#E69B00" />
        </Text3D>
      </Center>

      {isMobileDevice ? (
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          SORRY!
          <meshStandardMaterial color="#E69B00" />
        </Text3D>
      ) : (
        <Center rotation={[-0.5, -0.25, 0]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1.5}
            font="/Inter_Bold.json"
          >
            {`ERROR 404`}
            <meshStandardMaterial color="#E69B00" />
          </Text3D>
        </Center>
      )}
    </>
  );
}
