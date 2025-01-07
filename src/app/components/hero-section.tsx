"use client";
import { ReactElement } from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

function HeroSection(): ReactElement {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={["Randy", 1500, "Software Engineer", 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full my-4 bg-white hover:bg-slate-200 text-black">
            Contact Me
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/avatar-cartoon.png"
              alt="Profile Picture"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
