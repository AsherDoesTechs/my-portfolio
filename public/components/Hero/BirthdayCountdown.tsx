"use client";

import { useEffect, useState } from "react";

interface BirthdayCountdownProps {
  countdown: string | null;
  isBirthday: boolean;
  visible: boolean;
}

export default function BirthdayCountdown({
  countdown,
  isBirthday,
  visible,
}: BirthdayCountdownProps) {
  const [display, setDisplay] = useState(countdown);

  useEffect(() => {
    setDisplay(countdown);
  }, [countdown]);

  // Show "Happy Birthday!" when it's birthday
  if (isBirthday)
    return (
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-3xl font-extrabold text-yellow-400 animate-bounce">
          🎉 Happy Birthday! 🎉
        </p>
      </div>
    );

  // Show countdown only if visible
  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-4 transition-opacity duration-500 opacity-100">
      <p className="text-4xl font-bold text-white mb-1">{display}</p>
      <p className="text-lg text-gray-300">until your birthday!</p>
    </div>
  );
}
