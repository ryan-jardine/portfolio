"use client";

import ModeToggle from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/70">
      <div className="max-w-5xl mx-auto flex justify-end items-center px-6 py-3">
        <div className="flex items-center gap-5">
          <a
            href="#about"
            className="text-sm hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-primary transition-colors"
          >
            Contact
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
