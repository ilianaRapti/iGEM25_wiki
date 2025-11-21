// When you click a card:
// - React Router doesn’t reload the page — it just changes the URL or component state.
// - Because the browser isn’t reloading, the scroll position stays where it was.
// So when you "navigate" to a new section (e.g., ?event=17), you’re already halfway down the page.
// This is a patch that works across the app (whenever path or query changes)


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Scrolls to the top whenever URL path or query (?something=) changes
    window.scrollTo({ top: 0, behavior: "instant" });

    // For a smooth scroll (optional):
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, search]);

  return null;
}
