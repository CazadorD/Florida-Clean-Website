import { Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">FLORIDA CLEAN</span>
        </div>
        <p className="text-white/60 text-sm mb-1">Proudly serving all of Central Florida</p>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Florida Clean Pressure Washing Co. All rights reserved. Fully Licensed & Insured.
        </p>
      </div>
    </footer>
  );
}
