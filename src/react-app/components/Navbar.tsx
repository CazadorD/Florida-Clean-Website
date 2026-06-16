import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Phone, Sun } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle nav link click: if already on that page, scroll to top
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Roof Cleaning", href: "/services/roof-cleaning" },
    { name: "Driveways", href: "/services/driveway-sidewalk" },
    { name: "House Washing", href: "/services/house-washing" },
    { name: "Commercial", href: "/services/commercial" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center shadow-lg">
                <Sun className="w-7 h-7 text-white" />
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-foreground">
                  FLORIDA CLEAN
                </span>
                <span className="text-xs text-primary font-semibold -mt-0.5">
                  Pressure Washing Co.
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all hover:text-primary hover:bg-primary/10 ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm font-bold text-foreground"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                (555) 123-4567
              </a>
              <Link to="/estimate">
                <Button className="bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90 text-white font-bold px-6 rounded-full shadow-lg shadow-secondary/30">
                  Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 font-medium rounded-xl hover:bg-muted transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-border mt-4 space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 px-4 py-2 text-secondary font-bold"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
                <Link to="/estimate" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-secondary to-orange-500 text-white font-bold rounded-full">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      <ScrollToTopButton />
    </>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-500 text-white shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
