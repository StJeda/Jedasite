import { FC } from "react";
import sass from '/styles/mainpage.module.scss'
import MainComponent from "./components/main-component";
import LeftSidebar from "./components/Left-sidebar";
import RightSidebar from "./components/Right-sidebar";

const Home: FC = () => {
  return (
    <div className={sass.layout}>
        <LeftSidebar />
        <div className={sass.content_container}>
        
        <MainComponent />
        </div>
        <RightSidebar />
    </div>
  );
};

export default Home;
