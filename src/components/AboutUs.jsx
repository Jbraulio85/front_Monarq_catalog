"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function AboutUs() {
  return (
    <div className="h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden relative px-6">
      {/* Fondo de partículas */}
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

      <div className="relative z-20 flex flex-col md:flex-row gap-6 max-w-5xl">
        <div className="bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 text-white max-w-2xl">
          <h2 className="text-4xl font-semibold mb-4 text-center font-castelar">Misión</h2>
          <p className="text-lg leading-relaxed text-center">
            En nuestra tienda <span className="font-bold font-castelar">MONARQ</span> en línea nos 
            dedicamos a ofrecer calzado, ropa y accesorios de lujo que destacan con 
            su elegancia, calidad y exclusividad. Cada par refleja un equilibrio, cada 
            prenda cuenta una historia y refleja un estilo, y cada accesorio añade 
            un toque único a tu personalidad.
          </p>
        </div>

        <div className="bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 text-white max-w-2xl">
          <h2 className="text-4xl font-semibold mb-4 text-center font-castelar">Visión</h2>
          <p className="text-lg leading-relaxed text-center">
            Queremos convertirnos en la tienda en línea de referencia para quienes 
            buscan un estilo único de lujo y exclusivo, marcando tendencia con nuestra 
            colección de moda. Nuestro objetivo es llegar a más clientes en diversas 
            partes de nuestro país, a tal punto que sobresalgamos de nuestras raíces.
          </p>
        </div>
      </div>
    </div>
  );
}



