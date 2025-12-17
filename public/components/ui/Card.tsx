import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, icon, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}
