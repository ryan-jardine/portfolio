"use client";

import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/70">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
        <a href="#home" className="font-semibold text-lg text-primary">
          Ryan Jardine
        </a>
        <div className="flex items-center gap-5">
          <a
            href="#projects"
            className="text-sm hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button asChild size="sm">
            <a href="/RyanJardine_Resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
