import { Link } from "react-router";
import {
  Clock, Shield, Zap, ArrowRight, Truck,
  Fence, Sparkles, Sun, Palmtree, Waves, CheckCircle2,
} from "lucide-react";
import ProjectGallery from "@/react-app/components/ProjectGallery";
import Footer from "@/react-app/components/Footer";
import { Button } from "@/react-app/components/ui/button";
import HeroSun from "@/react-app/components/HeroSun";
import Navbar from "@/react-app/components/Navbar";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";


export default function HomePage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main id="main-content">

      {/* Hero Section */}
      <section className="relative min-h-[auto] sm:min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />

        {/* Animated sun */}
        <HeroSun />

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 animate-wave">
          <svg viewBox="0 0 1440 200" className="w-full h-auto fill-background">
            <path d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" />
          </svg>
        </div>

        {/* Palm trees */}
        <div className="absolute bottom-20 left-10 text-primary/20 animate-float-slow">
          <Palmtree className="hidden sm:block w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32" strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 right-20 text-primary/15 animate-float">
          <Palmtree className="hidden md:block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6 animate-pulse-glow max-w-full text-center">
                <span className="text-sm font-semibold text-foreground">Exterior Cleaning in Florida</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Your Property,
                <span className="hero-gradient block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Spotless & Shining
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Pressure washing for driveways, sidewalks, house exteriors, and fences.
                Share your location and the surfaces you need cleaned to request a free quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/estimate">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl shadow-secondary/30 w-full sm:w-auto btn-pulse"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, label: "Surface Assessment", color: "bg-primary/10", iconColor: "text-primary" },
                  { icon: Zap, label: "Free Quotes", color: "bg-secondary/10", iconColor: "text-secondary" },
                  { icon: Clock, label: "Flexible Scheduling", color: "bg-accent/10", iconColor: "text-accent" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Feature Card */}
            <div className="relative hidden lg:block animate-slide-right">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary/10 card-lift">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary to-orange-400 rounded-2xl rotate-12 opacity-80 animate-bounce-subtle" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-teal-400 rounded-2xl -rotate-12 opacity-80 animate-float" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center animate-spin-slow">
                      <Waves className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Exterior Cleaning</h3>
                      <p className="text-sm text-muted-foreground">Scope agreed before work begins</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Dirt & Organic Buildup", color: "primary" },
                      { label: "Driveways & Sidewalks", color: "secondary" },
                      { label: "House & Fence Cleaning", color: "accent" },
                    ].map((item, idx) => (
                      <div key={item.label} className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-${item.color}/5 to-transparent`} style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className={`w-8 h-8 rounded-full bg-${item.color}/20 flex items-center justify-center`}>
                          <CheckCircle2 className={`w-4 h-4 text-${item.color}`} />
                        </div>
                        <span className="font-medium text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                    <p className="text-sm text-foreground">
                      <span className="font-bold text-secondary">🌴 Your Project:</span> Tell us what needs cleaning for a free, no-obligation quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Sun className="w-4 h-4" />
              How We Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Professional Service, <span className="text-primary">Careful Planning</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand Florida properties face unique challenges: humidity, storms, and relentless sun.
              We assess the surfaces and discuss the scope before work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-y-10 sm:gap-y-8 gap-x-8">
            {[
              { icon: Clock, title: "Plan Your Visit", desc: "We discuss access, your location, and scheduling before confirming the work.", color: "from-primary to-teal-500" },
              { icon: Sparkles, title: "Surface Assessment", desc: "The cleaning approach depends on your surface, its finish, and its condition.", color: "from-secondary to-orange-500" },
              { icon: Shield, title: "Clear Scope", desc: "We agree on the scope and price with you before any work begins.", color: "from-accent to-pink-500" },
            ].map((card) => (
              <div key={card.title} className="animate-on-scroll group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20 card-lift">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground text-center mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Complete Cleaning <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Driveways, sidewalks, house washing, siding, and fences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Sidewalk Cleaning", desc: "Cleaning for sidewalks and walking paths", color: "from-primary to-teal-500", href: "/services/sidewalk-cleaning" },
              { icon: Truck, title: "Driveways", desc: "Cleaning for dirt and organic buildup on driveways", color: "from-secondary to-orange-500", href: "/services/driveway-sidewalk" },
              { icon: Sparkles, title: "House Washing", desc: "House washing suited to the exterior material and condition", color: "from-accent to-pink-500", href: "/services/house-washing" },
              { icon: Fence, title: "Fence Cleaning", desc: "Cleaning suited to your fence material and finish", color: "from-violet-500 to-purple-600", href: "/services/fence-cleaning" },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/10 hover:-translate-y-2 card-lift"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal-500 to-cyan-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float-slow">
            <Palmtree className="w-40 h-40 text-white" strokeWidth={0.5} />
          </div>
          <div className="absolute bottom-10 right-10 animate-spin-slow">
            <Sun className="w-32 h-32 text-white" strokeWidth={0.5} />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready for a Cleaner Property?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote. We'll assess your property
            and provide transparent pricing with no surprises, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl btn-pulse">
                Get Your Free Quote
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
