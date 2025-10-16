import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

const ScrollToTop = ({ dependencies }: { dependencies?: any[] }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname, ...(dependencies || [])]);

  return null;
};

export default ScrollToTop;
