import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Sun,
  Palmtree,
  Star,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

export default function RoofCleaningPage() {
  const benefits = [
    "Removes black streaks caused by Gloeocapsa Magma algae",
    "Eliminates moss, lichen, and mildew growth",
    "Extends roof lifespan by up to 10+ years",
    "Restores curb appeal and increases home value",
    "Satisfies HOA requirements and insurance inspections",
    "Prevents premature shingle deterioration",
  ];

  const process = [
    {
      step: "01",
      title: "Free Inspection",
      desc: "We assess your roof type, pitch, staining level, and any areas needing special attention before we touch a thing.",
    },
    {
      step: "02",
      title: "Pre-Treatment",
      desc: "We protect your landscaping, gutters, and surrounding surfaces before applying our biodegradable soft-wash solution.",
    },
    {
      step: "03",
      title: "Soft-Wash Application",
      desc: "Our low-pressure system applies an ARMA-approved cleaning solution that kills algae, moss, and mildew at the root.",
    },
    {
      step: "04",
      title: "Rinse & Inspect",
      desc: "A final low-pressure rinse removes all residue. We walk the roof with you to confirm you're 100% satisfied.",
    },
  ];

  const faqs = [
    {
      q: "Won't pressure washing damage my shingles?",
      a: "That's exactly why we use soft washing not high-pressure. Our system uses 1/10th the pressure of a standard power washer combined with professional-grade cleaning solution. This is the method recommended by the Asphalt Roofing Manufacturers Association (ARMA).",
    },
    {
      q: "How long does roof cleaning take?",
      a: "Most residential roofs take 2–4 hours depending on size, pitch, and level of staining. We'll give you an accurate time estimate during your free inspection.",
    },
    {
      q: "How long will the results last?",
      a: "In Florida's humid climate, you can expect results to last 2–4 years. We offer maintenance plans to keep your roof looking great year-round.",
    },
    {
      q: "Is the cleaning solution safe for my plants?",
      a: "Yes. We use biodegradable, eco-friendly solutions and pre-wet all surrounding vegetation before and after the treatment to ensure your landscaping stays healthy.",
    },
  ];

  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        <div className="hidden sm:block absolute top-20 sm:top-28 lg:top-32 right-[8%] sm:right-[12%] lg:right-[15%] w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-gradient-to-br from-yellow-300 to-secondary rounded-full blur-sm opacity-80 animate-float-slow" />
        <div className="hidden sm:block absolute top-24 sm:top-32 lg:top-36 right-[9%] sm:right-[13%] lg:right-[16%] w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-float" />
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
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6 animate-pulse-glow max-w-full text-center">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-sm font-semibold text-foreground">
                Central Florida's Roof Cleaning Experts
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              Roof Cleaning &
              <span className="block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Soft Washing
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Those black streaks on your roof aren't just ugly they're alive. Florida's
              humidity creates the perfect breeding ground for algae, moss, and mildew that
              eat away at your shingles. Our professional soft-wash system eliminates them
              safely, without voiding your roof warranty.
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
              <a href="tel:+15551234567" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-6 rounded-full w-full"
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
                <span className="text-sm font-medium text-foreground">Warranty Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">Eco-Friendly Solutions</span>
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

      {/* Why Soft Wash Alert */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Why High-Pressure Washing Damages Florida Roofs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Many companies use high-pressure washers on roofs this blasts away the protective
                granules from your shingles, accelerates wear, and voids most manufacturer warranties.
                The Asphalt Roofing Manufacturers Association (ARMA) recommends <strong className="text-foreground">low-pressure
                soft washing only</strong>. That's exactly what we use every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Sun className="w-4 h-4" />
                What You Get
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
                More Than Just a Clean Roof  {" "}
                <span className="text-primary">Real Protection</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                A professionally cleaned roof isn't cosmetic it's maintenance. Algae and
                moss retain moisture that accelerates shingle breakdown. Removing them now
                can add years to your roof's life and keep insurance claims at bay.
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

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years Added to Roof Life", color: "from-primary to-teal-500" },
                { value: "100%", label: "Warranty-Safe Method", color: "from-secondary to-orange-500" },
                { value: "2–4hrs", label: "Average Job Time", color: "from-accent to-pink-500" },
                { value: "500+", label: "Roofs Cleaned in FL", color: "from-violet-500 to-purple-600" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll card-lift">
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              <Zap className="w-4 h-4" />
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              How We Clean Your Roof <span className="text-secondary">The Right Way</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every job follows the same proven 4-step process no shortcuts, no guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative bg-white rounded-3xl p-6 shadow-lg border border-border">
                <div className="text-5xl font-black text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Roof Cleaning <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll card-lift">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
            Ready to Get Those Black Streaks Gone?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation roof cleaning quote today. We'll assess your roof
            and give you transparent pricing same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl">
                Get Free Roof Quote
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
      <Footer />
    </div>
  );
}
