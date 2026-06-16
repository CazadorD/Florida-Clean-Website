import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import RoofCleaningPage from "@/react-app/pages/RoofCleaning";
import DrivewayPage from "@/react-app/pages/Driveway";
import HouseWashingPage from "@/react-app/pages/HouseWashing";
import CommercialPage from "@/react-app/pages/Commercial";
import EstimatePage from "@/react-app/pages/Estimate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/roof-cleaning" element={<RoofCleaningPage />} />
        <Route path="/services/driveway-sidewalk" element={<DrivewayPage />} />
        <Route path="/services/house-washing" element={<HouseWashingPage />} />
        <Route path="/services/commercial" element={<CommercialPage />} />
        <Route path="/estimate" element={<EstimatePage />} />
      </Routes>
    </Router>
  );
}
