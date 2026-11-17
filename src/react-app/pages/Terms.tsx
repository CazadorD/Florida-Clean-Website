import { Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { BUSINESS } from "@/react-app/lib/business";

const updated = "November 17, 2026";

export default function Terms() {
  return <><Navbar /><main id="main-content" className="mx-auto max-w-3xl px-4 pb-20 pt-36">
    <h1 className="text-4xl font-black">Terms of Service</h1>
    <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
    <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
      <p>These terms apply to exterior cleaning services provided by {BUSINESS.name}, operated by {BUSINESS.legalName} ("we", "us"), in Tampa, Riverview, Brandon and nearby areas. By requesting a quote or booking a service, you agree to these terms.</p>

      <h2 className="text-xl font-bold text-foreground">Quotes</h2>
      <p>Quotes are free and are based on the information and photos you provide or on our on-site review. A quote is valid for 30 days. If the area, surface or condition is different from what was described, we will tell you before starting and give you an updated price. No extra work is done without your approval.</p>

      <h2 className="text-xl font-bold text-foreground">Scheduling, weather and cancellations</h2>
      <p>We may reschedule because of rain, storms or unsafe conditions, and will contact you to choose a new date. If you need to cancel or reschedule, please let us know at least 24 hours in advance by calling or texting {BUSINESS.phone}.</p>

      <h2 className="text-xl font-bold text-foreground">What we need from you</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Access to the work area and to a working outdoor water spigot. The water used is billed on your normal water bill.</li>
        <li>Vehicles, furniture, potted plants, toys and other items moved away from the areas to be cleaned.</li>
        <li>Windows and doors closed, and pets kept inside during the service.</li>
        <li>Telling us about any known damage, loose paint, cracks, recent repairs, outdoor outlets or lights that are not sealed, or anything fragile near the work area.</li>
      </ul>

      <h2 className="text-xl font-bold text-foreground">Results</h2>
      <p>We work to get every surface as clean as possible, but results depend on the surface and the type and age of the staining. Some stains, such as old oil, rust, paint, burn marks or etching, may lighten without disappearing completely. Cleaning can make existing cracks, wear or previous repairs more visible.</p>

      <h2 className="text-xl font-bold text-foreground">Pre-existing conditions</h2>
      <p>We are not responsible for damage caused by pre-existing conditions, such as loose or failing paint, rotten or damaged wood, cracked or loose concrete or pavers, worn sealant, improperly sealed windows or doors, or loose fixtures. If we notice a problem before starting, we will tell you.</p>

      <h2 className="text-xl font-bold text-foreground">Cleaning solutions and plants</h2>
      <p>Some services use cleaning solutions. We rinse nearby plants and grass before and after applying them, but we cannot guarantee that very sensitive plants will not be affected.</p>

      <h2 className="text-xl font-bold text-foreground">Payment</h2>
      <p>Payment is due when the work is complete, unless we agreed otherwise in writing. We accept the payment methods listed on your quote or invoice.</p>

      <h2 className="text-xl font-bold text-foreground">Satisfaction</h2>
      <p>If something does not look right, please tell us within 48 hours of the service and send photos. We will review it with you and, if it is within the agreed scope, come back to fix it at no extra cost.</p>

      <h2 className="text-xl font-bold text-foreground">Photos</h2>
      <p>We may take before-and-after photos of the cleaned areas. We will only share them publicly, for example on our website or social media, if you agree, and we will not show house numbers, license plates or people.</p>

      <h2 className="text-xl font-bold text-foreground">Privacy</h2>
      <p>How we handle the information you send in the quote form is explained in our <Link to="/privacy" className="text-primary underline">privacy notice</Link>.</p>

      <h2 className="text-xl font-bold text-foreground">Contact</h2>
      <p>Questions about these terms: call or text {BUSINESS.phone}, or use the <Link to="/estimate" className="text-primary underline">quote form</Link>.</p>
    </div>
  </main><Footer /></>;
}
