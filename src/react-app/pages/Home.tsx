import { Link } from "react-router";
import {
  Clock, Shield, Zap, ArrowRight, Phone, Home, Truck,
  Building2, Sparkles, Star, Sun, Palmtree, Waves, CheckCircle2,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

const REVIEWS = [
  {
    name: "Maria T.",
    location: "Orlando, FL",
    text: "Florida Clean did our roof and driveway in one day. The black streaks that had been there for years are completely gone. Fast, professional, and priced fairly.",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Kissimmee, FL",
    text: "Our driveway looks brand new. They were on time, efficient, and cleaned up everything. Will definitely use them again.",
    stars: 5,
  },
  {
    name: "Sandra M.",
    location: "Lakeland, FL",
    text: "I was skeptical at first but the before and after difference on our house exterior was incredible. Highly recommend.",
    stars: 5,
  },
];

export default function HomePage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />

        {/* Animated sun */}
        <div className="absolute top-32 right-[15%] w-40 h-40 bg-gradient-to-br from-yellow-300 to-secondary rounded-full blur-sm opacity-80 animate-float-slow" />
        <div className="absolute top-36 right-[16%] w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-float" />

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 animate-wave">
          <svg viewBox="0 0 1440 200" className="w-full h-auto fill-background">
            <path d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" />
          </svg>
        </div>

        {/* Palm trees */}
        <div className="absolute bottom-20 left-10 text-primary/20 animate-float-slow">
          <Palmtree className="w-32 h-32" strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 right-20 text-primary/15 animate-float">
          <Palmtree className="w-24 h-24" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6 animate-pulse-glow">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, _i) => (
                    <Star key={_i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </span>
                <span className="text-sm font-semibold text-foreground">Florida's Trusted Choice</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Your Property,
                <span className="block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Spotless & Shining
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Professional pressure washing for homes and businesses across{" "}
                <strong className="text-foreground">Central Florida</strong>.
                We blast away mold, algae, and grime, leaving your property looking brand new under the Florida sun.
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
                {[
                  { icon: Shield, label: "Fully Insured", color: "bg-primary/10", iconColor: "text-primary" },
                  { icon: Zap, label: "Same-Day Quotes", color: "bg-secondary/10", iconColor: "text-secondary" },
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
                      <h3 className="text-xl font-bold text-foreground">Instant Transformation</h3>
                      <p className="text-sm text-muted-foreground">See results the same day</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Mold & Mildew Removal", color: "primary" },
                      { label: "Black Streak Elimination", color: "secondary" },
                      { label: "Oil & Stain Removal", color: "accent" },
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
                      <span className="font-bold text-secondary">🌴 Florida Special:</span> Book this week and get 15% off your first service!
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
              Why Florida Trusts Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              Professional Service, <span className="text-primary">Guaranteed Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand Florida properties face unique challenges: humidity, storms, and relentless sun.
              That's why we've perfected our process for the Sunshine State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Always On Time", desc: "We show up when we say we will. No waiting around. Your time is valuable, and our crews work efficiently to get you back to enjoying your day.", color: "from-primary to-teal-500" },
              { icon: Sparkles, title: "Commercial-Grade Power", desc: "Our truck-mounted systems deliver 10x the cleaning power of consumer machines. Deeper cleans that last longer, even in Florida's tough climate.", color: "from-secondary to-orange-500" },
              { icon: Shield, title: "100% Protected", desc: "Fully licensed and insured for your peace of mind. Every technician is background-checked and trained to treat your property with care.", color: "from-accent to-pink-500" },
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
              From delicate roof shingles to heavy-duty commercial surfaces, we handle it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Roof Cleaning", desc: "Gentle soft-wash removes algae and black streaks without damage", color: "from-primary to-teal-500", href: "/services/roof-cleaning" },
              { icon: Truck, title: "Driveways", desc: "Blast away oil, tire marks, and years of embedded grime", color: "from-secondary to-orange-500", href: "/services/driveway-sidewalk" },
              { icon: Sparkles, title: "House Washing", desc: "Low-pressure cleaning safe for all exterior surfaces", color: "from-accent to-pink-500", href: "/services/house-washing" },
              { icon: Building2, title: "Commercial", desc: "Keep your business looking professional and inviting", color: "from-violet-500 to-purple-600", href: "/services/commercial" },
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

      {/* Reviews */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-4">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              5-Star Reviews
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              What Florida Homeowners <span className="text-primary">Are Saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="animate-on-scroll bg-white rounded-3xl p-6 shadow-lg border border-border card-lift">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.stars)].map((_, _i) => (
                    <Star key={_i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-5 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Get your free, no-obligation quote in under 24 hours. We'll assess your property
            and provide transparent pricing with no surprises, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl btn-pulse">
                Get Your Free Quote
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

      {/* Footer */}
      <footer className="bg-foreground py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center animate-pulse-glow">
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
    </div>
  );
}
