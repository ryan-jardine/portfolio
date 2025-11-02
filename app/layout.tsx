import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan Jardine | Portfolio",
  description:
    "Full-Stack Developer specializing in TypeScript, React, and .NET",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
