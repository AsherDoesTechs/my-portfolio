"use client";

import Image from "next/image";
import { useEventTheme } from "../../hooks/useEventThemes";
import { GREETINGS } from "../../constants/greetings";
import { useBirthdayCountdown } from "../../hooks/useBirthdayCountdown";
import Snow from "@/effects/Snow";
import Fireworks from "@/effects/FireWorks";
import DevThemeButtons from "../Hero/DevThemeButtons";
import BirthdayCountdown from "../Hero/BirthdayCountdown";

export default function Hero() {
  const theme = useEventTheme();

  // Check localStorage for dev test mode
  const testMode =
    typeof window !== "undefined" &&
    !!localStorage.getItem("birthday-test-mode");

  // Destructure visible along with countdown and isBirthday
  const { countdown, isBirthday, visible } = useBirthdayCountdown(
    theme,
    testMode
  );

  return (
    <section
      className={`relative overflow-hidden transition-all duration-500
        ${theme === "christmas" && "bg-christmas text-white"}
        ${theme === "newyear" && "bg-newyear text-white"}
        ${theme === "halloween" && "bg-halloween text-white"}
        ${
          theme === "birthday" &&
          "bg-gradient-to-br from-pink-500 to-yellow-400 text-black"
        }
        ${theme === "default" && "bg-transparent text-black"}
      `}
    >
      {theme === "christmas" && <Snow />}
      {theme === "newyear" && <Fireworks />}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Asher Basco</h1>

          <p
            className={`text-xl mb-8 ${
              theme === "default" ? "text-gray-600" : "text-white/90"
            }`}
          >
            I build web experiences that work seamlessly, feel effortless, and
            help bring ideas to life online.
          </p>

          <a
            href="/Basco_Asher_M_CV.pdf"
            download
            className={`inline-block px-6 py-3 rounded-md border transition ${
              theme === "default"
                ? "border-black hover:bg-black hover:text-white"
                : "border-white hover:bg-white hover:text-black"
            }`}
          >
            Download CV
          </a>

          <p
            className={`text-sm mt-4 ${
              theme === "default" ? "text-gray-500" : "text-white/70"
            }`}
          >
            PDF • Updated 2025
          </p>

          {/* Seasonal / birthday greeting */}
          {theme !== "default" && GREETINGS[theme] && (
            <div className="mt-6 max-w-md rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="font-semibold">
                {isBirthday
                  ? GREETINGS["birthday"].title
                  : GREETINGS[theme].title}
              </p>
              <p className="mt-1 text-sm text-white/90">
                {isBirthday
                  ? GREETINGS["birthday"].message
                  : GREETINGS[theme].message}
              </p>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex flex-col items-center relative">
          <div
            className={`absolute w-72 h-72 rounded-[10%] -z-10 scale-105
              ${
                theme === "default" &&
                "bg-gradient-to-br from-gray-200 to-gray-300"
              }
              ${
                theme === "christmas" &&
                "bg-gradient-to-br from-green-700 to-green-500"
              }
              ${
                theme === "newyear" &&
                "bg-gradient-to-br from-indigo-600 to-purple-700"
              }
              ${
                theme === "halloween" &&
                "bg-gradient-to-br from-orange-600 to-black"
              }
              ${
                theme === "birthday" &&
                "bg-gradient-to-br from-pink-500 to-yellow-400"
              }
            `}
          />
          <div className="absolute w-80 h-80 rounded-[10%] bg-black/20 blur-3xl -z-20 scale-110" />

          <div className="relative w-72 h-72 rounded-[10%] overflow-hidden">
            <Image
              src="/img/Asher_Basco.jpg"
              alt="Asher Basco"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/*Pass visible along with countdown and isBirthday */}
          <BirthdayCountdown
            countdown={countdown}
            isBirthday={isBirthday}
            visible={visible}
          />
        </div>
      </div>

      <DevThemeButtons
        themes={["default", "christmas", "newyear", "halloween", "birthday"]}
      />
    </section>
  );
}
