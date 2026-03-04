"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="fixed top-0 w-full backdrop-blur bg-black/60 border-b border-zinc-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="font-semibold">
          Torreggiani
        </span>

        {/* Desktop */}

        <nav className="hidden md:flex gap-8 text-sm text-gray-400">

          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

        </nav>

        {/* Mobile button */}

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile dropdown */}

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-400 bg-black border-t border-zinc-800">

          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </header>

  );
}