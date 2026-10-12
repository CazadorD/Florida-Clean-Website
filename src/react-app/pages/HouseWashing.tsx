import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Sun,
  Palmtree,
  Clock,
  Zap,
  Sparkles,
  Home,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import HeroSun from "@/react-app/components/HeroSun";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

export default function HouseWashingPage() {
  const benefits = ["House washing and exterior siding cleaning", "Material and condition reviewed first", "Approach selected for the surface and finish", "Access and height confirmed before booking", "Existing paint damage discussed before work", "Scope and price agreed before cleaning"];

  const surfaces = [{name: "Vinyl Siding", desc: "Material and condition assessed before cleaning"}, {name: "Stucco", desc: "Cleaning approach chosen for the finish"}, {name: "Brick & Block", desc: "Exterior wall cleaning within the agreed scope"}, {name: "Wood & Painted Siding", desc: "Existing coating and surface condition reviewed first"}];

  const whySoftWash = [{icon: Shield, title: "Surface Assessment", desc: "We check the siding material and condition before selecting a cleaning approach."}, {icon: Zap, title: "Agreed Scope", desc: "We discuss access, height, and the areas included before booking."}, {icon: Sparkles, title: "Finish Awareness", desc: "Existing paint damage and delicate finishes are considered before work begins."}];

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
        <div className="absolute bottom-16 left-10 text-primary/20">
          <Palmtree className="hidden sm:block w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 animate-float-slow" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-slide-left">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-md border border-accent/20 mb-6 animate-pulse-glow max-w-full text-center">
              <span className="text-sm font-semibold text-foreground">
                Exterior House Washing Specialists
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              House Washing &
              <span className="hero-gradient block bg-gradient-to-r from-accent via-pink-500 to-rose-400 bg-clip-text text-transparent">
                Exterior Cleaning
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Florida's humidity, rain, and heat leave dirt and organic buildup on house exteriors. Ask about house washing and siding cleaning suited to your property's materials and condition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/estimate?service=house">
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
                <span className="text-sm font-medium text-foreground">Siding Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">Surface-Suited Method</span>
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

      {/* Why Soft Wash for Houses */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Home className="w-4 h-4" />
              The Right Method Matters
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              The Right Care for <span className="text-accent">Your Home</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The method depends on the material, finish, condition, and access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-y-10 sm:gap-y-8 gap-x-8">
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Surfaces */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Surfaces We Clean
              </span>
              <h2 className="text-3xl font-black text-foreground mb-8">
                Your House Exterior, <span className="text-secondary">Done Right</span>
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
                House washing helps refresh your home's exterior. Let us know the material and any problem areas so we can discuss the scope and expected results.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "Reviewed", label: "Surface Condition Before Work", color: "from-accent to-pink-500" },
                  { value: "Agreed", label: "Scope & Price Before Cleaning", color: "from-primary to-teal-500" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-3 sm:p-5 shadow border border-border">
                    <div className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
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
            Get your free house washing quote. Share your location so we can confirm availability and discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate?service=house">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl">
                Get Free House Washing Quote
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
