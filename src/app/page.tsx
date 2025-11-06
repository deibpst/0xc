import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black transition-colors duration-300">
      {/* Navbar */}
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo o nombre */}
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">0xC</h1>

          {/* Links de navegación */}
          <ul className="hidden sm:flex space-x-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <a href="#about" className="hover:text-black dark:hover:text-white transition">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-black dark:hover:text-white transition">
                Comunidad
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="mx-auto flex flex-col flex-grow items-center justify-center px-8 py-16 text-center sm:text-left sm:items-start">
        {/* aquí puede ir el logo */}
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50 mb-6">
          0xC
        </h1>

        {/* descripción */}
        <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-400">
          Somos una comunidad nacida de una amistad universitaria con el objetivo de
          conectar personas de la industria tech de todas las edades y lugares del mundo.
          Buscamos ser un puente entre los jóvenes que inician su camino profesional y
          quienes ya tienen experiencia, creando espacios donde compartir conocimiento,
          oportunidades y amistad.
        </p>

        {/* content */}
        <p className="mt-6 text-xl font-medium text-zinc-900 dark:text-zinc-200">
          La tecnología nos conecta, pero las personas nos unen.
        </p>
      </main>
    </div>
  );
}
