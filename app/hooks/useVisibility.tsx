"use client";

import { useEffect, useRef, useState } from "react";

export default function useVisibility<T extends HTMLElement>(entityCount: number, responseDelayInMS: number) {
  const [visibility, setVisibility] = useState(Array(entityCount).fill(false));
  const ref = useRef<(T | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = ref.current.indexOf(entry.target as T);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibility((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = true;
                return newVisibility;
              });
            }, responseDelayInMS);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, [responseDelayInMS]);

  return { visibility, ref };
}
