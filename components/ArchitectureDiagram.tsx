export default function ArchitectureDiagram() {

  return (

    <section className="max-w-5xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-semibold mb-12">
        Architecture Evolution
      </h2>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="p-6 border border-zinc-800 rounded-lg text-center">
            Legacy Mainframe
          </div>

          <div className="text-accent-400 text-2xl">
            →
          </div>

          <div className="p-6 border border-accent-500 rounded-lg text-center">
            Domain Decomposition
          </div>

          <div className="text-accent-400 text-2xl">
            →
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg text-center">
            Cloud Native Platform
          </div>

        </div>

      </div>

    </section>

  );

}