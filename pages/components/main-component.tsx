import { FC } from "react";
import sass from "/styles/mainpage.module.scss";

const MainComponent: FC = () => {
return  <img src="/mainpage-logo.svg" alt="Main Logo" className={sass.logo} />;
};

export default MainComponent;
