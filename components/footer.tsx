"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCopy, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("ashoksuthar48697@gmail.com");
    // You could add a toast notification here if you want
  };

  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s <span className="text-purple">Connect</span>
        </h1>

        {/* Email Section */}
        <div className="my-10 flex flex-col items-center">
          <p className="mb-4 text-center text-white-200 md:text-lg">
            Get in touch with me
          </p>
          
          <div className="group relative">
            <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-black/50 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-purple/50 hover:bg-black/70">
              <span className="text-lg font-medium text-white">
                ashoksuthar48697@gmail.com
              </span>
              <button
                onClick={copyEmail}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple/20 text-purple transition-all duration-300 hover:bg-purple/30 hover:scale-110"
                title="Copy email"
              >
                <FaCopy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <p className="mb-6 text-center text-white-200 md:text-lg">
            Follow me on social media
          </p>
          
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/ashoksuthar14"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-purple/50 hover:bg-purple/20 hover:scale-110 hover:text-purple"
              title="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/AIwithAshu"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-purple/50 hover:bg-purple/20 hover:scale-110 hover:text-purple"
              title="Twitter/X"
            >
              <FaTwitter className="h-8 w-8" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashok--suthar/"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-purple/50 hover:bg-purple/20 hover:scale-110 hover:text-purple"
              title="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-[999] mt-16 flex flex-col items-center justify-center">
        <p className="text-sm font-light text-white/60 md:text-base">
          Copyright &copy; {new Date().getFullYear()} Ashok Suthar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
