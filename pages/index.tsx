import { Dispatch, FC, ReactElement, SetStateAction, useEffect, useMemo, useState } from "react";
import sass from '/styles/mainpage.module.scss'
import MainComponent from "./components/main-component";
import WhyChooseUs from "./components/why-choose-us";
import StackTechnologies from "./components/stack-techtologies";
import { motion, AnimatePresence } from "framer-motion";

const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState(CurrentPage.Main)

  const pages = useMemo(() => [
    CurrentPage.Main,
    CurrentPage.WhyChooseUs,
    CurrentPage.StackTechnologies,
  ], []);

  let touchStartY = 0;
  let touchEndY = 0;

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
    }, 300);

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
  }, [currentPage]);

  const pageToRender = getPageComponent(currentPage);

  return (
    <div className={sass.layout}>
      <div className={sass.content_container}>
        <AnimatePresence mode="wait">
          <motion.div
            style={{ margin: '0' }}
            key={currentPage}
            className={sass.content_container}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {pageToRender}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

function getPageComponent(currentPage: CurrentPage): ReactElement {
  switch (currentPage) {
    case CurrentPage.Main:
      return <MainComponent />;
    case CurrentPage.WhyChooseUs:
      return <WhyChooseUs />;
    case CurrentPage.StackTechnologies:
      return <StackTechnologies />;
    default:
      throw Error(`Unexpected case with current page ${currentPage}`);
  }
}

function switchPage(
  pages: CurrentPage[],
  setCurrentPage: Dispatch<SetStateAction<CurrentPage>>,
  currentPage: CurrentPage,
  deltaY: number
) {
  if (Math.abs(deltaY) > 40) {
    const currentIndex = pages.findIndex((p) => p === currentPage);
    if (currentIndex !== -1) {
      const nextIndex = deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < pages.length) {
        setCurrentPage(pages[nextIndex]);
      }
    }
  }
}

enum CurrentPage {
  Main,
  WhyChooseUs,
  StackTechnologies
}

export default Home;
