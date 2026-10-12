import { Link } from "react-router";
import { BUSINESS } from "@/react-app/lib/business";
export default function Footer() {
  return <footer className="bg-foreground px-4 py-10 text-center text-white">
    <p className="text-lg font-bold">{BUSINESS.legalName}</p>
    <p className="mt-2 text-sm text-white/80">Driveways · Sidewalks · Siding · Fences</p>
    <div className="mt-4 flex justify-center gap-6 text-sm"><Link className="underline underline-offset-4" to="/estimate">Request a quote</Link><Link className="underline underline-offset-4" to="/privacy">Privacy</Link></div>
    <p className="mt-6 text-xs text-white/70">© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
  </footer>;
}
