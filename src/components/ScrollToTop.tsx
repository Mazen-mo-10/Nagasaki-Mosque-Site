// components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-10 right-6 z-50 w-12 h-12 p-0 rounded-full bg-emerald-600 hover:bg-emerald-700 hover:scale-110 transition-all duration-300 shadow-lg"
      aria-label="انتقل إلى الأعلى"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollToTop;
