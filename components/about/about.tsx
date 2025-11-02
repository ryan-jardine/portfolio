import Image from "next/image";
import DownloadResume from "../download-resume";
import Profile from "./profile";
import Skills from "./skills";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col items-center space-y-4">
        <Image src="/resume.png" alt="resume" width={400} height={600} />
        <DownloadResume />
      </div>
      <div className="flex flex-col justify-start space-y-6">
        <Profile />
        <Skills />
      </div>
    </div>
  );
};

export default About;
