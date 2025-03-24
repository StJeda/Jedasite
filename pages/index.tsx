import { Dispatch, FC, RefObject, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import sass from '/styles/mainpage.module.scss'
import MainComponent from "./components/main-component";
import WhyChooseUs from "./components/why-choose-us";
import StackTechnologies from "./components/stack-techtologies";

const Home: FC = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const whyChooseUsRef = useRef<HTMLDivElement | null>(null);
  const stackTechnologiesRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(CurrentPage.Main)
  const pages = useMemo(() => [
    { page: CurrentPage.Main, ref: mainRef },
    { page: CurrentPage.WhyChooseUs, ref: whyChooseUsRef },
    { page: CurrentPage.StackTechnologies, ref: stackTechnologiesRef },
  ], []);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
    }, 300)

    const handleWheel = (event: WheelEvent) => {
      if (throttleTimeout) return;
  
      event.preventDefault();
  
      if (Math.abs(event.deltaY) > 40) {
        const currentIndex = pages.findIndex((p) => p.page === currentPage);
        if (currentIndex !== -1) {
          const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
          if (nextIndex >= 0 && nextIndex < pages.length) {
            const nextPage = pages[nextIndex];
            scrollIntoSpecifiedView(setCurrentPage, nextPage.page, nextPage.ref);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage]);

  return (
    <div className={sass.layout}>
      <div ref={mainRef} id="main" className={sass.content_container}>
        <MainComponent />
      </div>
      <div ref={whyChooseUsRef} id="whyChooseUs" className={sass.content_container}>
        <WhyChooseUs />
      </div>
      <div ref={stackTechnologiesRef} id="stackTechnologies" className={sass.content_container}>
        <StackTechnologies />
      </div>
    </div>
  );
};

function scrollIntoSpecifiedView(setCurrentPage: Dispatch<SetStateAction<CurrentPage>>, nextPage: CurrentPage, ref: RefObject<HTMLDivElement | null>){
  ref.current?.scrollIntoView({
    behavior: 'smooth'
  })
  setCurrentPage(nextPage);
}

enum CurrentPage {
  Main,
  WhyChooseUs,
  StackTechnologies
}


export default Home;