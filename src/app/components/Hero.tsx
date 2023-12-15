"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-screen justify-between ">
      <div className="container flex w-[1400px] items-center h-full justify-between ">
        <div className="relative h-[100%] w-[100%]">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 120]} scale={1.6}>
                <MeshDistortMaterial
                  color="#fda4af"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image
            width={400}
            height={600}
            src="/cdds.png"
            alt="Logo Gunvacci"
            className="absolute top-0 left-0 bottom-0 right-0 m-auto z-20 object-contain"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="items-center">
            <div className="text-4xl text-white font-bold my-2 py-3">
              Gunvacci has reached{" "}
              <span className="text-fuchsia-500">End Of Life</span>.
            </div>
            <div className=" flex flex-col align-item-center gap-4">
              <div className="text-slate-200 text-lg">
                Gunvacci Consulting Services has been closed, now it is
                Techtread Technologies Pvt. Ltd.
              </div>
              <div>
                <Image
                  height={5}
                  width="10"
                  alt="hyphen"
                  src="/line.png"
                  className="inline"
                />
                <span className="text-pink-400"> Kapil Pande</span>
              </div>
              <div className="text-slate-50">
                <span className="font-bold">Contact: </span>{" "}
                <span>
                  <Link href="mailto:kapil@gunvacci.com">
                    E: kapil@gunvacci.com{" "}
                  </Link>
                </span>
                {"    "}
                <span>M: +91 9453012113</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
