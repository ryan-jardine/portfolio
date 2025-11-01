"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export default function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { mounted } = useThemeToggle();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    // avoid rendering icons until theme is known
    return (
      <Button variant="outline" size="icon" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="transition-colors duration-300 cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
}
