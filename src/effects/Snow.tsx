export default function Snow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10px] h-2 w-2 animate-snow rounded-full bg-white opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
