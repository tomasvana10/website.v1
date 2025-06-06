"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 789.147632,
          },
        },
        color: {
          value: theme === "dark" ? "#ffffff" : "#000000",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.489,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2 },
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false,
          },
        },
        links: {
          enable: false,
          distance: 150,
          color: theme === "dark" ? "#ffffff" : "#000000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.15,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
          bounce: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
          resize: {
            enable: false,
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            particles_nb: 4,
          },
          bubble: {
            distance: 83.916,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3,
          },
        },
      },
      retina_detect: true,
      zLayers: 100,
    }),
    [theme]
  );

  if (init) {
    return (
      <div className="absolute z-[-50]">
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <></>;
}
