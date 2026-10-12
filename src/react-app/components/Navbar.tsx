import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, Sun } from "lucide-react";
import { BUSINESS, SERVICES } from "@/react-app/lib/business";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  const links = [{ name: "Home", path: "/" }, ...SERVICES.map(s => ({ name: s.shortName, path: s.path }))];
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:p-4">Skip to content</a>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white"><Sun aria-hidden="true" className="h-6 w-6" /></span>
            <span><span className="block text-sm font-black sm:text-lg">{BUSINESS.name}</span><span className="block text-xs font-semibold text-primary">Exterior Cleaning</span></span>
          </Link>
          <div className="hidden xl:flex items-center gap-1">
            {links.map(link => <NavLink end key={link.path} to={link.path} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}>{link.name}</NavLink>)}
          </div>
          <Link to="/estimate" className="hidden rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white sm:inline-flex">Free Quote</Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)} className="rounded-xl p-3 xl:hidden">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
        {open && <div id="mobile-navigation" className="border-t py-4 xl:hidden" onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}>
          {links.map(link => <NavLink end key={link.path} to={link.path} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-xl px-4 py-3 font-semibold ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}>{link.name}</NavLink>)}
          <Link to="/estimate" onClick={() => setOpen(false)} className="mt-3 block rounded-xl bg-secondary px-4 py-3 text-center font-bold text-white">Get a Free Quote</Link>
        </div>}
      </nav>
    </header>
  </>;
}

