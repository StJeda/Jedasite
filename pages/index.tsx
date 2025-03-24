import { Dispatch, FC, ReactElement, RefObject, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import sass from '/styles/mainpage.module.scss'
import fonts from '/styles/fonts.module.scss'
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

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
    }, 300)

    const handleWheel = (event: WheelEvent) => {
      if (throttleTimeout) return;

      event.preventDefault();

      switchPage(pages, setCurrentPage, currentPage, event);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);
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
  let component: ReactElement;
  switch (currentPage) {
    case CurrentPage.Main:
      component = <MainComponent />
      break;
    case CurrentPage.WhyChooseUs:
      component = <WhyChooseUs />
      break;
    case CurrentPage.StackTechnologies:
      component = <StackTechnologies />
      break;
    default:
      throw Error(`Unexpected case with current page ${currentPage}`)
  }

  return component;
}

function switchPage(pages: CurrentPage[], setCurrentPage: Dispatch<SetStateAction<CurrentPage>>, currentPage: CurrentPage, event: WheelEvent) {
  if (Math.abs(event.deltaY) > 40) {
    const currentIndex = pages.findIndex((p) => p === currentPage);
    if (currentIndex !== -1) {
      const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < pages.length) {
        const nextPage = pages[nextIndex];
        setCurrentPage(nextPage);
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