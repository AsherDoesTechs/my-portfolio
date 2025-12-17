export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-600 max-w-xl">
          Technologies I use to design, build, and ship reliable web
          applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold mb-4">Frontend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>HTML</li>
            <li>CSS (Tailwind, modern layouts)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold mb-4">Backend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Node.js</li>
            <li>Java</li>
            <li>PHP</li>
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>

        {/* Tools & Workflow */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold mb-4">Tools & Workflow</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Agile / Iterative Development</li>
            <li>Code Reviews & Best Practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
