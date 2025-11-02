"use client";
import { Button } from "./ui/button";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ryan_Jardine_Resume.pdf";
    link.click();
  };

  return (
    <Button onClick={handleDownload} className="cursor-pointer">
      Download Resume
    </Button>
  );
};

export default DownloadResume;
