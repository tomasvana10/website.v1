import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { CardWrapper } from "../../layout/Wrappers";
import { GithubIcon } from "../../misc/SVG";
import Link from "next/link";
import "../../../css/SlantedText.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Loading from "../../misc/Loading";
import { ExternalLink } from "lucide-react";

const projects: {
  name: string;
  description: string;
  technologyBadges: string[];
  srcCodeLink: null | string;
  checkItOutLink: null | string;
  hasPreviewImage: boolean;
  hasLightImage: boolean;
}[] = [
  {
    name: "website",
    description: "My personal website, which you are viewing right now.",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel"],
    srcCodeLink: "https://github.com/tomasvana10/website",
    checkItOutLink: "https://tomasvana.com",
    hasPreviewImage: false,
    hasLightImage: false,
  },
  {
    name: "ausvote",
    description: "A voting website for the geopolitical Minecraft server EarthMC.",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel", "PostgreSQL", "NextAuth.js"],
    srcCodeLink: null,
    checkItOutLink: "https://elections.australiaemc.net",
    hasPreviewImage: true,
    hasLightImage: true,
  },
  {
    name: "wordlemini",
    description: "A simple version of Wordle made for the command line.",
    technologyBadges: ["Python", "Textual", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/wordlemini",
    checkItOutLink: null,
    hasPreviewImage: true,
    hasLightImage: false,
  },
  {
    name: "xpuz",
    description: "Play procedurally generated crosswords.",
    technologyBadges: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "CustomTkinter",
      "Flask",
      "Babel.js",
      "gettext",
      "Terser",
      "PyPI",
    ],
    srcCodeLink: "https://github.com/tomasvana10/xpuz",
    checkItOutLink: "https://tomasvana10.github.io",
    hasPreviewImage: true,
    hasLightImage: false,
  },
  {
    name: "sorting-vis",
    description: "Visualise how different sorting algorithms manage an array.",
    technologyBadges: ["Python", "CustomTkinter", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/sorting-vis",
    checkItOutLink: null,
    hasPreviewImage: false,
    hasLightImage: false,
  },
  {
    name: "commits2pdf",
    description: "Convert Git commits to a PDF.",
    technologyBadges: ["Python", "Python Argparse", "GitPython", "fpdf", "pycairo", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/commits2pdf",
    checkItOutLink: null,
    hasPreviewImage: false,
    hasLightImage: false,
  },
  {
    name: "seriescalculator-sdd",
    description: "Calculator that provides solutions for arithmetic and geometric series.",
    technologyBadges: ["Python", "CustomTkinter"],
    srcCodeLink: "https://github.com/tomasvana10/seriescalculator-sdd",
    checkItOutLink: null,
    hasPreviewImage: false,
    hasLightImage: false,
  },
  {
    name: "mastermind",
    description: "The code-breaking board game in HTML.",
    technologyBadges: ["HTML", "JavaScript", "CSS", "Jest", "Puppeteer"],
    srcCodeLink: "https://github.com/tomasvana10/mastermind-html",
    checkItOutLink: "https://tomasvana10.github.io/mastermind-html/",
    hasPreviewImage: false,
    hasLightImage: false,
  },
];

const featuredProjects = ["xpuz", "ausvote"];

export default function Projects() {
  return (
    <section>
      <SectionHeader name="Projects" number={2} />
      <CardWrapper>
        {featuredProjects
          .map((featuredName) => projects.find((project) => project.name === featuredName))
          .map((projectData, index) => (
            <FeaturedProject projectData={projectData!} key={index} />
          ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects
            .filter((project) => !featuredProjects.includes(project.name))
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((projectData, index) => (
              <RegularProject key={index} projectData={projectData} />
            ))}
        </div>
      </CardWrapper>
    </section>
  );
}

function RegularProject({ projectData }: { projectData: (typeof projects)[number] }) {
  return (
    <div className="card-bordered gap-4 relative rounded-md">
      <div className="absolute right-3 top-3">
        <ProjectLinks srcCodeLink={projectData.srcCodeLink} checkItOutLink={projectData.checkItOutLink} />
      </div>
      <div className="card-body p-6">
        <h1 className="text-xl">Project</h1>
        <h1 className="text-2xl">{projectData.name}</h1>
        <div className="card card-bordered mt-2">
          <div className="card-body p-4">{projectData.description}</div>
        </div>
        <div className="flex flex-wrap mt-4 gap-1">
          <ProjectBadges technologyBadges={projectData.technologyBadges} />
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ projectData }: { projectData: (typeof projects)[number] }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <Loading />;

  return (
    <div className="card-bordered relative flex justify-center gap-4 p-6 rounded-md max-h-[350px]">
      <div className="absolute top-3 left-3 min-[900px]:right-3 min-[900px]:left-auto z-[999]">
        <ProjectLinks srcCodeLink={projectData.srcCodeLink} checkItOutLink={projectData.checkItOutLink} />
      </div>
      {projectData.hasPreviewImage && (
        <div className="flex align-middle">
          <Image
            className="absolute inset-0 w-full h-full object-cover filter min-[900px]:relative min-[900px]:flex min-[900px]:blur-0 min-[900px]:filter-none"
            src={
              theme === "dark" || !projectData.hasLightImage
                ? `/images/previews/${projectData.name}-preview.png`
                : `/images/previews/${projectData.name}-preview-light.png`
            }
            alt={`preview image showcasing ${projectData.name}`}
            width="1000"
            height="1000"
            quality={100}
          />
          <div className="absolute inset-0 bg-base-100 dark:bg-black opacity-80 dark:opacity-75 min-[900px]:opacity-0 min-[900px]:dark:opacity-10" />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center min-[900px]:w-auto w-[90%]">
        <div className="min-[900px]:text-right">
          <h2 className="text-xl">Featured Project</h2>
          <h1 className="slanted text-3xl mb-5">
            <span>{projectData.name}</span>
          </h1>
          <div className="card card-bordered mt-4">
            <div className="card-body p-4">{projectData.description}</div>
          </div>
          <div className="flex flex-wrap justify-center min-[900px]:justify-end mt-4 gap-1">
            <ProjectBadges technologyBadges={projectData.technologyBadges} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({
  srcCodeLink,
  checkItOutLink,
}: {
  srcCodeLink: string | null;
  checkItOutLink: string | null;
}) {
  return (
    <div className="flex gap-2">
      {srcCodeLink && (
        <Link target="_blank" href={srcCodeLink}>
          <GithubIcon className="h-6 w-6 fill-current scale-[1.15] transition-transform duration-175 hover:scale-125" />
        </Link>
      )}
      {checkItOutLink && (
        <Link target="_blank" href={checkItOutLink}>
          <ExternalLink className="h-6 w-6 transition-transform duration-175 hover:scale-110" />
        </Link>
      )}
    </div>
  );
}

function ProjectBadges({ technologyBadges }: { technologyBadges: string[] }) {
  return technologyBadges.sort().map((technology, index) => (
    <div key={index} className="badge badge-ghost">
      {technology}
    </div>
  ));
}
