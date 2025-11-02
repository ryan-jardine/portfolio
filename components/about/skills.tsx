import { CodeXmlIcon } from "lucide-react";
import SkillList from "./skill-list";

const Skills = () => {
  return (
    <div>
      <h2 className="flex items-center text-xl font-semibold gap-2 pb-3">
        Skills
        <CodeXmlIcon className="w-5 h-5 text-muted-foreground" />
      </h2>
      <SkillList />
    </div>
  );
};

export default Skills;
