import { useEffect } from "react";
import { switchPage } from "@/vll/utils/switchPage";
import { Pages } from "@/models/enums/pages";

export const wheelHandler = (
  pages: Pages[],
  currentPage: Pages,
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>
) => {
  let touchStartY = 0;
  let touchEndY = 0;

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
    }, 300)

    const handleWheel = (event: WheelEvent) => {
      if (throttleTimeout) return;
      event.preventDefault();
      switchPage(pages, setCurrentPage, currentPage, event.deltaY);
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

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, pages, setCurrentPage]);
};
