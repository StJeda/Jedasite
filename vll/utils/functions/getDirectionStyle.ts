import technologies from "@/models/enums/directions";
import sass from "@/styles/directionCard.module.scss";

export function getDirectionStyle(tech: technologies): string {
    const stylesMap: Record<technologies, string> = {
        [technologies.Design]: sass.design,
        [technologies.Frontend]: sass.frontend,
        [technologies.Backend]: sass.backend
    };
    return stylesMap[tech];
}
