"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    let observer: IntersectionObserver;
    
    // Delay animations until the loading screen begins to slice open (coordinated with LoadingScreen.tsx)
    const timeout = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.1, 
          rootMargin: "0px 0px -50px 0px" 
        }
      );

      const elements = document.querySelectorAll(
        ".animate-fade-up, .animate-fade-down, .animate-fade-in, .animate-slide-right, .animate-scale-in"
      );

      elements.forEach((el) => observer.observe(el));
    }, 3800);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
