import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div>
        <h1 className="text-5xl font-bold mb-4">Asher Basco</h1>
        <p className="text-xl text-gray-600 mb-8">
          I build web experiences that work seamlessly, feel effortless, and
          help bring ideas to life online.
        </p>

        <a
          href="/Basco_Asher_M_CV.pdf"
          download
          className="inline-block border border-black px-6 py-3 rounded-md
                     hover:bg-black hover:text-white transition"
        >
          Download CV
        </a>

        <p className="text-sm text-gray-500 mt-4">PDF • Updated 2025</p>
      </div>

      {/* Right */}
      <div className="flex justify-center relative">
        {/* Soft background gradient */}
        <div className="absolute inset-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[40%] -z-10" />

        {/* Shadow layer behind the image */}
        <div className="absolute inset-0 w-72 h-72 rounded-[40%] bg-black/10 blur-3xl -z-20"></div>

        {/* Hero Image */}
        <div className="relative w-72 h-72">
          <Image
            src="/img/Asher_Basco.jpg"
            alt="Asher Basco"
            className="rounded-[10%] object-cover"
            fill
            priority // Added priority prop
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
