import { useEffect, useState } from "react";

export function useThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // prevent mismatch between server/client rendering
  useEffect(() => setMounted(true), []);

  return { mounted };
}
