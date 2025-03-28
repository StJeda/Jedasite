import technologies from "@/models/enums/directions";
import Chip from '@/public/chip-black.svg';
import ThreeCircles from "@/public/three-circles-black.svg"
import TwoStars from "@/public/two-stars-black.svg"

export function getIcon(tech: technologies, isOnFocus: boolean): string {
    const iconsMap: Record<technologies, { focused: string; default: string }> = {
        [technologies.Design]: { focused: "two-stars-black.svg", default: "two-stars-white.svg" },
        [technologies.Frontend]: { focused: "three-circles-black.svg", default: "three-circles-white.svg" },
        [technologies.Backend]: { focused: "chip-black.svg", default: "chip-white.svg" }
    };

    return isOnFocus ? iconsMap[tech].focused : iconsMap[tech].default;
}