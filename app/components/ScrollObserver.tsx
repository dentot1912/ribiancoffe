"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    let intersectionObserver: IntersectionObserver;
    let mutationObserver: MutationObserver;

    const animationClasses = [
      ".animate-fade-up",
      ".animate-fade-down",
      ".animate-fade-in",
      ".animate-slide-right",
      ".animate-scale-in"
    ].join(", ");

    const init = () => {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              intersectionObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      // Initial observation
      const elements = document.querySelectorAll(animationClasses);
      elements.forEach((el) => intersectionObserver.observe(el));

      // Watch for new elements added to the DOM
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              // Check the node itself
              if (node.matches(animationClasses)) {
                intersectionObserver.observe(node);
              }
              // Check children
              const children = node.querySelectorAll(animationClasses);
              children.forEach((child) => intersectionObserver.observe(child));
            }
          });
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    };

    // Coordination with LoadingScreen.tsx
    const timeout = setTimeout(init, 3800);

    return () => {
      clearTimeout(timeout);
      if (intersectionObserver) intersectionObserver.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, []);

  return null;
}
