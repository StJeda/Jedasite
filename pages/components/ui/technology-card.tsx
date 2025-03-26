import Technology from "@/models/technology.enum";
import styles from "@/styles/technology-card.module.scss";
import { trimText } from "@/utils/utils";
import { FC, memo, useEffect, useState } from "react";

interface IProps{
    technology?: Technology;
    header: string;
    description: string;
    isOnFocus: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const TechnologyCard: FC<IProps> = memo(
    ({technology, header, description, isOnFocus, onMouseEnter, onMouseLeave}) => {
        const [tech, setTech] = useState<Technology | null>(null);

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
                className={styles.container}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={`${styles.heading} ${isOnFocus ? styles.headingFocused : getTechnologyStyle() }`}>
                    { isOnFocus && <p className={styles.headingTitle}>{/* TODO: Change font family to Exo */}Using modern AI</p>}
                    <img 
                        style={isOnFocus ? {marginLeft: "8px"}: undefined}
                        width={20}
                        height={20}
                        src={getIcon()}
                        alt="icon"
                    />
                </div>
                <div className={`${styles.main} ${isOnFocus ? getTechnologyStyle() : ""}`}>
                    <h3 className={`${styles.header} ${isOnFocus ? styles.txtLemon : undefined}`}>
                        {/* TODO: Change font family to Exo */}
                        {header}
                    </h3>
                    <p className={styles.description}>
                        {isOnFocus ? description : trimText(description, 40)}
                    </p>
                </div>  
            </div>
        );

        function getTechnologyStyle(): string{
            switch(tech){
                case Technology.Design:
                    return styles.design
                case Technology.Frontend:
                    return styles.frontend
                case Technology.Backend:
                    return styles.backend
                default:
                    console.error(`Case with technology ${technology} is not described.`);
                    return "";
            }
        }

        function getIcon(): string{
            switch(tech){
                case Technology.Design:
                    return isOnFocus ? "two-stars-black.png" : "two-stars-white.png"
                case Technology.Frontend:
                    return isOnFocus ? "three-circles-black.png" : "three-circles-white.png"
                case Technology.Backend:
                    return isOnFocus ? "chip-black.png" : "chip-white.png"
                default:
                    console.error(`Case with technology ${technology} is not described.`);
                    return "";
            }
        }
    },
    (prevProps, nextProps) => prevProps.isOnFocus === nextProps.isOnFocus
)

export default TechnologyCard;