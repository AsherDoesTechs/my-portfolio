"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("/public/script.js");
    } 
}, []); 