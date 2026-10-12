import { useState, useEffect, useRef, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { Link, useSearchParams } from "react-router";
import {
  ArrowRight, Phone, Palmtree, Shield, Clock,
  CheckCircle2, Truck, Sparkles, Fence,
  MapPin, User, Mail, MessageSquare, Send,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import HeroSun from "@/react-app/components/HeroSun";
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
  zipCode: string;
  services: string[];
  propertyType: string;
  squareFootage: string;
  urgency: string;
  message: string;
};

const SERVICES = [
  { id: "sidewalk", label: "Sidewalk Cleaning", icon: Truck, color: "from-primary to-teal-500" },
  { id: "driveway", label: "Driveway & Sidewalk", icon: Truck, color: "from-secondary to-orange-500" },
  { id: "house", label: "House Washing", icon: Sparkles, color: "from-accent to-pink-500" },
  { id: "fence", label: "Fence Cleaning", icon: Fence, color: "from-violet-500 to-purple-600" },
];

const PROPERTY_TYPES = ["Single Family Home", "Townhome / Condo", "Multi-Family / Duplex"];
const SQUARE_FOOTAGES = ["Under 1,500 sq ft", "1,500–2,500 sq ft", "2,500–4,000 sq ft", "4,000–6,000 sq ft", "6,000+ sq ft"];
const URGENCIES = ["ASAP (within a week)", "Within 2–4 weeks", "Next month or so", "Just exploring options"];

const FORMSPREE_ID = "mgobbkpo";

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
      <label htmlFor={field} className="block text-sm font-semibold text-foreground mb-2">{label}{field !== "email" && <span aria-hidden="true"> *</span>}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        <input
          id={field}
          name={field}
          required={field !== "email"}
          aria-invalid={!!error}
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
function SuccessScreen({ firstName, email, phone }: { firstName: string; email: string; phone: string }) {
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => { title.current?.focus(); }, []);
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main id="main-content">
      <div className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4">
        <div className="max-w-lg w-full text-center">

          {/* Animated checkmark */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30 animate-pulse-glow">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          <h1 ref={title} tabIndex={-1} className="text-3xl font-black text-foreground mb-3">
            Request Received! 🎉
          </h1>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-foreground">{firstName}</strong>! Your request was submitted successfully. We will follow up {email.trim() ? "by email at" : "by phone at"} <strong className="text-foreground">{email.trim() || phone}</strong> about your project. This is a quote request, not a confirmed booking.
          </p>

          {/* What happens next */}
          <div className="bg-white rounded-3xl shadow-lg border border-border p-6 mb-8 text-left">
            <h2 className="font-black text-foreground text-lg mb-4 text-center">What Happens Next</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "We review your request", desc: "Our team looks over your property details and services needed.", color: "from-primary to-teal-500" },
                { step: "2", title: "We follow up", desc: "We may ask for photos, measurements, or a property visit before providing a quote.", color: "from-secondary to-orange-500" },
                { step: "3", title: "We show up and get it done", desc: "Once you approve the quote, we schedule a time that works for you. No surprises.", color: "from-accent to-pink-500" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button className="bg-gradient-to-r from-primary to-teal-500 text-white font-bold px-8 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default function EstimatePage() {
  useScrollAnimation();

  const [params] = useSearchParams();
  const sending = useRef(false);
  const errorSummary = useRef<HTMLDivElement>(null);
  const [networkError, setNetworkError] = useState("");
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zipCode: "", services: SERVICES.some(s => s.id === params.get("service")) ? [params.get("service")!] : [],
    propertyType: "", squareFootage: "", urgency: "", message: "",
  });
  const [state, formspreeSubmit, reset] = useForm(FORMSPREE_ID);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSubmitted(true);
    }
  }, [state.succeeded]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const serverErrors = state.errors ? [...state.errors.getFormErrors().map(e => e.message), ...state.errors.getAllFieldErrors().flatMap(([field, items]) => items.map(e => `${field}: ${e.message}`))] : [];
  useEffect(() => { if (Object.keys(errors).length || networkError || state.errors) errorSummary.current?.focus(); }, [errors, networkError, state.errors]);

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
    if (!form.firstName.trim()) newErrors.firstName = "Enter your name.";
    if (!form.lastName.trim()) newErrors.lastName = "Enter your last name.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = "Enter a valid email address, or leave it blank.";
    if (!/^\+?[\d\s().-]+$/.test(form.phone.trim()) || form.phone.replace(/\D/g, "").length < 10 || form.phone.replace(/\D/g, "").length > 15) newErrors.phone = "Enter a valid phone number.";
    if (!form.address.trim()) newErrors.address = "Enter your street address.";
    if (!form.city.trim()) newErrors.city = "Enter your city.";
    if (!/^\d{5}(-\d{4})?$/.test(form.zipCode.trim())) newErrors.zipCode = "Enter a valid ZIP code (12345 or 12345-6789).";
    if (!PROPERTY_TYPES.includes(form.propertyType)) newErrors.propertyType = "Choose your property type.";
    if (!SQUARE_FOOTAGES.includes(form.squareFootage)) newErrors.squareFootage = "Choose the approximate square footage.";
    if (!URGENCIES.includes(form.urgency)) newErrors.urgency = "Choose when you need the service.";
    if (form.services.length === 0) newErrors.services = "Choose at least one service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    setNetworkError(""); reset();
    if (!validate()) return;
    const gotcha = String(new FormData(event.currentTarget).get("_gotcha") ?? "");
    sending.current = true;
    try {
      await formspreeSubmit({
        name: [form.firstName.trim(), form.lastName.trim()].filter(Boolean).join(" "),
        ...(form.email.trim() ? { email: form.email.trim() } : {}),
        phone: form.phone.trim(), city: form.city.trim(), address: form.address.trim(),
        state: "Florida", zipCode: form.zipCode.trim(),
        services: SERVICES.filter(s => form.services.includes(s.id)).map(s => s.label).join(", "),
        propertyType: form.propertyType, squareFootage: form.squareFootage, urgency: form.urgency,
        message: form.message.trim(), _gotcha: gotcha,
        _subject: `Florida SunRinse estimate — ${form.firstName.trim()} — ${form.city.trim()}`,
      });
    } catch {
      reset();
      setNetworkError("We couldn't confirm delivery. Your details are still here. Check your connection before trying again.");
    } finally { sending.current = false; }
  };

  // Show success screen inline — no routing, stays on same page
  if (submitted) {
    return <SuccessScreen firstName={form.firstName} email={form.email} phone={form.phone} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-background" />
        <HeroSun />
        <div className="hidden sm:block absolute bottom-0 left-10 text-primary/20 animate-float-slow">
          <Palmtree className="w-20 h-20" strokeWidth={1} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 mb-6 animate-pulse-glow max-w-full text-center">
            <span className="text-sm font-semibold text-foreground">
              Free, No-Obligation Quote
            </span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl font-black text-foreground leading-[1.1] mb-4">
            Get Your Free
            <span className="hero-gradient block bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
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
            <form onSubmit={handleSubmit} noValidate aria-label="Request a cleaning quote" aria-busy={state.submitting} className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-border p-5 sm:p-8 animate-on-scroll">
              <h2 className="text-2xl font-black text-foreground mb-3">Tell Us About Your Property</h2>
              <p className="text-sm text-muted-foreground mb-8">* Required fields</p>

              {(Object.keys(errors).length > 0 || networkError || state.errors) && <div ref={errorSummary} tabIndex={-1} role="alert" className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-800">
                <p className="font-bold">Your request has not been confirmed.</p>
                <ul>{Object.entries(errors).map(([key,message]) => <li key={key}>{message}</li>)}{serverErrors.map((message,i) => <li key={i}>{message}</li>)}</ul>
                {networkError && <p>{networkError}</p>}
              </div>}
              <fieldset disabled={state.submitting}>
              <legend className="sr-only">Contact and project details</legend>
              <div hidden><input name="_gotcha" tabIndex={-1} autoComplete="off" aria-label="Leave this empty" /></div>
              {/* Step 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
                  <h3 className="font-bold text-foreground text-lg">Your Contact Info</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" field="firstName" placeholder="John" icon={User} value={form.firstName} error={errors.firstName} onChange={handleChange} />
                  <InputField label="Last Name" field="lastName" placeholder="Smith" icon={User} value={form.lastName} error={errors.lastName} onChange={handleChange} />
                  <InputField label="Email Address (optional)" field="email" type="email" placeholder="john@email.com" icon={Mail} value={form.email} error={errors.email} onChange={handleChange} />
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
                  <InputField label="ZIP Code" field="zipCode" placeholder="33578" icon={MapPin} value={form.zipCode} error={errors.zipCode} onChange={handleChange} />
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
                  <h3 className="font-bold text-foreground text-lg">Services Needed <span aria-hidden="true">*</span></h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Select all that apply:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => {
                    const selected = form.services.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        role="checkbox"
                        aria-checked={selected}
                        aria-label={service.label}
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
                    <label className="block text-sm font-semibold text-foreground mb-3">Property Type <span aria-hidden="true">*</span></label>
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
                      <label className="block text-sm font-semibold text-foreground mb-3">Approximate Square Footage <span aria-hidden="true">*</span></label>
                      <div className="space-y-2">
                        {SQUARE_FOOTAGES.map((size) => (
                          <button key={size} type="button"
                            onClick={() => handleChange("squareFootage", size)}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              form.squareFootage === size ? "border-secondary bg-secondary/5 text-secondary" : "border-border text-foreground hover:border-secondary/40"
                            }`}
                          >{size}</button>
                        ))}
                      </div>
                      {errors.squareFootage && <p className="text-red-500 text-xs mt-1">{errors.squareFootage}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">How Soon Do You Need This? <span aria-hidden="true">*</span></label>
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
                  <textarea aria-label="Anything else? (optional)"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Describe any specific concerns, stains, or areas you'd like us to pay attention to..."
                    rows={4}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-border bg-white text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:border-primary text-sm resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold text-lg py-6 rounded-2xl shadow-xl shadow-secondary/30 btn-pulse disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send My Free Estimate Request
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>



              <p className="text-center text-xs text-muted-foreground mt-4">
                By submitting, you ask Multiservicios Elite LLC, operator of Florida SunRinse, to contact you about your estimate. <Link to="/privacy" className="underline">Privacy details</Link>.
              </p>
              </fieldset>
            </form>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll">
                <h3 className="font-black text-foreground text-lg mb-5">Why Choose Florida SunRinse?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Plan Your Project", desc: "Availability confirmed before booking", color: "text-primary", bg: "bg-primary/10" },
                    { icon: Shield, label: "Surface Assessment", desc: "Material and condition reviewed first", color: "text-secondary", bg: "bg-secondary/10" },
                    { icon: CheckCircle2, label: "No Hidden Fees", desc: "Transparent pricing, no surprises", color: "text-accent", bg: "bg-accent/10" },
                    { icon: Sparkles, label: "Your Project", desc: "Cleaning matched to the agreed scope", color: "text-yellow-500", bg: "bg-yellow-50" },
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

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-border animate-on-scroll">
                <p className="text-sm font-semibold text-foreground mb-4">Explore Our Services</p>
                <div className="space-y-2">
                  {[
                    { label: "Driveway & Sidewalk", href: "/services/driveway-sidewalk" },
                    { label: "House Washing", href: "/services/house-washing" },
                    { label: "Fence Cleaning", href: "/services/fence-cleaning" },
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

      </main>
      <Footer />
    </div>
  );
}
