"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const usingSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (usingSafari) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [router]);

  return null;
}
