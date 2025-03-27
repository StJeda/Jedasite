import Technologies from "@/models/enums/technologies";
import { FC, useState } from "react";
import DirectionCard from "./cards/directionCard";


const StackTechnologies: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Technologies | null>(null);

    return (
        <div>
            <h1 style={{ color: "#fff" }}>StackTechnologies</h1>
        </div>

    )

    function isFocused(targetTechnology: Technologies): boolean {
        return focusedCard === targetTechnology ? true : false;
    }
}

export default StackTechnologies;