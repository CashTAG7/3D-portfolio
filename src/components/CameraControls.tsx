import { useGSAP } from '@gsap/react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

export default function CameraControls() {
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
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        rotateSpeed={0.3}
        zoomToCursor
      />
    </>
  );
}
