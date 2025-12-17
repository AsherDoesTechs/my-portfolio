interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  message: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  message,
}: TestimonialProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">“{message}”</p>

      <div className="border-t pt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-500">
          {role} • {company}
        </p>
      </div>
    </div>
  );
}
