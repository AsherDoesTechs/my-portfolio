"use client";

import { useEffect, useState } from "react";

export function useBirthdayCountdown(theme: string, testMode = false) {
  const [countdown, setCountdown] = useState<string | null>(null);
  const [isBirthday, setIsBirthday] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (theme !== "birthday") {
      setCountdown(null);
      setIsBirthday(false);
      setVisible(false);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    let fakeNow = new Date();

    if (testMode) {
      fakeNow.setMonth(0);
      fakeNow.setDate(13);
      fakeNow.setHours(23, 59, 50);
    }

    const updateCountdown = () => {
      const now = testMode ? fakeNow : new Date();
      const birthday = new Date(now.getFullYear(), 0, 14);
      const startCountdown = new Date(now.getFullYear(), 0, 13, 0, 0, 0);

      if (now < startCountdown || now >= birthday) {
        setCountdown(null);
        setIsBirthday(now >= birthday);
        setVisible(false);
        clearInterval(interval);
        return;
      }

      const diff = birthday.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${hours.toString().padStart(2, "0")}h ${minutes
          .toString()
          .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
      );
      setVisible(true);

      if (testMode) fakeNow = new Date(fakeNow.getTime() + 1000);
    };

    updateCountdown();
    interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [theme, testMode]);

  return { countdown, isBirthday, visible };
}
