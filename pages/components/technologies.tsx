import Directions from "@/models/enums/directions";
import { FC, useState } from "react";
import DirectionCard from "./cards/directionCard";


const StackTechnologies: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Directions | null>(null);

    return (
        <div>
            <h1 style={{ color: "#fff" }}>StackTechnologies</h1>
        </div>

    )

    function isFocused(targetDirection: Directions): boolean {
        return focusedCard === targetDirection ? true : false;
    }
}

export default StackTechnologies;