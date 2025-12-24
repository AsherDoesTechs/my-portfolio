"use client";

import { useEffect, useState } from "react";

export type EventTheme =
  | "christmas"
  | "newyear"
  | "halloween"
  | "birthday"
  | "default";

export function useEventTheme() {
  const [theme, setTheme] = useState<EventTheme>("default");

  useEffect(() => {
    // 🔧 MANUAL OVERRIDE (for testing)
    const override = localStorage.getItem("event-theme");
    if (override) {
      setTheme(override as EventTheme);
      return;
    }

    // 🗓 Automatic detection
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    if (month === 1 && day === 14) {
      setTheme("birthday");
    } else if (month === 12 && day >= 20 && day <= 26) {
      setTheme("christmas");
    } else if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
      setTheme("newyear");
    } else if (month === 10 && day >= 25 && day <= 31) {
      setTheme("halloween");
    } else {
      setTheme("default");
    }
  }, []);

  return theme;
}
