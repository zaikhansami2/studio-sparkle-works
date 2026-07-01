import { useEffect } from "react";

export function SmokeBackground() {
  useEffect(() => {
    if (document.getElementById("samia-smoke-script")) return;
    const s = document.createElement("script");
    s.id = "samia-smoke-script";
    s.src = "/smoke-streams.js";
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <canvas
      id="samia-smoke-canvas"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-black"
      aria-hidden
    />
  );
}
