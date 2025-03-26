import { useEffect, useState, useMemo } from "react";
import { Pages } from "@/models/enums/pages";
import { switchPage } from "@/vll/utils/switchPage";

export const usePageNavigation = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Main);

  const pages = useMemo(() => [
    Pages.Main,
    Pages.WhyChooseUs,
    Pages.StackTechnologies,
  ], []);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (event: WheelEvent) => {
      if (throttleTimeout) return;
      event.preventDefault();
      switchPage(pages, setCurrentPage, currentPage, event.deltaY);

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 300);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartY - touchEndY;
      if (Math.abs(swipeDistance) > 50) {
        switchPage(pages, setCurrentPage, currentPage, swipeDistance);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage, pages]);

  return { currentPage, setCurrentPage };
};
