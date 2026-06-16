import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight, Phone, Palmtree, Shield, Clock,
  CheckCircle2, Star, Home, Truck, Sparkles,
  Building2, MapPin, User, Mail, MessageSquare, Send,
  Calendar,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { useScrollAnimation } from "@/react-app/lib/useScrollAnimation";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  services: string[];
  propertyType: string;
  squareFootage: string;
  urgency: string;
  message: string;
};

const SERVICES = [
  { id: "roof", label: "Roof Cleaning", icon: Home, color: "from-primary to-teal-500" },
  { id: "driveway", label: "Driveway & Sidewalk", icon: Truck, color: "from-secondary to-orange-500" },
  { id: "house", label: "House Washing", icon: Sparkles, color: "from-accent to-pink-500" },
  { id: "commercial", label: "Commercial", icon: Building2, color: "from-violet-500 to-purple-600" },
];

const PROPERTY_TYPES = ["Single Family Home", "Townhome / Condo", "Multi-Family / Duplex", "Commercial Property", "HOA / Community"];
const SQUARE_FOOTAGES = ["Under 1,500 sq ft", "1,500–2,500 sq ft", "2,500–4,000 sq ft", "4,000–6,000 sq ft", "6,000+ sq ft"];
const URGENCIES = ["ASAP (within a week)", "Within 2–4 weeks", "Next month or so", "Just exploring options"];

// CALENDLY LINK — replace with your real link once you create the event type
const CALENDLY_URL = "https://calendly.com/floridacleanestimate/30min;

