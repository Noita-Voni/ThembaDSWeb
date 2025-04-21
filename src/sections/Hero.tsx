"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import Image from 'next/image';
import {useRef} from 'react';
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion';



export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 bg-gradient-to-b from-white via-[#EAEEFE] to-[#EAEEFE] relative overflow-x-clip">
      {/* Overlay gradient for the blue radial effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#183EC2_0%,transparent_70%)] z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="z-10">
            <div className="tag">
              Cloud, Data, Cyber Solutions
            </div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Empower Your Digital<br />Journey
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-lg">
              Whether You're Scaling In The Cloud,
              Storing Sensitive Data Or Safeguarding
              Systems We've Got You Covered.
            </p>
            <div className="flex gap-4 items-center mt-8">
              <button className="btn btn-primary">Empower Your Journey</button>
              <button className="btn btn-text inline-flex items-center">
                <span>Learn more</span>
                <ArrowIcon className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            {/* Main cog image */}
            <motion.img
              src={cogImage.src}
              alt="3D cog object"
              className="object-contain w-[80%] h-auto md:w-[85%] md:max-w-none md:h-auto z-10 relative"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 5,
                ease: 'easeInOut',
              }}
            />
            {/* Cylinder image positioned to the left of cog */}
            <motion.img
              src={cylinderImage.src}
              width={180}
              height={180}
              alt="3D cylinder object"
              className="absolute left-0 top-1/2 md:left-[-80px] md:top-[30%] z-20 hidden md:block"
              style={{
                translateY: translateY,
              }}
            />
            {/* Noodle image positioned to the right and in line with cog */}
            <motion.img
              src={noodleImage.src}
              width={150}
              height={150}
              alt="3D noodle object"
              className="absolute right-[-60px] top-[55%] z-20 hidden md:block"
              style={{
                rotate:30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
