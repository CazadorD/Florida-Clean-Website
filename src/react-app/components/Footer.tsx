import { Phone } from "lucide-react";
import LogoMark from "@/react-app/components/LogoMark";
import { BUSINESS } from "@/react-app/lib/business";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-12 pb-28 lg:pb-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <LogoMark className="w-10 h-10" />
          <span className="text-xl font-bold text-white">Florida SunRinse</span>
        </div>
        <a href={BUSINESS.phoneHref} className="mb-3 inline-flex items-center gap-2 text-2xl font-extrabold text-white hover:text-primary">
          <Phone aria-hidden="true" className="w-6 h-6" /> {BUSINESS.phone}
        </a>
        <p className="text-white/60 text-sm mb-1">Driveways · Sidewalks · House Washing · Fences · Concrete Sealing</p>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Florida SunRinse. Operated by Multiservicios Elite LLC. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center gap-4 text-xs text-white/60"><a href="/privacy" className="underline">Privacy</a><a href="/terms" className="underline">Terms of Service</a></div>
      </div>
    </footer>
  );
}
