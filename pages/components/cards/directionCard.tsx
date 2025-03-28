import sass from "@/styles/directionCard.module.scss";
import fonts from "@/styles/fonts.module.scss"
import { FC, memo, useEffect, useState } from "react";
import { getIcon } from "@/vll/utils/functions/getIcon";
import { getDirectionStyle } from "@/vll/utils/functions/getDirectionStyle";
import { trimText } from "@/vll/utils/functions/trimText";
import Directions from "@/models/enums/directions";

interface IProps {
    direction: Directions;
    header: string;
    description: string;
    isOnFocus: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const DirectionCard: FC<IProps> = memo(
    ({ direction, header, description, isOnFocus, onMouseEnter, onMouseLeave }) => {

        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        if (!isClient)
            return <div>Loading...</div>; /*Нужно добавить форму прогрузки*/

        return (
            <div
                className={sass.container}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={`${sass.heading} ${isOnFocus ? sass.headingFocused : getDirectionStyle(direction)}`}>
                    {isOnFocus && <p className={sass.headingTitle}>{fonts.Exo}Using modern AI</p>}
                    <img
                        style={isOnFocus ? { marginLeft: "8px" } : undefined}
                        width={20}
                        height={20}
                        src={getIcon(direction, isOnFocus)}
                        alt="icon"
                    />
                </div>
                <div className={`${sass.main} ${isOnFocus ? getDirectionStyle(direction) : ""}`}>
                    <h3 className={`${sass.header} ${isOnFocus ? sass.txtLemon : undefined}`}>
                        {fonts.Exo}
                        {header}
                    </h3>
                    <p className={sass.description}>
                        {isOnFocus ? description : trimText(description, 60)}
                    </p>
                </div>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.isOnFocus === nextProps.isOnFocus
)

export default DirectionCard;