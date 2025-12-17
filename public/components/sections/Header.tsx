import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-0 py-0">
      <div className="flex items-center">
        <Image
          src="/Logo.png"
          alt="Untouchable Logo"
          width={140}
          height={10}
          priority
        />
      </div>
    </header>
  );
}
