"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

import { links } from "@/config";
import { techStackLogos, customTechLogos } from "@/data";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";

const BentoGridLottie = dynamic(() => import("./bento-grid-lottie"), {
  ssr: false,
});

// Dynamic import for tech-stack-icons
const TechStackIcons = dynamic(() => import("tech-stack-icons"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description && (
              <div className="whitespace-pre-line leading-relaxed">
            {description}
              </div>
            )}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 5 && (
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
                {/* Library Icons */}
                {techStackLogos.map((tech, index) => (
                  <div key={`lib-${index}`} className="group relative flex items-center justify-center">
                    <TechStackIcons
                      name={tech}
                      className="h-8 w-8 text-white/90 hover:text-purple transition-colors duration-300 md:h-10 md:w-10"
                    />
                    {/* Hover Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 z-50 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-md bg-black/90 px-2 py-1 text-xs text-white whitespace-nowrap">
                        {tech.charAt(0).toUpperCase() + tech.slice(1)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Custom Logos */}
                {customTechLogos.map((logo, index) => (
                  <div key={`custom-${index}`} className="group relative flex items-center justify-center">
                    <Image
                      src={logo.path}
                      alt={logo.name}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain hover:scale-110 transition-transform duration-300 md:h-10 md:w-10"
                    />
                    {/* Hover Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 z-50 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-md bg-black/90 px-2 py-1 text-xs text-white whitespace-nowrap">
                        {logo.name}
                      </div>
                    </div>
              </div>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="group relative mt-5">
              <BentoGridLottie copied={copied} />

              <a
                href="https://github.com/ashoksuthar14"
                target="_blank"
                rel="noreferrer noopener"
              >
              <MagicButton
                  title="GitHub"
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                asChild
              />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
