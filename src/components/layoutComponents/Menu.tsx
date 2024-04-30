import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { PiMessengerLogoBold } from 'react-icons/pi';
import { TbBrandDiscord } from 'react-icons/tb';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Menu() {
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

  const links = [
    { title: 'Project', href: '/project' },
    { title: 'About', href: '/about' },
  ];

  return (
    <>
      <div className="absolute bottom-0 lg:bottom-1 z-[10000001] right-2 lg:right-4">
        <div className="text-[#E69B00]">
          <Link className="flex items-end justify-end" to={'/'}>
            <Logo />
          </Link>
          <div className="">
            {links.map((link, index) => (
              <Link
                key={index}
                className="flex justify-end items-end my-1 lg:my-2 transform origin-right hover:scale-110 transition duration-300"
                to={link.href}
              >
                {link.title}
              </Link>
            ))}
            <div className="flex items-end justify-end mb-1 lg:mb-2">
              <a
                className="flex justify-end items-end my-1 lg:my-2 transform origin-right hover:scale-110 transition duration-300 ms-4"
                href={'https://wa.me/+8801980737644'}
                target="_blank"
              >
                <IoLogoWhatsapp size={20} />
              </a>
              <a
                className="flex justify-end items-end my-1 lg:my-2 transform origin-right hover:scale-110 transition duration-300 ps-3"
                href={'https://www.messenger.com/t/100010188529621'}
                target="_blank"
              >
                <PiMessengerLogoBold size={20} />
              </a>
              <a
                className="flex justify-end items-end my-1 lg:my-2 transform origin-right hover:scale-110 transition duration-300 ps-3"
                href={'https://discord.com/channels/@me/294397456119234560'}
                target="_blank"
              >
                <TbBrandDiscord size={20} />
              </a>
              <a
                className="flex justify-end items-end my-1 lg:my-2 transform origin-right hover:scale-110 transition duration-300 ps-3"
                href={
                  'mailto:nomanebeny@gmail.com.com?subject=Your%20Subject&body=Your%20Message'
                }
                target="_blank"
              >
                <MdOutlineMail size={21} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {!isMobileDevice && <Instructions />}
    </>
  );
}

const Instructions = () => {
  const [active, setActive] = useState(true);
  const instructionNavButton = useRef(null);
  const instructionNavDiv = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    if (instructionNavButton && instructionNavDiv) {
      const tl = gsap.timeline({ delay: 3 });

      tl.from(instructionNavButton.current, {
        right: '22svw',
        rotate: 180,
        duration: 0.8,
      }).from(instructionNavDiv.current, { x: -320, duration: 0.8 }, '<');
    }
  });

  const instructionNavClick = contextSafe(() => {
    if (instructionNavButton && instructionNavDiv) {
      const tl = gsap.timeline({ onComplete: () => setActive(!active) });

      if (active) {
        tl.to(instructionNavButton.current, {
          right: '22svw',
          rotate: 180,
          duration: 0.8,
        }).to(instructionNavDiv.current, { x: -320, duration: 0.8 }, '<');
      } else {
        tl.to(instructionNavButton.current, {
          right: 0,
          rotate: 0,
          duration: 0.8,
        }).to(instructionNavDiv.current, { x: 0, duration: 0.8 }, '<');
      }
    }
  });

  return (
    <div className="absolute top-4 z-[10000001] left-2 lg:left-4 w-[24vw] h-[10px]">
      <div className="text-left text-[#B45A00] flex relative">
        <div ref={instructionNavDiv}>
          <div className="text-base font-semibold">Orbit rotation:</div>
          <div className="text-sm mb-1">
            left mouse drag <br /> <span className="font-semibold">touch:</span>{' '}
            one-finger move
          </div>

          <div className="text-base font-semibold">Zoom in / out:</div>
          <div className="text-sm mb-1">
            middle mouse drag, or mousewheel <br />{' '}
            <span className="font-semibold">touch:</span> two-finger pinch-in or
            out
          </div>

          <div className="text-base font-semibold">Truck (Pan):</div>
          <div className="text-sm">
            right mouse drag <br />{' '}
            <span className="font-semibold">touch:</span> two-finger move or
            three-finger move
          </div>
        </div>

        <div
          ref={instructionNavButton}
          onClick={instructionNavClick}
          className="text-4xl absolute -top-3 right-0 cursor-pointer"
        >
          &lt;
        </div>
      </div>
    </div>
  );
};
