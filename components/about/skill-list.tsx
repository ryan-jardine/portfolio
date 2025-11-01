import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface Skill {
  name: string;
  src: string;
  alt: string;
}

// Frontend skills
const frontendSkills: Skill[] = [
  { name: "Typescript", src: "/typescript.svg", alt: "Typescript" },
  { name: "Next.js", src: "/next-js.svg", alt: "Next.js" },
  { name: "React", src: "/react.svg", alt: "React" },
  { name: "Redux", src: "/redux.svg", alt: "Redux" },
];

// Backend skills
const backendSkills: Skill[] = [
  { name: "C#", src: "/c-sharp.svg", alt: "C#" },
  { name: ".NET", src: "/dotnet.svg", alt: ".NET" },
  { name: "PostgresSQL", src: "/postgresql.svg", alt: "Postgres" },
];

// Tools / Others
const toolsSkills: Skill[] = [
  { name: "Docker", src: "/docker.svg", alt: "Docker" },
  { name: "Github", src: "/github.svg", alt: "Github" },
  { name: "Nginx", src: "/nginx.svg", alt: "Nginx" },
];

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => {
  return (
    <div>
      <h6 className="text-sm font-semibold mb-2">{title}</h6>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            className={`
              flex items-center justify-center
              bg-gray-200 dark:bg-gray-800
              transition-transform duration-200 ease-in-out transform
              hover:scale-115 hover:shadow-lg
              rounded-lg cursor-pointer p-2
            `}
            title={skill.name}
          >
            <Image src={skill.src} alt={skill.alt} width={40} height={40} />
          </Badge>
        ))}
      </div>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <SkillCategory title="Frontend" skills={frontendSkills} />
      <SkillCategory title="Backend" skills={backendSkills} />
      <SkillCategory title="Tools" skills={toolsSkills} />
    </div>
  );
};

export default SkillList;
