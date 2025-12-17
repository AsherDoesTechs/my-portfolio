import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer content WITH top border */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        <p>© {currentYear} Asher Basco. All rights reserved.</p>
      </footer>
    </>
  );
}
