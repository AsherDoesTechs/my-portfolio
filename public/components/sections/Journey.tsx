"use client";

export default function Journey() {
  const journeyData = [
    { time: "July 2023 - Present", title: "Computer Systems Servicing NCII" },
    { time: "2023", title: "Hello World! 🌟" },
    { time: "2023", title: "First Stock Management Inventory in Java" },
    { time: "2024", title: "First GUI in Java" },
    { time: "2024", title: "First Website 🌐" },
    { time: "2025", title: "Ongoing Projects & Continuous Improvement" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>

      {/* Horizontal Timeline */}
      <div className="relative flex items-center justify-between">
        {/* Flow line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0" />

        {journeyData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center z-10 text-center"
          >
            {/* Dot */}
            <div className="w-4 h-4 bg-black rounded-full mb-2" />

            {/* Minimalist text */}
            <span className="text-xs text-gray-500">{item.time}</span>
            <span className="text-sm font-medium mt-1">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
