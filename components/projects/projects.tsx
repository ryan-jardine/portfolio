import { FolderIcon } from "lucide-react";
import PlaceholderProject from "./placeholder-project";
import ProjectList from "./project-list";

const Projects = () => {
  return (
    <div className="py-12">
      <h2 className="flex items-center text-xl font-semibold gap-2 mb-6">
        Projects
        <FolderIcon className="w-5 h-5 text-muted-foreground" />
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectList />
        <PlaceholderProject />
      </div>
    </div>
  );
};

export default Projects;
