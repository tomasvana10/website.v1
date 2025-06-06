"use client";
import { ParallaxBanner, EasingPreset, ParallaxProvider } from "react-scroll-parallax";
import "../../css/ClipText.css";

export default function Banner() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: "/images/hubble.jpg",
            opacity: [1, 0],
            translateY: [-10, 20],
            shouldAlwaysCompleteAnimation: true,
            easing: EasingPreset.easeInOut,
          },
          {
            speed: -10,
            translateY: [-10, 0],
            scale: [1, 1],
            shouldAlwaysCompleteAnimation: true,
            easing: EasingPreset.easeInQuart,
            children: (
              <div className="absolute inset-1 flex items-center justify-center flex-col">
                <h1 className="text-5xl sm:text-7xl md:text-8xl clip-text">Tomas Vana</h1>
              </div>
            ),
          },
        ]}
        className="aspect-[5/11] min-[750px]:aspect-[8/11] min-[1000px]:aspect-[2/1]"
      />
    </ParallaxProvider>
  );
}
