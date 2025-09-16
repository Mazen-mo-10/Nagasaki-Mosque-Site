// components/ScrollProgress.jsx
import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      setScrollProgress(scrollPercentRounded);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="relative h-64 w-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-500 to-emerald-600 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
