import { Pages } from "@/models/enums/pages";
import { Dispatch, SetStateAction } from "react";

export function switchPage(
    pages: Pages[],
    setCurrentPage: Dispatch<SetStateAction<Pages>>,
    currentPage: Pages,
    deltaY: number
    ) {
        if (Math.abs(deltaY) > 40) {
            const currentIndex = pages.findIndex((p) => p === currentPage);
        if (currentIndex !== -1) {
            const nextIndex = deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < pages.length) {
            setCurrentPage(pages[nextIndex]);

            console.log('Switching from:', currentPage);  
            }
        }
    }
}