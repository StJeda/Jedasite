import { FC } from "react";
import sass from '/styles/mainpage.module.scss'
import MainComponent from "./components/main-component";

const Home: FC = () => {
  return (
    <div className={sass.layout}>
        <div className={sass.content_container}>
        <MainComponent />
        </div>
    </div>
  );
};

export default Home;
