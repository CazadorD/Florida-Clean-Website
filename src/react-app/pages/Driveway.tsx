import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Sun,
  Palmtree,
  Clock,
  Zap,
  Truck,
  Droplets,
} from "lucide-react";
import ProjectGallery from "@/react-app/components/ProjectGallery";
import { Button } from "@/react-app/components/ui/button";
import HeroSun from "@/react-app/components/HeroSun";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

export default function DrivewayPage() {
  const benefits = ["Cleaning for dirt and organic buildup", "Concrete driveways and walking paths", "Surface condition assessed before work", "Existing cracks and damage discussed", "Scope and price agreed before cleaning", "Oil, rust, and old stains may not come out completely"];

  const surfaces = [{ name: "Concrete Driveways", desc: "Surface condition reviewed before cleaning" }, { name: "Sidewalks", desc: "Cleaning for the paths beside your property" }, { name: "Walkways", desc: "A fresh look for the path to your front door" }];

  const process = [{step: "01", title: "Share Your Project", desc: "Tell us your location and what needs cleaning."}, {step: "02", title: "Surface Assessment", desc: "We review the material, condition, access, and drainage."}, {step: "03", title: "Agree on Scope", desc: "We discuss price, scheduling, and expected results."}, {step: "04", title: "Cleaning & Review", desc: "We clean the agreed surfaces and review the results."}];

  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        <HeroSun />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
            <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L0,120Z" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-20 text-primary/15">
          <Palmtree className="hidden sm:block w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 animate-float" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-slide-left">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-md border border-secondary/20 mb-6 animate-pulse-glow max-w-full text-center">
              <span className="text-sm font-semibold text-foreground">
                Driveway & Sidewalk Cleaning
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              Driveway & Sidewalk
              <span className="hero-gradient block bg-gradient-to-r from-secondary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Pressure Washing
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Florida's heat, rain, and humidity turn driveways into stained, slippery hazards.
              We clean dirt and organic buildup from driveways and sidewalks. The method and expected results depend on the surface condition and staining.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/estimate?service=driveway">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl shadow-secondary/30 w-full sm:w-auto"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Surface Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">Driveways & Sidewalks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Free Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surfaces We Clean */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              <Droplets className="w-4 h-4" />
              Surfaces We Clean
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Every Hard Surface, <span className="text-secondary">Handled</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring the right equipment and technique for every surface type no one-size-fits-all approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface, i) => {
              const colors = [
                "from-primary to-teal-500",
                "from-secondary to-orange-500",
                "from-accent to-pink-500",
                "from-violet-500 to-purple-600",
                "from-primary to-cyan-500",
                "from-secondary to-amber-500",
              ];
              return (
                <div key={surface.name} className="bg-white rounded-3xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4`}>
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{surface.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{surface.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Sun className="w-4 h-4" />
                Why It Matters
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
                A Clean Driveway Is More Than{" "}
                <span className="text-primary">Curb Appeal</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Driveways and walking paths collect dirt and organic buildup. Cleaning can refresh their appearance. Results depend on the condition of the concrete and the type of staining.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "Driveways", label: "Concrete Surface Cleaning", color: "from-secondary to-orange-500" },
                { value: "Walkways", label: "Paths Around Your Property", color: "from-primary to-teal-500" },
                { value: "Free", label: "No-Obligation Quotes", color: "from-accent to-pink-500" },
                { value: "Agreed", label: "Scope Before Work Begins", color: "from-violet-500 to-purple-600" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-border animate-on-scroll card-lift">
                  <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Zap className="w-4 h-4" />
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              How We Get Your Driveway <span className="text-primary">Spotless</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll card-lift">
                <div className="text-5xl font-black text-secondary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal-500 to-cyan-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Palmtree className="w-40 h-40 text-white" strokeWidth={0.5} />
          </div>
          <div className="absolute bottom-10 right-10">
            <Sun className="w-32 h-32 text-white" strokeWidth={0.5} />
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready for a Driveway That Turns Heads?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free quote today. We'll assess your surface and give you transparent
            pricing with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate?service=driveway">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl">
                Get Free Driveway Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
