import { Link } from "react-router";
import {
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Home,
  Truck,
  Building2,
  Sparkles,
  Star,
  Sun,
  Palmtree,
  Waves,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section - Tropical Style */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        
        {/* Sun Element */}
        <div className="absolute top-32 right-[15%] w-40 h-40 bg-gradient-to-br from-yellow-300 to-secondary rounded-full blur-sm opacity-80" />
        <div className="absolute top-36 right-[16%] w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
        
        {/* Wave Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full h-auto fill-background">
            <path d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" />
          </svg>
        </div>

        {/* Palm Tree Decorations */}
        <div className="absolute bottom-20 left-10 text-primary/20">
          <Palmtree className="w-32 h-32" strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 right-20 text-primary/15">
          <Palmtree className="w-24 h-24" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Florida's Trusted Choice
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Your Property,
                <span className="block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Spotless & Shining
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Professional pressure washing for homes and businesses across <strong className="text-foreground">Central Florida</strong>. 
                We blast away mold, algae, and grime — leaving your property looking brand new under the Florida sun.
              </p>

              {/* CTA Buttons */}
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Same-Day Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Card */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary/10">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary to-orange-400 rounded-2xl rotate-12 opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-teal-400 rounded-2xl -rotate-12 opacity-80" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
                      <Waves className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Instant Transformation</h3>
                      <p className="text-sm text-muted-foreground">See results the same day</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">✓</span>
                      </div>
                      <span className="font-medium text-foreground">Mold & Mildew Removal</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold text-sm">✓</span>
                      </div>
                      <span className="font-medium text-foreground">Black Streak Elimination</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">✓</span>
                      </div>
                      <span className="font-medium text-foreground">Oil & Stain Removal</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                    <p className="text-sm text-foreground">
                      <span className="font-bold text-secondary">🌴 Florida Special:</span> Book this week and get 15% off your first service!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Sun className="w-4 h-4" />
              Why Florida Trusts Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Professional Service, <span className="text-primary">Guaranteed Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand Florida properties face unique challenges — humidity, storms, and relentless sun. 
              That's why we've perfected our process for the Sunshine State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                  Always On Time
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We show up when we say we will — no waiting around. Your time is valuable, 
                  and our crews work efficiently to get you back to enjoying your day.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-secondary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                  Commercial-Grade Power
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Our truck-mounted systems deliver 10x the cleaning power of consumer machines. 
                  That means deeper cleans that last longer — even in Florida's tough climate.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-pink-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                  100% Protected
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Fully licensed and insured for your peace of mind. Every technician is 
                  background-checked and trained to treat your property with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Complete Cleaning <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From delicate roof shingles to heavy-duty commercial surfaces — we handle it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Cards */}
            {[
              {
                icon: Home,
                title: "Roof Cleaning",
                desc: "Gentle soft-wash removes algae and black streaks without damage",
                color: "from-primary to-teal-500",
                href: "/services/roof-cleaning",
              },
              {
                icon: Truck,
                title: "Driveways",
                desc: "Blast away oil, tire marks, and years of embedded grime",
                color: "from-secondary to-orange-500",
                href: "/services/driveway-sidewalk",
              },
              {
                icon: Sparkles,
                title: "House Washing",
                desc: "Low-pressure cleaning safe for all exterior surfaces",
                color: "from-accent to-pink-500",
                href: "/services/house-washing",
              },
              {
                icon: Building2,
                title: "Commercial",
                desc: "Keep your business looking professional and inviting",
                color: "from-violet-500 to-purple-600",
                href: "/services/commercial",
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/10 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready for a Cleaner Property?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote in under 24 hours. We'll assess your property 
            and provide transparent pricing — no surprises, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 rounded-full"
              >
                <Phone className="mr-2 w-5 h-5" />
                (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-foreground py-10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FLORIDA CLEAN</span>
          </div>
          <p className="text-white/60 text-sm mb-2">
            Serving Central Florida with pride since 2018
          </p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Florida Clean Pressure Washing Co. All rights reserved. Fully Licensed & Insured.
          </p>
        </div>
      </footer>
    </div>
  );
}
