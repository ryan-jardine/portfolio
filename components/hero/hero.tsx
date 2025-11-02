import Image from "next/image";
import DownloadResume from "../about/download-resume";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I’m Ryan Jardine</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md">
          Full-stack developer building scalable and user-friendly web
          applications with React, Next.js, TypeScript, and C#. I love creating
          modern solutions that make a difference.
        </p>
        <Button className="cursor-pointer">Contact Me</Button>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/profile.jpg"
          alt="Ryan Jardine"
          width={300}
          height={300}
          className="rounded-full border-4 border-accent"
        />
      </div>
    </section>
  );
};

export default Hero;
