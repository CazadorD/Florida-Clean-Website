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
  Building2,
  BarChart3,
  Users,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

export default function CommercialPage() {
  const industries = [
    { name: "Retail Storefronts", desc: "First impressions close sales keep your entrance immaculate" },
    { name: "Office Buildings", desc: "Maintain a professional appearance for clients and employees" },
    { name: "Restaurants & Food Service", desc: "Health code compliance and grease removal from drive-thrus and entries" },
    { name: "Apartment Complexes", desc: "Common areas, breezeways, parking structures, and pool decks" },
    { name: "Warehouses & Industrial", desc: "Heavy-duty cleaning for loading docks, fleet areas, and parking lots" },
    { name: "HOAs & Communities", desc: "Community entrance ways, signs, sidewalks, and common area surfaces" },
  ];

  const benefits = [
    "Maintains a professional image that attracts and retains customers",
    "Prevents slip-and-fall liability from mold and algae on walkways",
    "Satisfies local health and safety codes for food service businesses",
    "Protects commercial property value and reduces maintenance costs",
    "Flexible scheduling nights, weekends, and off-hours available",
    "Volume pricing for multi-location and contract accounts",
  ];

  const whyUs = [
    {
      icon: Clock,
      title: "Minimal Business Disruption",
      desc: "We work around your hours. Early morning, late evening, weekends we schedule around your operation, not ours.",
    },
    {
      icon: Shield,
      title: "Commercial Insurance",
      desc: "We carry full commercial liability coverage. Your business and property are protected on every job we perform.",
    },
    {
      icon: BarChart3,
      title: "Maintenance Contracts",
      desc: "Set it and forget it. Monthly, quarterly, or custom maintenance schedules with priority scheduling and discounted rates.",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      desc: "One point of contact for all your locations. No phone trees, no repeating yourself just results.",
    },
  ];

  useScrollAnimation();

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
        <div className="absolute bottom-16 right-20 text-primary/15">
          <Palmtree className="w-24 h-24" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-violet-200 mb-6">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-sm font-semibold text-foreground">
                Commercial Pressure Washing Specialists
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              Commercial Pressure
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Washing Services
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Your business's exterior is your first impression. In Central Florida's humid climate,
              mold, algae, and grime accumulate fast sending the wrong message to customers before
              they ever walk through the door. Our commercial pressure washing keeps your property
              clean, safe, and professional year-round.
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
                <span className="text-sm font-medium text-foreground">Commercial Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">After-Hours Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-violet-500" />
                </div>
                <span className="text-sm font-medium text-foreground">Multi-Location Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-600 font-semibold text-sm mb-4">
              <Building2 className="w-4 h-4" />
              Industries We Serve
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              We Work With All Types of <span className="text-violet-500">Commercial Properties</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From single storefronts to large apartment complexes we have the equipment and experience for any commercial job.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const colors = [
                "from-violet-500 to-purple-600",
                "from-primary to-teal-500",
                "from-secondary to-orange-500",
                "from-accent to-pink-500",
                "from-violet-400 to-indigo-500",
                "from-primary to-cyan-500",
              ];
              return (
                <div key={industry.name} className="bg-white rounded-3xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-background to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Sun className="w-4 h-4" />
              Built for Business
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
              We Understand Commercial <span className="text-primary">Needs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Consumer pressure washing crews aren't equipped for commercial work. We are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 shadow-lg border border-border flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-border animate-on-scroll card-lift">
            <h3 className="text-2xl font-black text-foreground mb-6 text-center">
              Everything Your Property Needs
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24hr", label: "Quote Turnaround", color: "from-primary to-teal-500" },
              { value: "Flex", label: "Scheduling Around You", color: "from-secondary to-orange-500" },
              { value: "Multi", label: "Location Contracts", color: "from-violet-500 to-purple-600" },
              { value: "100%", label: "Satisfaction Guaranteed", color: "from-accent to-pink-500" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-3xl p-6 shadow-lg border border-border text-center">
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
            Let's Talk About Your Property
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free commercial assessment and quote. We'll walk your property, identify
            every surface that needs attention, and deliver a clear proposal fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full shadow-xl">
                Get Commercial Quote
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

      <Footer />
    </div>
  );
}
