"use client";

export default function Hero() {

  return (

    <section className="
      max-w-6xl mx-auto
      px-6
      pt-28 md:pt-32
      pb-16
      grid md:grid-cols-2
      gap-12
      items-center
      text-center md:text-left
    ">

      <div>

        <p className="text-blue-400 mb-3 font-medium">
          Enterprise Architect
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Nicolò <span className="text-blue-400">Torreggiani</span>
        </h1>

        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          Leading cloud-native transformation programs in the banking sector,
          specializing in modernizing legacy mainframe systems into scalable
          distributed architectures.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm">
            Currently @ Crédit Agricole
          </span>
        </div>

        {/* Bottoni responsive */}

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">

          <a
            href="https://drive.google.com/file/d/1LeOHzsSSz6OgOpwr-rD1OX_71HBYFMQ-/view?usp=sharing"
            className="
              px-6 py-3
              rounded-md
              bg-gradient-to-r
              from-blue-500
              to-blue-700
              hover:from-blue-400
              hover:to-blue-600
              transition
              shadow-lg
              text-center
            "
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/nicolotorreggiani"
            className="
              px-6 py-3
              border border-zinc-700
              hover:border-blue-500
              rounded-md
              transition
              text-center
            "
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* Immagine */}

      <div className="flex justify-center mt-10 md:mt-0">

        <img
          src="/profilepic.jpg"
          className="rounded-xl shadow-2xl w-60 md:w-72"
        />

      </div>

    </section>

  );
}

//href="https://www.linkedin.com/in/nicolotorreggiani"
//"https://drive.google.com/file/d/1LeOHzsSSz6OgOpwr-rD1OX_71HBYFMQ-/view?usp=sharing"