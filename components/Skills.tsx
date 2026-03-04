export default function Skills() {

  const skills = [
    "Microservices",
    "Event-Driven Architecture",
    "Domain Driven Design",
    "AWS",
    "Kubernetes",
    "Distributed Systems",
    "API Design",
    "React",
    "Java"
  ];

  return (

    <section id="skills" className="max-w-5xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-semibold mb-10">
        Architecture Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map(skill => (

          <span
            key={skill}
            className="
            text-sm
            px-3 py-1
            rounded-md
            bg-zinc-900
            border border-zinc-800
            hover:border-blue-500
            transition
            "
          >

            {skill}

          </span>

        ))}

      </div>

    </section>

  );

}