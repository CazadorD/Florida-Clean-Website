import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ServicePage from "@/react-app/pages/ServicePage";
import EstimatePage from "@/react-app/pages/Estimate";
import Privacy from "@/react-app/pages/Privacy";
import Unavailable from "@/react-app/pages/Unavailable";
import ScrollToTop from "@/react-app/components/ScrollToTop";
import { SERVICES } from "@/react-app/lib/business";
export default function App() {
  return <Router><ScrollToTop /><Routes>
    <Route path="/" element={<HomePage />} />
    {SERVICES.map(service => <Route key={service.id} path={service.path} element={<ServicePage service={service} />} />)}
    <Route path="/estimate" element={<EstimatePage />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/services/driveway-sidewalk" element={<Navigate to="/services/driveway-cleaning" replace />} />
    <Route path="/services/house-washing" element={<Navigate to="/services/siding-cleaning" replace />} />
    <Route path="/services/roof-cleaning" element={<Unavailable retired />} />
    <Route path="/services/commercial" element={<Unavailable retired />} />
    <Route path="*" element={<Unavailable />} />
  </Routes></Router>;
}
