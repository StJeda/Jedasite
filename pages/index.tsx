import { Dispatch, FC, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import sass from '/styles/mainpage.module.scss'
import MainComponent from "./components/main-component";
import WhyChooseUs from "./components/why-choose-us";
import StackTechnologies from "./components/stack-techtologies";

const Home: FC = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const whyChooseUsRef = useRef<HTMLDivElement | null>(null);
  const stackTechnologiesRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(CurrentPage.Main)

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null; // Use timeout to prevent too often method calls, for example after strong scroll

    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
    }, 300)

    const handleWheel = (event: WheelEvent) => {
      if(throttleTimeout) return;

      event.preventDefault();

      if(Math.abs(event.deltaY) > 40){
        switch (currentPage) {
          case CurrentPage.Main:
            if(event.deltaY > 0){
              scrollIntoSpecifiedView(setCurrentPage, CurrentPage.WhyChooseUs, whyChooseUsRef);
            }
            break;
          case CurrentPage.WhyChooseUs:
            if(event.deltaY > 0){
              scrollIntoSpecifiedView(setCurrentPage, CurrentPage.StackTechnologies, stackTechnologiesRef);
            } else {
              scrollIntoSpecifiedView(setCurrentPage, CurrentPage.Main, mainRef);
            }
            break;
          case CurrentPage.StackTechnologies:
            if(event.deltaY < 0){
              scrollIntoSpecifiedView(setCurrentPage, CurrentPage.WhyChooseUs, whyChooseUsRef);
            }
            break;
          default:
            console.log("NONE") 
            break;
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