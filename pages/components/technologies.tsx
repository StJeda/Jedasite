import Technologies from "@/models/enums/technologies";
import { FC, useState } from "react";
import DirectionCard from "./cards/directionCard";


const StackTechnologies: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Technologies | null>(null);

    return (
        <div>
            <DirectionCard
                header="UI/UX Design"
                description="We create intuitive and visually stunning interfaces. UX enhances interactions, while UI ensures aesthetics and conversions."
                technology={Technologies.Design}
                isOnFocus={isFocused(Technologies.Design)}
                onMouseEnter={() => setFocusedCard(Technologies.Design)}
                onMouseLeave={() => setFocusedCard(null)}
            />
            <DirectionCard
                header="Frontend"
                description="We make web apps fast, responsive and seamless cutting-edge tech ensures smooth performance and instant loading"
                technology={Technologies.Frontend}
                isOnFocus={isFocused(Technologies.Frontend)}
                onMouseEnter={() => setFocusedCard(Technologies.Frontend)}
                onMouseLeave={() => setFocusedCard(null)}
            />
            <DirectionCard
                header="Backend"
                description="We build secure and scalable server solutions. Reliable architecture and APIs keep your business running smoothly"
                technology={Technologies.Backend}
                isOnFocus={isFocused(Technologies.Backend)}
                onMouseEnter={() => setFocusedCard(Technologies.Backend)}
                onMouseLeave={() => setFocusedCard(null)}
            />
        </div>
    )

    function isFocused(targetTechnology: Technologies): boolean {
        return focusedCard === targetTechnology ? true : false;
    }
}

export default StackTechnologies;