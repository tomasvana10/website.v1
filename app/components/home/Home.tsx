"use client";
import Projects from "./section/Projects";
import useVisibility from "@/app/hooks/useVisibility";
import About from "./section/About";
import Contact from "./section/Contact";
import SectionHeader from "./section/SectionHeader";

const sections = [About, Projects, Contact]; // add Experience after About when possible
const responseDelayInMS = 100;

export default function Home() {
  const { visibility, ref } = useVisibility<HTMLDivElement>(sections.length, responseDelayInMS);

  return (
    <div className="flex flex-col gap-24 mt-12 mb-24">
      {/* note: mt is smaller due to navbar hiding making the space above the first section too large */}
      {sections.map((SectionComponent, index) => {
        return (
          <div
            key={index}
            ref={(el) => {
              ref.current[index] = el;
            }}
            className={`transition-all duration-700 ${
              visibility[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}>
            <section>
              <SectionHeader name={SectionComponent.displayName} number={index + 1} />
              <SectionComponent />
            </section>
          </div>
        );
      })}
    </div>
  );
}
