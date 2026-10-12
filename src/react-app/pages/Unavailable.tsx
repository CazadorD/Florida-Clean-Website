import { Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
export default function Unavailable({ retired = false }: { retired?: boolean }) {
  return <><Navbar /><main id="main-content" className="mx-auto max-w-2xl px-4 pb-24 pt-40 text-center"><h1 className="text-4xl font-black">{retired ? "This service is not currently offered" : "Page not found"}</h1><p className="mt-6 text-lg text-muted-foreground">Our current services are driveway, sidewalk, siding, and fence cleaning.</p><Link to="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white">Explore available services</Link></main><Footer /></>;
}

