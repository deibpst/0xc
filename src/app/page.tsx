"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentFounder, setCurrentFounder] = useState(0);

  const founders = [
    {
      name: "David Ponce",
      description: "Me apasiona desarrolar soluciones, escuchar música y los e-sports.",
      image: "/founders/deib.jpeg",
      instagram: "https://www.instagram.com/deibpst/",
      linkedin: "https://www.linkedin.com/in/davidpos/"
    },
    {
      name: "Yaslie Chávez",
      description: "Me encanta la tecnología, el diseño y el café :)",
      image: "/founders/yas.jpeg",
      instagram: "https://www.instagram.com/yaslie.pls?igsh=MWdjeno0dmN4d2Rkbw%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/yaslie"
    },
    {
      name: "Sebastián Monge Juárez",
      description: "Me gustan los gatos nomas.",
      image: "/founders/sebas.jpeg",
      instagram: "https://www.instagram.com/chebascawn?igsh=NWJoMWNjMzh4eTF1",
      linkedin: "https://www.linkedin.com/in/chebasdev?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      name: "Elvira García",
      description: "Me encanta la comida y escuchar BTS.",
      image: "/founders/elvira.jpeg",
      instagram: "https://www.instagram.com/evvvig?igsh=MWs5aGVqeWF4eThoNA==  ",
      linkedin: "https://www.linkedin.com/in/elvira-isabel-garcía-ramírez-8bbab538a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Luis Pérez",
      description: "Amo los robots, programar y esuchar música 24/siempre.",
      image: "/founders/luis.jpeg",
      instagram: "https://www.instagram.com/luivi_lab/",
      linkedin: "https://www.linkedin.com/in/luuuiscastroo/"
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

                  {/* Redes Sociales */}
                  <div className="flex gap-4 mt-6">
                    {/* Instagram */}
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${founder.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-black dark:text-white transition-colors duration-300 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${founder.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-black dark:text-white transition-colors duration-300 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
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

        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/0xc.ommunity/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de 0xC"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-gray-900 dark:text-white"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/0xcommunity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de 0xC"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-gray-900 dark:text-white"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://linktr.ee/0xCommunity?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linktree de 0xC"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-gray-900 dark:text-white"
              aria-hidden="true"
            >
              <path d="M10.59 13.41a3 3 0 004.24 0l3.54-3.54a3 3 0 10-4.24-4.24L10.59 9.17a3 3 0 000 4.24zM7.05 16.95a3 3 0 104.24-4.24l-1.06-1.06a1 1 0 00-1.41 1.41l1.06 1.06a1 1 0 11-1.41 1.41L7.05 16.95z" />
            </svg>
          </a>

          <a
            href="mailto:0xc.devs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo a 0xc.devs@gmail.com"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-gray-900 dark:text-white"
              aria-hidden="true"
            >
              <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75zm1.5.75v9.75c0 .414.336.75.75.75h15c.414 0 .75-.336.75-.75V7.5l-8.25 4.875L3.75 7.5z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}