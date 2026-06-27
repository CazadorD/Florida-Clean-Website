import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Resets scroll position to the top whenever the route changes.
 * React Router does not do this automatically — without it, navigating
 * to a new page keeps you at whatever scroll position you were at.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
