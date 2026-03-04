export default function CaseStudy() {

  return (

    <section className="max-w-5xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-semibold mb-12">
        Architecture Case Study
      </h2>

      <div className="space-y-10">

        <div
          className="
          bg-zinc-900/80
          border border-zinc-800
          rounded-xl
          p-8
          transition-all duration-300
          hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
          "
        >

          <h3 className="font-semibold mb-2">
            Legacy Mortgage Platform Modernization
          </h3>

          <p className="text-gray-400 text-sm">

            Transformation of a legacy mainframe-based mortgage platform
            into a scalable cloud-native architecture.

          </p>

          <div className="flex gap-2 mt-4 flex-wrap">

            <span className="text-xs px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
              Mainframe
            </span>

            <span className="text-xs px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
              Microservices
            </span>

            <span className="text-xs px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
              Event Driven
            </span>

            <span className="text-xs px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
              Cloud Native
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}