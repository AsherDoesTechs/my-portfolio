export default function Certifications() {
  const certifications = [
    {
      title: "Computer Systems Servicing NCII",
      tech: "HTML • CSS • JavaScript",
      position: "Student / Completer",
      link: "/img/certificates/NCII.jpg",
    },
    {
      title: "Virtual AI Camp 2025",
      tech: "React • Hooks • State Management",
      position: "Participant",
      link: "/img/certificates/Daffodil.png",
    },
    {
      title: "Databiz Conference 2024",
      tech: "Node.js • APIs • Database Integration",
      position: "Participant",
      Applicable: "Not Applicable",
      // no link
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{cert.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{cert.tech}</p>
            <p className="text-xs text-gray-500 mb-2">{cert.position}</p>
            {/* Optional Applicable */}
            {cert.Applicable && (
              <h2 className="font-semibold mb-2">{cert.Applicable}</h2>
            )}

            {/* Only show View Certification button if link exists */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View Certification →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
