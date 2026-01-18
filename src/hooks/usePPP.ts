import { useState, useEffect } from "react";
import { getPPPDiscount, type PPPCountry } from "@/lib/ppp";

interface PPPState {
  country: PPPCountry | null;
  countryCode: string | null;
  isLoading: boolean;
  isDismissed: boolean;
  dismiss: () => void;
}

const PPP_DISMISSED_KEY = "ppp_banner_dismissed";

/**
 * Hook to detect user's country and get PPP discount info
 *
 * Detection methods (in order):
 * 1. Cloudflare injects country into cookie "cf_country" via Workers
 * 2. Cloudflare injects into window.__CF_COUNTRY__ via Workers
 * 3. Falls back to ip-api.com (free, no API key needed)
 */
export function usePPP(): PPPState {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(PPP_DISMISSED_KEY) === "true";
  });

  useEffect(() => {
    async function detectCountry() {
      // Debug: Allow testing via URL param, e.g., ?ppp=IN
      const urlParams = new URLSearchParams(window.location.search);
      const debugCountry = urlParams.get("ppp");
      if (debugCountry) {
        setCountryCode(debugCountry.toUpperCase());
        setIsLoading(false);
        return;
      }

      // Fetch country from Cloudflare Worker API
      try {
        const res = await fetch("https://workers.retroui.dev/geo/country");
        const data = await res.json();
        if (data.country) {
          setCountryCode(data.country);
        }
      } catch (error) {
        console.error("Failed to detect country:", error);
      } finally {
        setIsLoading(false);
      }
    }

    detectCountry();
  }, []);

  const dismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(PPP_DISMISSED_KEY, "true");
  };

  const country = getPPPDiscount(countryCode);

  return {
    country,
    countryCode,
    isLoading,
    isDismissed,
    dismiss,
  };
}
