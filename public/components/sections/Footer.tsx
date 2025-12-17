export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
      © {currentYear} Asher Basco. All rights reserved.
    </footer>
  );
}
