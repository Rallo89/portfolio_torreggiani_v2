"use client";

export default function Navbar() {
  return (

    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <nav className="flex items-center gap-8 px-6 py-3 
      bg-zinc-900/70 backdrop-blur-md
      border border-zinc-800 rounded-full shadow-lg">

        <span className="font-semibold text-sm">
          Torreggiani
        </span>

        <a href="#about" className="text-sm text-gray-400 hover:text-white transition">
          About
        </a>

        <a href="#experience" className="text-sm text-gray-400 hover:text-white transition">
          Experience
        </a>

        <a href="#skills" className="text-sm text-gray-400 hover:text-white transition">
          Skills
        </a>

        <a href="#contact" className="text-sm text-gray-400 hover:text-white transition">
          Contact
        </a>

      </nav>

    </div>

  );
}