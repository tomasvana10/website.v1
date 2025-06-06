import Link from "next/link";
import { CardWrapper } from "../../layout/Wrappers";
import { Quote } from "lucide-react";

const technologies = {
  familiar: [
    { display: "Python", icon: "Python", coloured: true },
    { display: "JavaScript", icon: "JavaScript", coloured: true },
    { display: "Git", icon: "Git", coloured: true },
    { display: "Markdown", icon: "Markdown", coloured: false },
    { display: "GitHub", icon: "GitHub", coloured: false },
    { display: "HTML", icon: "HTML5", coloured: true },
    { display: "VSCode", icon: "VSCode", coloured: true },
    { display: "PyPI", icon: "PyPI", coloured: true },
    { display: "TypeScript", icon: "TypeScript", coloured: true },
    { display: "CSS", icon: "CSS3", coloured: true },
    { display: "TailwindCSS", icon: "tailwindcss", coloured: true },
  ],
  learning: [
    { display: "next.js", icon: "nextjs", coloured: false },
    { display: "React", icon: "React", coloured: true },
    { display: "NodeJS", icon: "nodejs", coloured: true },
    { display: "Vercel", icon: "Vercel", coloured: false },
    { display: "Flutter", icon: "Flutter", coloured: true },
    { display: "Dart", icon: "Dart", coloured: true },
  ],
  wantToLearn: [
    { display: "Rust", icon: "Rust", coloured: false },
    { display: "C", icon: "C", coloured: true },
    { display: "C++", icon: "CPlusPlus", coloured: true },
    { display: "Java", icon: "Java", coloured: true },
    { display: "MySQL", icon: "MySQL", coloured: true },
  ],
};

type Technology = keyof typeof technologies;

export default function About() {
  return (
    <CardWrapper>
      <p>
        Hello! My name is <span className="inline-block whitespace-pre font-bold">{" 🇦🇺 Tomas 🇨🇿 "}</span> and
        I enjoy coding open source things ranging from niche tools all the way to websites and games, using a
        variety of programming languages.
      </p>
      <p>
        I first gained an interest for programming in 2023, when I began learning Python and the GUI library
        Tkinter. Since then, I have expanded my knowledge of coding to various other technologies.
      </p>
      <p>
        The first major project I completed was a{" "}
        <Link id="firstFocusableContent" className="text-blue-400" href="https://github.com/tomasvana10/xpuz">
          procedural crossword generator
        </Link>{" "}
        which I designed with Python and Flask. It is complete with a full usage manual and code reference on{" "}
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
  );
}

About.displayName = "About";

function TechnologyAccordion({ type, accordionLabel }: { type: Technology; accordionLabel: string }) {
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

function Technologies({ type }: { type: Technology }) {
  return (
    <div className="flex flex-wrap gap-4">
      {technologies[type].map(({ display, icon, coloured }, index: number) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <i className={`devicon-${icon.toLowerCase()}-plain ${coloured ? "colored" : ""} text-2xl`}></i>
          <div className="badge dark:badge-neutral">{display}</div>
        </div>
      ))}
    </div>
  );
}
