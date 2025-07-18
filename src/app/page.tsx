"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import { FrameworkRotation } from "@/components/framework-rotation";
import { Poppins } from "next/font/google";
import { CountdownTimer } from "@/components/countdown-timer";
import { Cursor } from "@/components/cursor";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      {/* Background color */}
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "electron",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "open",
          }
        )}
      />
      {/* Grid */}
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30"
      />
      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      {/* Reveal */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Content */}
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          {/* Heading */}
          <h1
            className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
          >
            <Image
              alt="omnibot logo"
              className="inline-block mr-8 -mt-2"
              src={assets.omni}
              width="70"
              height="90"
            />
            + <FrameworkRotation currentFramework={currentFramework} />{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "electron",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "open",
              })}
            >
              Code & Promote<br></br>
            </span>{" "}
            Coming Soon!
          </h1>
          {/* Sub heading */}
          <p className="mb-4 mt-20">
            <span className="text-gray-300">Product is Under development </span>
            <Image
              alt="omnibot logo"
              className="inline-block ml-1 -mt-1"
              width={40}
              height={7}
              src={assets.omni}
            />
            {" + "}
            <Image
              alt="electron logo"
              className="inline-block mx-1"
              width={36}
              height={5}
              src={assets.electron}
            />
          </p>
        </div>
      </div>
      <Cursor buttonRef={buttonRef} />
    </main>
  );
}
