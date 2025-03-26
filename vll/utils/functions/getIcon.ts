import technologies from "@/models/enums/technologies";

export function getIcon(tech: technologies, isOnFocus: boolean): string {
    const iconsMap: Record<technologies, { focused: string; default: string }> = {
        [technologies.Design]: { focused: "two-stars-black.png", default: "two-stars-white.png" },
        [technologies.Frontend]: { focused: "three-circles-black.png", default: "three-circles-white.png" },
        [technologies.Backend]: { focused: "chip-black.png", default: "chip-white.png" }
    };

    return isOnFocus ? iconsMap[tech].focused : iconsMap[tech].default;
}