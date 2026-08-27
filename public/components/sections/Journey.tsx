"use client";

export default function Journey() {
  const journeyData = [
    { time: "July 2023 - Present", title: "Computer Systems Servicing NCII" },
    { time: "2023", title: "Hello World!" },
    { time: "2023", title: "First Stock Management Inventory in Java" },
    { time: "2024", title: "First GUI in Java" },
    { time: "2024", title: "First Website" },
    { time: "2025", title: "Ongoing Projects & Continuous Improvement" },
    { time: "2026", title: "Intern as a Software Engineer" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden relative border-l-2 border-gray-300 ml-4 pl-6 space-y-6">
        {journeyData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[25px] top-1 w-4 h-4 bg-black rounded-full border-2 border-white" />
            <span className="text-xs text-gray-500 block">{item.time}</span>
            <span className="text-sm font-medium mt-1 block">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0" />
        <div className="relative flex items-start justify-between">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center z-10 w-24"
            >
              <div className="w-4 h-4 bg-black rounded-full mb-2" />
              <span className="text-xs text-gray-500 leading-tight">
                {item.time}
              </span>
              <span className="text-sm font-medium mt-1 leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
