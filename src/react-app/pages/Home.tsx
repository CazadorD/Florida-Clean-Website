import { Link } from "react-router";
import { ArrowRight, Droplets, MapPin, MessageSquare, Sun } from "lucide-react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import HeroSun from "@/react-app/components/HeroSun";
import { SERVICES } from "@/react-app/lib/business";

export default function HomePage() {
  return <div className="min-h-screen bg-background"><Navbar /><main id="main-content">
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-cyan-50 to-background pb-16 pt-36 sm:pb-24 sm:pt-44">
      <HeroSun /><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div><p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary"><Sun aria-hidden="true" className="h-4 w-4" /> Exterior cleaning in Florida</p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">A fresh start for<br /><span className="text-primary">your outdoor spaces.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Driveways, sidewalks, siding, and fences. Tell us what needs cleaning, and we'll review your property details before providing a quote.</p>
          <Link to="/estimate" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 font-bold text-white shadow-lg">Get Your Free Quote <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
          <p className="mt-4 text-sm text-muted-foreground">No obligation. Scope and price agreed before work begins.</p>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center gap-3"><span className="rounded-2xl bg-primary/10 p-3 text-primary"><Droplets aria-hidden="true" className="h-7 w-7" /></span><h2 className="text-2xl font-bold">What can we clean?</h2></div>
          <div className="space-y-3">{SERVICES.map(service => <Link key={service.id} to={service.path} className="flex items-center justify-between gap-4 rounded-2xl bg-muted/60 p-4 hover:bg-primary/10"><span className="font-semibold">{service.name}</span><ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" /></Link>)}</div>
          <p className="mt-5 text-sm text-muted-foreground">Availability depends on your location, surface condition, and access.</p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-semibold text-primary">OUR SERVICES</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Care for the spaces you use every day.</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map(service => <article key={service.id} className="flex flex-col rounded-3xl border border-border bg-white p-6"><h3 className="text-xl font-bold">{service.name}</h3><p className="mb-6 mt-3 flex-1 leading-relaxed text-muted-foreground">{service.description}</p><Link to={service.path} className="inline-flex items-center gap-2 font-semibold text-primary">View service <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></article>)}</div>
    </section>
    <section className="bg-primary/5 py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-black">A straightforward way to get started.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">{[
        { icon: MessageSquare, title: "Tell us what you need", description: "Choose your surfaces and share your city or ZIP code through the quote form." },
        { icon: MapPin, title: "We review the details", description: "We confirm the service area and may ask for photos, measurements, or a property visit." },
        { icon: Droplets, title: "Agree on the work", description: "We discuss the scope, price, and scheduling with you before any work begins." },
      ].map((step, index) => <div key={step.title}><step.icon aria-hidden="true" className="mb-4 h-7 w-7 text-primary" /><h3 className="text-xl font-bold">{index + 1}. {step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p></div>)}</div>
    </div></section>
    <section className="px-4 py-20 text-center"><h2 className="text-3xl font-black">Have a project in mind?</h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">Start with a few details. You don't need exact measurements to ask for a quote.</p><Link to="/estimate" className="mt-7 inline-flex rounded-full bg-secondary px-7 py-4 font-bold text-white">Request a Free Quote</Link></section>
  </main><Footer /></div>;
}
