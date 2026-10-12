import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import HeroSun from "@/react-app/components/HeroSun";
import ProjectGallery from "@/react-app/components/ProjectGallery";
import type { Service } from "@/react-app/lib/business";
export default function ServicePage({ service }: { service: Service }) {
  return <div className="min-h-screen bg-background"><Navbar /><main id="main-content">
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-cyan-50 to-background pb-16 pt-36 sm:pt-44"><HeroSun /><div className="relative mx-auto max-w-5xl px-4 sm:px-6">
      <p className="mb-4 font-semibold text-primary">EXTERIOR CLEANING</p><h1 className="hero-title max-w-2xl text-4xl font-black sm:text-5xl">{service.name}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{service.detail}</p>
      <Link to={`/estimate?service=${service.id}`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 font-bold text-white">Request a Free Quote <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
    </div></section>
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6"><div className="rounded-3xl border border-border bg-white p-6 sm:p-10"><h2 className="text-2xl font-bold">Before we get started</h2><ul className="mt-6 space-y-5">{service.notes.map(note => <li key={note} className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" /><span>{note}</span></li>)}</ul><p className="mt-8 border-t pt-6 leading-relaxed text-muted-foreground">Results vary with surface condition, age, and staining. We discuss the expected scope and limitations before you decide to book.</p></div></section>
    {(service.id === "driveway" || service.id === "sidewalk") && <ProjectGallery service={service.id} />}
  </main><Footer /></div>;
}
