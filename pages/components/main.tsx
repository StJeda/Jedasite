import sass from "/styles/mainpage.module.scss";
import { FC } from "react";

const MainComponent: FC = () => {
    return  <img src="/mainpage-logo.svg" alt="Main Logo" className={sass.logo} />;
};

export default MainComponent;
