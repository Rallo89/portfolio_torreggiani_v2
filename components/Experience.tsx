export default function Experience() {

  return (

    <section id="experience" className="max-w-5xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-semibold mb-10">
        Experience
      </h2>

      <div className="space-y-8">

        <div
          className="
          bg-zinc-900/80
          border border-zinc-800
          rounded-xl
          p-6
          transition-all duration-300
          hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
          hover:-translate-y-1
          "
        >

          <div className="flex justify-between items-center mb-2">

            <h3 className="text-lg font-semibold">
              Enterprise Architect
            </h3>

            <span className="text-sm text-gray-500">
              2023 — Present
            </span>

          </div>

          <p className="text-blue-400 text-sm mb-4">
            Crédit Agricole
          </p>

          <ul className="text-gray-400 space-y-2 list-disc ml-5">

            <li>
              Leading migration from legacy mainframe platform
              to cloud-native architecture
            </li>

            <li>
              Defining target architecture and modernization roadmap
            </li>

            <li>
              Coordinating architecture decisions across engineering teams
            </li>

          </ul>

        </div>

      </div>

    </section>

  );

}