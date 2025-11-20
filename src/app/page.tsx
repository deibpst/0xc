import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black transition-colors duration-300 scroll-smooth">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">0xC</h1>
          <ul className="hidden sm:flex space-x-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <a href="#home" className="hover:text-black dark:hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-black dark:hover:text-white transition">Sobre nosotros</a>
            </li>
            <li>
              <a href="#staff" className="hover:text-black dark:hover:text-white transition">Staff</a>
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
          apenas inician su camino profesional pero sin dejar de lado a aquellos que ya tienen
          experiencia, creando espacios donde se pueda compartir conocimiento, oportunidades y
          amistad.
        </p>
      </section>

      <section
        id="staff"
        className="h-screen w-full flex flex-col items-center justify-center px-8 text-center "
      >
        <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">Staff</h2>
        <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-400">
          staff info
        </p>
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
          <li><a href="mailto:0xc.devs@gmail.com" target="_blank" className="hover:text-black dark:hover:text-white transition">
            Email
          </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
