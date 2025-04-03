import { ReactElement } from "react";
import { Pages } from "../../models/enums/pages";
import MainComponent from "@/pages/components/main";
import AboutUs from "@/pages/components/aboutsUs";
import Technologies from "@/pages/components/technologies";

export function getPageComponent(currentPage: Pages): ReactElement {
    switch (currentPage) {
      case Pages.Main:
        return <MainComponent />;
      case Pages.AboutUs:
        return <AboutUs />;
      case Pages.StackTechnologies:
        return <Technologies />;
      default:
        throw Error(`Unexpected case with current page ${currentPage}`);
    }
}