import technologies from "@/models/enums/technologies";
import sass from "@/styles/directionCard.module.scss";
import fonts from "@/styles/fonts.module.scss"
import { FC, memo, useEffect, useState } from "react";
import { getIcon } from "@/vll/utils/functions/getIcon";
import { getTechnologyStyle } from "@/vll/utils/functions/getTechnologyStyle";
import { trimText } from "@/vll/utils/functions/trimText";
import { IProps } from "@/vll/utils/interfaces/props";

const DirectionCard: FC<IProps> = memo(
    ({technology, header, description, isOnFocus, onMouseEnter, onMouseLeave}) => {
        const [tech, setTech] = useState<technologies | null>(null);

        useEffect(() => {
            if (technology !== undefined) {
                setTech(technology);
            }
        }, [technology]);

        if (tech === null) {
            return null;
        }

        return(
            <div 
                className={sass.container}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={`${sass.heading} ${isOnFocus ? sass.headingFocused : getTechnologyStyle(tech) }`}>
                    { isOnFocus && <p className={sass.headingTitle}>{fonts.Exo}Using modern AI</p>}
                    <img 
                        style={isOnFocus ? {marginLeft: "8px"}: undefined}
                        width={20}
                        height={20}
                        src={getIcon(tech, isOnFocus)}
                        alt="icon"
                    />
                </div>
                <div className={`${sass.main} ${isOnFocus ? getTechnologyStyle(tech) : ""}`}>
                    <h3 className={`${sass.header} ${isOnFocus ? sass.txtLemon : undefined}`}>
                        {fonts.Exo}
                        {header}
                    </h3>
                    <p className={sass.description}>
                        {isOnFocus ? description : trimText(description, 40)}
                    </p>
                </div>  
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.isOnFocus === nextProps.isOnFocus
)

export default DirectionCard;