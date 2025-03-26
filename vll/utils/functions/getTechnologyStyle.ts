import technologies from "@/models/enums/technologies";
import sass from "@/styles/directionCard.module.scss";

export function getTechnologyStyle(tech: technologies): string {
    const stylesMap: Record<technologies, string> = {
        [technologies.Design]: sass.design,
        [technologies.Frontend]: sass.frontend,
        [technologies.Backend]: sass.backend
    };
    return stylesMap[tech];
}
