"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentFounder, setCurrentFounder] = useState(0);

  const founders = [
    {
      name: "David Ponce",
      description: "Descripción breve sobre el founder 1. Información relevante sobre su rol y experiencia.",
      image: "/founders/founder1.jpg"
    },
    {
      name: "Yaslie Chávez",
      description: "Descripción breve sobre el founder 2. Información relevante sobre su rol y experiencia.",
      image: "/founders/founder2.jpeg"
    },
    {
      name: "Sebastián Monge Juárez",
      description: "Descripción breve sobre el founder 3. Información relevante sobre su rol y experiencia.",
      image: "/founders/founder3.jpeg"
    },
    {
      name: "Elvira Isabel",
      description: "Descripción breve sobre el founder 4. Información relevante sobre su rol y experiencia.",
      image: "/founders/founder4.jpg"
    },
    {
      name: "Luis",
      description: "Descripción breve sobre el founder 4. Información relevante sobre su rol y experiencia.",
      image: "/founders/founder4.jpg"
    }
  ];

  const nextFounder = () => {
    setCurrentFounder((prev) => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setCurrentFounder((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black transition-colors duration-300 scroll-smooth">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
        <div className="w-full flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            <a href="#home">0xC</a>
          </h1>
          <ul className="hidden sm:flex space-x-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <a href="#home" className="hover:text-black dark:hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-black dark:hover:text-white transition">Sobre nosotros</a>
            </li>
            <li>
              <a href="#founders" className="hover:text-black dark:hover:text-white transition">Founders</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-black dark:hover:text-white transition">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Section Home */}
      <section
        id="home"
        className="h-screen w-full flex items-center justify-center text-center"
      >
        <h1 className="text-7xl font-bold text-black dark:text-zinc-50">0xC</h1>
      </section>

      {/* Section About */}
      <section
        id="about"
        className="h-screen w-full flex flex-col items-center justify-center px-8 text-center "
      >
        <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">Sobre nosotros</h2>
        <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-400">
          0xC es una comunidad que surgió por una amistad universitaria de cuatro personas.
          Lo que 0xC busca es fomentar la interacción entre personas de la industria tech de
          todas las edades y lugares del mundo. Buscamos principalmente apoyar a aquellos que
          apenas inician su camino profesional pero sin dejar de lado a aquellos ya más experimentados, creando espacios donde se pueda compartir conocimiento, oportunidades y
          amistad.
        </p>
      </section>

      {/* Section Founders */}
      <section
        id="founders"
        className="h-screen w-full flex flex-col items-center justify-center px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-12">Founders</h2>

        <div className="relative w-full max-w-3xl flex items-center justify-center">
          {/* Botón Anterior */}
          <button
            onClick={prevFounder}
            className="absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-200 shadow-lg"
            aria-label="Anterior founder"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Carrusel Content */}
          <div className="w-full max-w-md overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFounder * 100}%)` }}
            >
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center px-8"
                >
                  <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-700 shadow-xl">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
                    {founder.name}
                  </h3>
                  <p className="text-lg leading-7 text-zinc-700 dark:text-zinc-400 max-w-lg">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextFounder}
            className="absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-200 shadow-lg"
            aria-label="Siguiente founder"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex gap-2 mt-8">
          {founders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFounder(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentFounder
                ? "bg-black dark:bg-white w-8"
                : "bg-zinc-300 dark:bg-zinc-700"
                }`}
              aria-label={`Ir a founder ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="h-screen w-full flex flex-col items-center justify-center px-8 text-center "
      >
        <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">Contacto</h2>
        <ul className="hidden sm:flex space-x-8 text-zinc-700 dark:text-zinc-300">
          <li><a href="https://www.instagram.com/0xc.ommunity/" target="_blank" className="hover:text-black dark:hover:text-white transition">
            Instagram
          </a>
          </li>
          <li><a href="https://www.linkedin.com/company/0xcommunity" target="_blank" className="hover:text-black dark:hover:text-white transition">
            LinkedIn
          </a>
          </li>
          <li><a href="https://linktr.ee/0xCommunity?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" className="hover:text-black dark:hover:text-white transition">
            Linktr.ee
          </a>
          </li>
          <li><a href="mailto:0xc.devs@gmail.com" target="_blank" className="hover:text-black dark:hover:text-white hover transition">
            Email
          </a>
          </li>
        </ul>
      </section>
    </div>
  );
}