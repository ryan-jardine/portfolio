import Image from "next/image";
import { GithubIcon } from "../ui/icons/lucide-github";
import { Button } from "../ui/button";

interface ProjectDecription {
  name: string;
  description: string;
  github: string;
  src: string;
  alt: string;
}

const projects: ProjectDecription[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js, React, and Tailwind CSS. Features light/dark mode, smooth section navigation, and reusable components.",
    github: "https://github.com/ryan-jardine/portfolio",
    src: "/portfolio.png",
    alt: "Screenshot of portfolio website",
  },
];
const ProjectList = () => {
  return projects.map((project) => (
    <div
      className="rounded-xl border border-border/50 p-4 hover:shadow-lg transition-shadow"
      key={project.name}
    >
      <Image
        src={project.src}
        alt={project.alt}
        width={600}
        height={400}
        className="rounded-md mb-3"
      />
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-lg font-semibold">{project.name}</h3>

        <Button
          size="sm"
          asChild
          className="flex items-center gap-2 hover:bg-muted transition-colors mb-1"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
      <p className="text-muted-foreground text-sm mt-1">
        {project.description}
      </p>
    </div>
  ));
};

export default ProjectList;
