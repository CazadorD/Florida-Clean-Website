import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import DrivewayPage from "@/react-app/pages/Driveway";
import HouseWashingPage from "@/react-app/pages/HouseWashing";
import FenceCleaningPage from "@/react-app/pages/FenceCleaning";
import EstimatePage from "@/react-app/pages/Estimate";
import Privacy from "@/react-app/pages/Privacy";
import Unavailable from "@/react-app/pages/Unavailable";
import ScrollToTop from "@/react-app/components/ScrollToTop";
export default function App() {
 return <Router><ScrollToTop /><Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services/driveway-sidewalk" element={<DrivewayPage />} />
  <Route path="/services/driveway-cleaning" element={<DrivewayPage />} />
  <Route path="/services/sidewalk-cleaning" element={<DrivewayPage />} />
  <Route path="/services/house-washing" element={<HouseWashingPage />} />
  <Route path="/services/siding-cleaning" element={<Navigate to="/services/house-washing" replace />} />
  <Route path="/services/fence-cleaning" element={<FenceCleaningPage />} />
  <Route path="/estimate" element={<EstimatePage />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="*" element={<Unavailable />} />
 </Routes></Router>;
}
