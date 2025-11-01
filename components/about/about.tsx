import Image from "next/image";
import { CodeXmlIcon, UserIcon } from "lucide-react";
import SkillList from "./skill-list";
import DownloadResume from "./download-resume";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center space-y-4">
        <Image src="/resume.png" alt="resume" width={400} height={600} />
        <DownloadResume />
      </div>
      <div className="flex flex-col justify-start space-y-6">
        <div>
          <h2 className="flex items-center text-xl font-semibold gap-2 pb-3">
            Profile
            <UserIcon className="w-5 h-5 text-muted-foreground" />
          </h2>
          <p className="text-muted-foreground ">
            Software Developer with a passion for building scalable, efficient,
            and user-friendly applications. Experienced in full-stack
            development with React, Next.js, TypeScript, and C#.
          </p>
        </div>

        <div>
          <h2 className="flex items-center text-xl font-semibold gap-2 pb-3">
            Skills
            <CodeXmlIcon className="w-5 h-5 text-muted-foreground" />
          </h2>
          <SkillList />
        </div>
      </div>
    </div>
  );
};

export default About;
