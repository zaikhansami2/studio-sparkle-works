import samiaLogo from "@/assets/samia-logo.png.asset.json";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-card/40 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={samiaLogo.url} alt="Samia Studios" className="h-10 w-10 rounded-md" />
            <span className="font-display text-lg font-bold">
              SAMIA <span className="text-primary">STUDIOS</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A Hyderabad-based digital studio building websites, SaaS, and e-commerce
            experiences that ship results.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Studio
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Hyderabad, Pakistan</p>
          <p className="text-sm text-muted-foreground">Mon–Fri · 10 AM – 6 PM</p>
          <a href="mailto:hello@samiastudios.com" className="mt-2 inline-block text-sm text-primary hover:underline">
            hello@samiastudios.com
          </a>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Follow
          </p>
          <div className="mt-3 flex gap-3">
            {[Instagram, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Samia Studios. All rights reserved.
      </p>
    </footer>
  );
}
