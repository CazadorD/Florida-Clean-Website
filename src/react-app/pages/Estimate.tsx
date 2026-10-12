import { useEffect, useRef, useState, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { Link, useSearchParams } from "react-router";
import { CheckCircle2, Send } from "lucide-react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import HeroSun from "@/react-app/components/HeroSun";
import { BUSINESS, SERVICES } from "@/react-app/lib/business";

type Errors = Record<string, string>;
const inputClass = "mt-2 w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none";

export default function EstimatePage() {
  const [params] = useSearchParams();
  const [state, submit, reset] = useForm(BUSINESS.formspreeId);
  const [errors, setErrors] = useState<Errors>({});
  const [networkError, setNetworkError] = useState("");
  const [receiptEmail, setReceiptEmail] = useState("");
  const sending = useRef(false);
  const errorSummary = useRef<HTMLDivElement>(null);
  const successTitle = useRef<HTMLHeadingElement>(null);
  const serverErrors = state.errors ? [
    ...state.errors.getFormErrors().map(error => error.message),
    ...state.errors.getAllFieldErrors().flatMap(([field, items]) => items.map(error => `${field}: ${error.message}`)),
  ] : [];
  const hasErrors = Object.keys(errors).length > 0 || !!networkError || !!state.errors;

  useEffect(() => {
    if (hasErrors) errorSummary.current?.focus();
  }, [errors, networkError, state.errors, hasErrors]);
  useEffect(() => {
    if (state.succeeded) {
      window.scrollTo({ top: 0, behavior: "instant" });
      successTitle.current?.focus();
    }
  }, [state.succeeded]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const nextErrors: Errors = {};
    if (!value("name")) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) nextErrors.email = "Enter a valid email address.";
    if (!value("city")) nextErrors.city = "Enter your city or ZIP code.";
    if (value("phone") && !/^\+?[\d\s().-]+$/.test(value("phone"))) nextErrors.phone = "Enter a valid phone number, or leave it blank.";
    const digits = value("phone").replace(/\D/g, "");
    if (value("phone") && (digits.length < 10 || digits.length > 15)) nextErrors.phone = "Enter a valid phone number, or leave it blank.";
    const services = data.getAll("services").map(String).filter(id => SERVICES.some(service => service.id === id));
    if (!services.length) nextErrors.services = "Choose at least one service.";
    setErrors(nextErrors);
    setNetworkError("");
    reset();
    if (Object.keys(nextErrors).length) return;
    sending.current = true;
    setReceiptEmail(value("email"));
    try {
      await submit({
        name: value("name"), email: value("email"), phone: value("phone"),
        city: value("city"), address: value("address"),
        services: services.map(id => SERVICES.find(service => service.id === id)!.name).join(", "),
        message: value("message"),
        _gotcha: value("_gotcha"),
        _subject: `Exterior cleaning quote — ${value("name")} — ${value("city")}`,
      });
    } catch {
      reset();
      setNetworkError("We couldn't confirm delivery. Your details are still here. Check your connection before trying again.");
    } finally {
      sending.current = false;
    }
  }

  return <div className="min-h-screen bg-background"><Navbar /><main id="main-content">
    {state.succeeded ? <section className="mx-auto max-w-2xl px-4 pb-24 pt-40 text-center">
      <CheckCircle2 aria-hidden="true" className="mx-auto mb-6 h-16 w-16 text-primary" />
      <h1 ref={successTitle} tabIndex={-1} className="text-4xl font-black">Request sent</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Thank you. Your request was submitted successfully. We'll use <strong className="break-words text-foreground">{receiptEmail}</strong> to follow up about your property and availability.</p>
      <p className="mt-4 text-muted-foreground">This is a quote request, not a confirmed booking.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white">Back to Home</Link>
    </section> : <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-cyan-50 to-background pb-12 pt-36"><HeroSun />
        <div className="relative mx-auto max-w-3xl px-4 text-center"><p className="mb-4 font-semibold text-primary">FREE, NO-OBLIGATION QUOTE</p><h1 className="hero-title text-4xl font-black sm:text-5xl">Let's talk about<br /><span className="text-primary">your project.</span></h1><p className="mt-5 text-lg text-muted-foreground">A few details help us understand what you need. We'll follow up by email.</p></div>
      </section>
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-3">
        <form onSubmit={handleSubmit} noValidate aria-label="Request a cleaning quote" aria-busy={state.submitting} className="rounded-3xl border border-border bg-white p-5 shadow-lg sm:p-8 lg:col-span-2">
          <h2 className="text-2xl font-bold">Request your estimate</h2><p className="mb-7 mt-2 text-sm text-muted-foreground">Fields marked * are required. Phone and street address are optional.</p>
          {hasErrors && <div ref={errorSummary} tabIndex={-1} role="alert" className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-800">
            <p className="font-bold">{Object.keys(errors).length ? "Please check the following:" : "Your request has not been confirmed."}</p>
            <ul className="mt-2 list-inside list-disc">{Object.entries(errors).map(([field, message]) => <li key={field}><a className="underline" href={`#${field === "services" ? "service-driveway" : field}`}>{message}</a></li>)}{serverErrors.map((message, index) => <li key={index}>{message}</li>)}</ul>
            {state.errors && <p className="mt-2">Your details are still in the form. Please review any errors and try again later.</p>}
            {networkError && <p className="mt-2">{networkError}</p>}
          </div>}
          <fieldset disabled={state.submitting} className="space-y-6">
            <legend className="sr-only">Contact and project details</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { name: "name", label: "Name *", type: "text", autoComplete: "name", required: true },
                { name: "email", label: "Email *", type: "email", autoComplete: "email", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", autoComplete: "tel", required: false },
                { name: "city", label: "City or ZIP code *", type: "text", autoComplete: "off", required: true },
              ].map(field => <div key={field.name}><label htmlFor={field.name} className="text-sm font-semibold">{field.label}</label><input {...field} id={field.name} maxLength={field.name === "phone" ? 30 : 150} className={inputClass} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />{errors[field.name] && <p id={`${field.name}-error`} className="mt-1 text-sm text-red-700">{errors[field.name]}</p>}</div>)}
            </div>
            <fieldset id="services" aria-describedby={errors.services ? "services-error" : "services-help"}>
              <legend className="font-semibold">What needs cleaning? *</legend><p id="services-help" className="mb-3 mt-1 text-sm text-muted-foreground">Select all that apply.</p>
              <div className="grid gap-3 sm:grid-cols-2">{SERVICES.map(service => <label key={service.id} className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5"><input id={`service-${service.id}`} type="checkbox" name="services" value={service.id} defaultChecked={params.get("service") === service.id} className="h-5 w-5 accent-teal-700" aria-invalid={!!errors.services} /><span className="text-sm font-semibold">{service.name}</span></label>)}</div>
              {errors.services && <p id="services-error" className="mt-2 text-sm text-red-700">{errors.services}</p>}
            </fieldset>
            <div><label htmlFor="address" className="text-sm font-semibold">Street address (optional)</label><input id="address" name="address" autoComplete="street-address" maxLength={250} className={inputClass} /></div>
            <div><label htmlFor="message" className="text-sm font-semibold">Anything else? (optional)</label><textarea id="message" name="message" rows={4} maxLength={3000} className={inputClass} placeholder="Surface material, approximate size, stains, access, or preferred timing." /></div>
            <div hidden aria-hidden="true"><label htmlFor="website">Leave this empty</label><input id="website" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
            <p className="text-sm leading-relaxed text-muted-foreground">By sending this request, you ask {BUSINESS.legalName} to contact you about this project. <Link to="/privacy" className="font-semibold text-primary underline">How we handle your information</Link></p>
            <button type="submit" disabled={state.submitting} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-4 font-bold text-white disabled:opacity-60"><Send aria-hidden="true" className="h-5 w-5 shrink-0" /><span>{state.submitting ? "Sending…" : "Send Quote Request"}</span></button>
          </fieldset>
        </form>
        <aside className="rounded-3xl bg-primary/5 p-6"><h2 className="text-xl font-bold">What happens next?</h2><ol className="mt-5 list-inside list-decimal space-y-4 text-muted-foreground"><li>We review the services and location you shared.</li><li>We may ask for photos, measurements, or a property visit.</li><li>We agree on scope, price, and timing before booking.</li></ol><p className="mt-6 border-t border-primary/20 pt-5 text-sm text-muted-foreground">Currently accepting requests for driveways, sidewalks, siding, and fences.</p></aside>
      </section>
    </>}
  </main><Footer /></div>;
}
