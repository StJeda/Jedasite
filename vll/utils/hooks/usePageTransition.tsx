import { useState, useMemo } from "react";
import { Pages } from "@/models/enums/pages";
import { wheelHandler } from "@/vll/utils/handlers/wheelHandler";

export const usePageTransition = () => {
    const [currentPage, setCurrentPage] = useState(Pages.Main);
    const pages = useMemo(() => [
    Pages.Main,
    Pages.WhyChooseUs,
    Pages.StackTechnologies,
  ], []);

  wheelHandler(pages, currentPage, setCurrentPage);

  return { currentPage, pages };
};
