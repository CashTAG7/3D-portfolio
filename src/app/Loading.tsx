import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Loading() {
  const loading = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  const loadingRef = useRef(null);

  useGSAP(() => {
    gsap.to('.loading', {
      x: -100,
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      ease: 'back.inOut(4)',
    });
  }, [loadingRef]);

  return (
    <main className="h-dvh relative">
      <div
        ref={loadingRef}
        className="z-[10000001] absolute left-[40%] top-[43%] text-[#B45A00] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold "
      >
        <div className="flex">
          {loading.map((letter, index) => (
            <div className="loading " key={index}>
              {letter + ' '}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
