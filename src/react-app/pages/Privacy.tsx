import { Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { BUSINESS } from "@/react-app/lib/business";
export default function Privacy() {
  return <><Navbar /><main id="main-content" className="mx-auto max-w-3xl px-4 pb-20 pt-36">
    <h1 className="text-4xl font-black">Quote request privacy</h1>
    <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
      <p>The quote form sends your name, phone number, property address including city, state and ZIP code, selected services, property type, approximate square footage, preferred timing, and any optional email address or notes to {BUSINESS.legalName} so we can review and respond to your request.</p>
      <p>When you submit the form, your information is processed by our website host, Cloudflare, and delivered to us by email. Read <a href="https://www.cloudflare.com/privacypolicy/" className="text-primary underline">Cloudflare's privacy policy</a> for its data handling practices.</p>
      <p>Only share information needed for the cleaning request. Do not include payment details, identification documents, or other sensitive information.</p>
      <p>For questions about a submitted request or to ask us to delete it, reply to our response email or use the <Link to="/estimate" className="text-primary underline">quote form</Link> and explain your request.</p>
    </div>
  </main><Footer /></>;
}
