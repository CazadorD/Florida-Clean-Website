import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Shield,
  CheckCircle2,
  Sun,
  Palmtree,
  Star,
  Clock,
  Zap,
  Sparkles,
  Home,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";

export default function HouseWashingPage() {
  const benefits = [
    "Safe for vinyl siding, stucco, brick, wood, and painted surfaces",
    "Removes mold, mildew, algae, and dirt without damage",
    "Protects exterior paint and siding from premature deterioration",
    "Eliminates allergens and bio-contaminants around your home",
    "Boosts curb appeal before selling or refinancing",
    "Satisfies HOA cleanliness requirements",
  ];

  const surfaces = [
    { name: "Vinyl Siding", desc: "Gentle soft-wash removes grime without warping or discoloring" },
    { name: "Stucco", desc: "Florida's most common exterior — we know exactly how to clean it" },
    { name: "Brick & Block", desc: "Deep cleaning that brings out the natural beauty of masonry" },
    { name: "Wood Siding", desc: "Low-pressure approach that preserves paint and wood integrity" },
    { name: "Soffits & Fascia", desc: "Often overlooked — a breeding ground for mold and wasp nests" },
    { name: "Gutters (Exterior)", desc: "Removes the dark tiger-stripe staining on gutter faces" },
  ];

  const whySoftWash = [
    {
      icon: Shield,
      title: "Surface Safe",
      desc: "High pressure can force water behind siding, causing rot and mold inside walls. Our soft-wash system eliminates that risk entirely.",
    },
    {
      icon: Zap,
      title: "Kills at the Root",
      desc: "Our biodegradable solution doesn't just clean the surface — it kills mold and algae spores so results last 2–3x longer than pressure alone.",
    },
    {
      icon: Sparkles,
      title: "Paint Friendly",
      desc: "High pressure strips paint. Our low-pressure method refreshes painted surfaces without lifting a single flake.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        <div className="absolute top-32 right-[15%] w-40 h-40 bg-gradient-to-br from-yellow-300 to-secondary rounded-full blur-sm opacity-80" />
        <div className="absolute top-36 right-[16%] w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
            <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L0,120Z" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-10 text-primary/20">
          <Palmtree className="w-28 h-28" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-accent/20 mb-6">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-sm font-semibold text-foreground">
                Exterior House Washing Specialists
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              House Washing &
              <span className="block bg-gradient-to-r from-accent via-pink-500 to-rose-400 bg-clip-text text-transparent">
                Exterior Cleaning
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Florida's humidity, rain, and heat create the perfect conditions for mold, mildew,
              and algae to take over your home's exterior. Our professional soft-wash house washing
              service restores your home's appearance safely — without risking damage to siding,
              paint, or landscaping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/estimate">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl shadow-secondary/30 w-full sm:w-auto"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+15551234567">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (555) 123-4567
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">All Siding Types</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">Soft-Wash Method</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Same-Day Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Soft Wash for Houses */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Home className="w-4 h-4" />
              The Right Method Matters
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Why We Soft-Wash <span className="text-accent">Every Home</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              High pressure has no business touching your siding. Here's why soft washing is the professional standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whySoftWash.map((item) => (
              <div key={item.title} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-pink-500 flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground text-center mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces + Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Surfaces */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Surfaces We Clean
              </span>
              <h2 className="text-3xl font-black text-foreground mb-8">
                Every Exterior Surface, <span className="text-secondary">Done Right</span>
              </h2>
              <div className="space-y-4">
                {surfaces.map((surface, i) => {
                  const colors = ["from-primary to-teal-500", "from-secondary to-orange-500", "from-accent to-pink-500", "from-violet-500 to-purple-600", "from-primary to-cyan-500", "from-secondary to-amber-500"];
                  return (
                    <div key={surface.name} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow border border-border">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center flex-shrink-0`}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{surface.name}</h3>
                        <p className="text-sm text-muted-foreground">{surface.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Sun className="w-4 h-4" />
                Why It Matters
              </span>
              <h2 className="text-3xl font-black text-foreground mb-6">
                Protect Your Biggest <span className="text-primary">Investment</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Your home's exterior is constantly under attack from Florida's climate.
                Regular professional cleaning isn't a luxury — it's maintenance that saves
                thousands in premature paint jobs and siding replacement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "2–3x", label: "Longer Results vs Pressure Alone", color: "from-accent to-pink-500" },
                  { value: "100%", label: "Eco-Friendly Solutions", color: "from-primary to-teal-500" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 shadow border border-border">
                    <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Give Your Home a Fresh Start
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free house washing quote today. We serve all of Central Florida
            with same-day response and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl">
                Get Free House Washing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 rounded-full">
                <Phone className="mr-2 w-5 h-5" />
                (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FLORIDA CLEAN</span>
          </div>
          <p className="text-white/60 text-sm mb-2">Serving Central Florida with pride since 2018</p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Florida Clean Pressure Washing Co. All rights reserved. Fully Licensed & Insured.
          </p>
        </div>
      </footer>
    </div>
  );
}
