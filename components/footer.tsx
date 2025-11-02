export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ryan Jardine - Built with Next.js, Tailwind
        CSS, and shadcn/ui.
      </div>
    </footer>
  );
}
