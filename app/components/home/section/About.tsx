import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { CardWrapper } from "../../layout/Wrappers";
import { Quote } from "lucide-react";

const Technology = {
  familiar: [
    { displayName: "Python", iconName: "Python", hasColouredVariant: true },
    { displayName: "JavaScript", iconName: "JavaScript", hasColouredVariant: true },
    { displayName: "Git", iconName: "Git", hasColouredVariant: true },
    { displayName: "Markdown", iconName: "Markdown", hasColouredVariant: false },
    { displayName: "GitHub", iconName: "GitHub", hasColouredVariant: false },
    { displayName: "HTML", iconName: "HTML5", hasColouredVariant: true },
    { displayName: "VSCode", iconName: "VSCode", hasColouredVariant: true },
    { displayName: "PyPI", iconName: "PyPI", hasColouredVariant: true },
    { displayName: "TypeScript", iconName: "TypeScript", hasColouredVariant: true },
    { displayName: "CSS", iconName: "CSS3", hasColouredVariant: true },
    { displayName: "TailwindCSS", iconName: "tailwindcss", hasColouredVariant: true },
  ],
  learning: [
    { displayName: "next.js", iconName: "nextjs", hasColouredVariant: false },
    { displayName: "React", iconName: "React", hasColouredVariant: true },
    { displayName: "NodeJS", iconName: "nodejs", hasColouredVariant: true },
    { displayName: "Vercel", iconName: "Vercel", hasColouredVariant: false },
    { displayName: "Flutter", iconName: "Flutter", hasColouredVariant: true },
    { displayName: "Dart", iconName: "Dart", hasColouredVariant: true },
  ],
  wantToLearn: [
    { displayName: "Rust", iconName: "Rust", hasColouredVariant: false },
    { displayName: "C", iconName: "C", hasColouredVariant: true },
    { displayName: "C++", iconName: "CPlusPlus", hasColouredVariant: true },
    { displayName: "Java", iconName: "Java", hasColouredVariant: true },
    { displayName: "MySQL", iconName: "MySQL", hasColouredVariant: true },
  ],
};

export default function About() {
  return (
    <section>
      <SectionHeader name="About" number={1} />
      <CardWrapper>
        <p>
          Hello! My name is <span className="inline-block whitespace-pre font-bold">{" 🇦🇺 Tomas 🇨🇿 "}</span>{" "}
          and I enjoy coding open source things ranging from niche tools all the way to websites and games,
          using a variety of programming languages.
        </p>
        <p>
          I first gained an interest for programming in 2023, when I began learning Python and the GUI library
          Tkinter. Since then, I have expanded my knowledge of coding to various other technologies.
        </p>
        <p>
          The first major project I completed was a{" "}
          <Link
            id="firstFocusableContent"
            className="text-blue-400"
            href="https://github.com/tomasvana10/xpuz">
            procedural crossword generator
          </Link>{" "}
          which I designed with Python and Flask. It is complete with a full usage manual and code reference
          on{" "}
          <Link className="text-blue-400" href="https://xpuz.readthedocs.io/en/latest/">
            ReadTheDocs
          </Link>
          . You should check it out!
        </p>
        <div className="stats shadow">
          <div className="stat">
            <Quote className="fill-current size-10" />
            <div className="stat-title">My favourite quote</div>
            <div className="stat-value text-lg whitespace-normal">
              It is possible to believe that all the human mind has ever accomplished is but the dream before
              the awakening.
            </div>
            <div className="stat-desc">― H.G. Wells</div>
          </div>
        </div>
        <h2 className="text-lg text-black dark:text-white italic">Technologies I am...</h2>
        <div className="join join-vertical w-full">
          <TechnologyAccordion type="familiar" accordionLabel="Familiar with" />
          <TechnologyAccordion type="learning" accordionLabel="Learning or have partial knowledge in" />
          <TechnologyAccordion type="wantToLearn" accordionLabel="Aiming to learn in the future" />
        </div>
        {/*
        <div className="card-actions justify-start mt-4">
          <button className="btn btn-outline">View my resume</button>
        </div>
         */}
      </CardWrapper>
    </section>
  );
}

function TechnologyAccordion({
  type,
  accordionLabel,
}: {
  type: keyof typeof Technology;
  accordionLabel: string;
}) {
  return (
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="accordion-1" defaultChecked={type === "familiar"} />
      <div className="collapse-title text-xl font-medium">{accordionLabel}</div>
      <div className="collapse-content max-h-40 overflow-auto">
        <Technologies type={type} />
      </div>
    </div>
  );
}

function Technologies({ type }: { type: keyof typeof Technology }) {
  return (
    <div className="flex flex-wrap gap-4">
      {Technology[type].map(({ displayName, iconName, hasColouredVariant }, index: number) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <i
            className={`devicon-${iconName.toLowerCase()}-plain ${
              hasColouredVariant ? "colored" : ""
            } text-2xl`}></i>
          <div className="badge dark:badge-neutral">{displayName}</div>
        </div>
      ))}
    </div>
  );
}
