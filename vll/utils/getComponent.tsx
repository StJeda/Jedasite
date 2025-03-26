import { ReactElement } from "react";
import { Pages } from "../../models/enums/pages";
import MainComponent from "@/pages/components/main";
import WhyChooseUs from "@/pages/components/whyChooseUs";
import Technologies from "@/pages/components/technologies";

export function getPageComponent(currentPage: Pages): ReactElement {
    switch (currentPage) {
      case Pages.Main:
        return <MainComponent />;
      case Pages.WhyChooseUs:
        return <WhyChooseUs />;
      case Pages.StackTechnologies:
        return <Technologies />;
      default:
        throw Error(`Unexpected case with current page ${currentPage}`);
    }
}