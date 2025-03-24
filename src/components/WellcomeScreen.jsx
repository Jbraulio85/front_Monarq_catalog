"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function WellcomeScreen() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="font-castelar text-4xl md:text-5xl lg:text-6xl font-bold text-center relative z-20">
        MONARQ
      </h1>
    </div>
  );
}