// InputField outside component — fixes the focus-loss bug
function InputField({
  label, field, type = "text", placeholder, icon: Icon, value, error, onChange,
}: {
  label: string;
  field: keyof FormData;
  type?: string;
  placeholder: string;
  icon: React.ElementType;
  value: string;
  error?: string;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3 rounded-2xl border-2 bg-white text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:border-primary text-sm ${
            error ? "border-red-400" : "border-border"
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// Success screen — separate component, no hooks issues
function SuccessScreen({ firstName, email }: { firstName: string; email: string }) {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-lg w-full text-center">
          {/* Checkmark */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl font-black text-foreground mb-3">
            ¡Solicitud Recibida! 🎉
          </h1>
          <p className="text-muted-foreground text-lg mb-2 leading-relaxed">
            Gracias, <strong className="text-foreground">{firstName}</strong>. Hemos recibido tu solicitud y nos pondremos en contacto dentro de <strong className="text-foreground">24 horas</strong>, generalmente mucho antes.
          </p>
          <p className="text-muted-foreground text-sm mb-8">
            Una confirmación será enviada a <strong className="text-foreground">{email}</strong>.
          </p>

          {/* Calendly CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-teal-50 border border-primary/20 rounded-3xl p-6 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-black text-foreground mb-2">
              ¿Quieres agendar tu cita ahora?
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Selecciona un horario conveniente y te llamamos para confirmar todos los detalles y darte tu precio exacto.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold rounded-full shadow-lg shadow-secondary/30"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Mi Cita en Calendly
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button variant="outline" className="border-2 border-primary text-primary font-bold px-8 rounded-full">
                Volver al Inicio
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button variant="outline" className="border-2 border-border text-foreground font-bold px-8 rounded-full">
                <Phone className="mr-2 w-4 h-4" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function EstimatePage() {
  useScrollAnimation();

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", services: [],
    propertyType: "", squareFootage: "", urgency: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
    if (errors.services) setErrors((e) => ({ ...e, services: undefined }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (form.services.length === 0) newErrors.services = "Select at least one service";
    if (!form.propertyType) newErrors.propertyType = "Required";
    if (!form.urgency) newErrors.urgency = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // Scroll to top so success message is visible
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSubmitted(true);
  };

  // Show success screen inline — no routing, stays on same page
  if (submitted) {
    return <SuccessScreen firstName={form.firstName} email={form.email} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        <div className="absolute top-24 right-[15%] w-32 h-32 bg-gradient-to-br from-yellow-300 to-secondary rounded-full blur-sm opacity-70 animate-float-slow" />
        <div className="absolute top-28 right-[16%] w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-float" />
        <div className="absolute bottom-0 left-10 text-primary/20 animate-float-slow">
          <Palmtree className="w-20 h-20" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6 animate-pulse-glow">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">
              Free, No-Obligation Quote · 24hr Response
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-[1.1] mb-4">
            Get Your Free
            <span className="block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Estimate Today
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Fill out the form below and we'll get you a transparent, no-surprise quote fast.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* FORM */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-border p-8 animate-on-scroll">
              <h2 className="text-2xl font-black text-foreground mb-8">Tell Us About Your Property</h2>

              {/* Step 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
                  <h3 className="font-bold text-foreground text-lg">Your Contact Info</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" field="firstName" placeholder="John" icon={User} value={form.firstName} error={errors.firstName} onChange={handleChange} />
                  <InputField label="Last Name" field="lastName" placeholder="Smith" icon={User} value={form.lastName} error={errors.lastName} onChange={handleChange} />
                  <InputField label="Email Address" field="email" type="email" placeholder="john@email.com" icon={Mail} value={form.email} error={errors.email} onChange={handleChange} />
                  <InputField label="Phone Number" field="phone" type="tel" placeholder="(555) 123-4567" icon={Phone} value={form.phone} error={errors.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="border-t border-border mb-8" />

              {/* Step 2 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                  <h3 className="font-bold text-foreground text-lg">Property Location</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <InputField label="Street Address" field="address" placeholder="123 Palm Tree Lane" icon={MapPin} value={form.address} error={errors.address} onChange={handleChange} />
                  </div>
                  <InputField label="City" field="city" placeholder="Orlando" icon={MapPin} value={form.city} error={errors.city} onChange={handleChange} />
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">State</label>
                    <input
                      type="text"
                      value="Florida"
                      readOnly
                      className="w-full px-4 py-3 rounded-2xl border-2 border-border bg-muted text-muted-foreground text-sm cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-border mb-8" />

              {/* Step 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
                  <h3 className="font-bold text-foreground text-lg">Services Needed</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Select all that apply:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => {
                    const selected = form.services.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                          selected ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/40"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`font-semibold text-sm ${selected ? "text-primary" : "text-foreground"}`}>
                          {service.label}
                        </span>
                        {selected && <CheckCircle2 className="w-5 h-5 text-primary ml-auto flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-red-500 text-xs mt-2">{errors.services}</p>}
              </div>

              <div className="border-t border-border mb-8" />

              {/* Step 4 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">4</div>
                  <h3 className="font-bold text-foreground text-lg">Property Details</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Property Type</label>
                    <div className="space-y-2">
                      {PROPERTY_TYPES.map((type) => (
                        <button key={type} type="button"
                          onClick={() => { setForm((p) => ({ ...p, propertyType: type })); setErrors((e) => ({ ...e, propertyType: undefined })); }}
                          className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.propertyType === type ? "border-primary bg-primary/5 text-primary" : "border-border text-foreground hover:border-primary/40"
                          }`}
                        >{type}</button>
                      ))}
                    </div>
                    {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Approximate Square Footage</label>
                      <div className="space-y-2">
                        {SQUARE_FOOTAGES.map((size) => (
                          <button key={size} type="button"
                            onClick={() => setForm((p) => ({ ...p, squareFootage: size }))}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              form.squareFootage === size ? "border-secondary bg-secondary/5 text-secondary" : "border-border text-foreground hover:border-secondary/40"
                            }`}
                          >{size}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">How Soon Do You Need This?</label>
                      <div className="space-y-2">
                        {URGENCIES.map((urgency) => (
                          <button key={urgency} type="button"
                            onClick={() => { setForm((p) => ({ ...p, urgency })); setErrors((e) => ({ ...e, urgency: undefined })); }}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              form.urgency === urgency ? "border-accent bg-accent/5 text-accent" : "border-border text-foreground hover:border-accent/40"
                            }`}
                          >{urgency}</button>
                        ))}
                      </div>
                      {errors.urgency && <p className="text-red-500 text-xs mt-1">{errors.urgency}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border mb-8" />

              {/* Step 5 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white text-sm font-bold">5</div>
                  <h3 className="font-bold text-foreground text-lg">
                    Anything Else? <span className="text-muted-foreground font-normal text-sm">(Optional)</span>
                  </h3>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-muted-foreground pointer-events-none">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Describe any specific concerns, stains, or areas you'd like us to pay attention to..."
                    rows={4}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-border bg-white text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:border-primary text-sm resize-none"
                  />
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold text-lg py-6 rounded-2xl shadow-xl shadow-secondary/30 btn-pulse"
              >
                Send My Free Estimate Request
                <Send className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                By submitting, you agree to be contacted about your estimate. We never sell your information.
              </p>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll">
                <h3 className="font-black text-foreground text-lg mb-5">Why Choose Florida Clean?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "24-Hour Response", desc: "We quote same day whenever possible", color: "text-primary", bg: "bg-primary/10" },
                    { icon: Shield, label: "Fully Insured", desc: "Licensed & insured for your protection", color: "text-secondary", bg: "bg-secondary/10" },
                    { icon: CheckCircle2, label: "No Hidden Fees", desc: "Transparent pricing, no surprises", color: "text-accent", bg: "bg-accent/10" },
                    { icon: Star, label: "5-Star Rated", desc: "Trusted by hundreds of Florida homeowners", color: "text-yellow-500", bg: "bg-yellow-50" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-3xl p-6 border border-primary/20 animate-on-scroll">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  "Florida Clean did our roof and driveway in one day. The black streaks that had been there for years are completely gone. Fast, professional, and priced fairly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center text-white text-sm font-bold">M</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Maria T.</p>
                    <p className="text-muted-foreground text-xs">Orlando, FL</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-border text-center animate-on-scroll">
                <p className="text-sm text-muted-foreground mb-3">Prefer to talk first?</p>
                <a href="tel:+15551234567">
                  <Button className="w-full bg-gradient-to-r from-primary to-teal-500 text-white font-bold rounded-2xl">
                    <Phone className="mr-2 w-4 h-4" />
                    (555) 123-4567
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-3">Mon–Sat, 7am–7pm</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll">
                <p className="text-sm font-semibold text-foreground mb-4">Explore Our Services</p>
                <div className="space-y-2">
                  {[
                    { label: "Roof Cleaning", href: "/services/roof-cleaning" },
                    { label: "Driveway & Sidewalk", href: "/services/driveway-sidewalk" },
                    { label: "House Washing", href: "/services/house-washing" },
                    { label: "Commercial", href: "/services/commercial" },
                  ].map((link) => (
                    <Link key={link.label} to={link.href} className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-muted transition-colors text-sm text-foreground font-medium">
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
