"use client";

interface DevThemeButtonsProps {
  themes: string[];
}

export default function DevThemeButtons({ themes }: DevThemeButtonsProps) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-md p-2 z-50 hidden">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => {
            localStorage.setItem("event-theme", t);
            window.location.reload();
          }}
          className="block text-sm px-3 py-1 hover:bg-gray-100"
        >
          {t}
        </button>
      ))}

      {/* Birthday test button */}
      <button
        onClick={() => {
          localStorage.setItem("birthday-test-mode", "true");
          window.location.reload();
        }}
        className="block text-sm px-3 py-1 mt-2 bg-yellow-200 hover:bg-yellow-300 rounded"
      >
        Fast-forward to 10s before Birthday
      </button>
    </div>
  );
}
