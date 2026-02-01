"use client";
import { ReactElement } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

export function HeroSection(): ReactElement {
  return (
    <section id="hero-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={["Randy", 1500, "a Software Engineer", 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full-stack software engineer | Skilled in React, TypeScript,
            PostgreSQL | Building Scalable Tech for Insurance Industry
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="https://github.com/randylirano"
              target="_blank"
              className="text-white hover:text-slate-500 transition-colors"
            >
              <FaGithub className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/randy-lirano-66b291107/"
              target="_blank"
              className="text-white hover:text-slate-500 transition-colors"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/chatgpt-avatar.png"
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
